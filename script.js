const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectFilterBtn = document.getElementById("rejected-filter-btn");

const totalCount = document.getElementById("total");
const interviewCount = document.getElementById("interview");
const rejectCount = document.getElementById("reject");

let interviewList = [];
let rejectedList = [];

const allCards = document.getElementById("allCards");
const jobCount = document.getElementById("job-count");
const interviewSection = document.getElementById("interviewSection");
const rejectedSection = document.getElementById("rejectedSection");
const emptyState = document.getElementById("emptyState");

let activeTab = "all"; // "all" | "interview" | "rejected"

function updateTopCounts() {
    totalCount.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectCount.innerText = rejectedList.length;
}

function updateVisibleJobCount() {
    if (activeTab === "all") jobCount.innerText = allCards.children.length;
    if (activeTab === "interview") jobCount.innerText = interviewList.length;
    if (activeTab === "rejected") jobCount.innerText = rejectedList.length;
}

// updateEmptyState

function updateEmptyState() {
    if (!emptyState) return;

    let count = 0;
    if (activeTab === "all") count = allCards.children.length;
    if (activeTab === "interview") count = interviewList.length;
    if (activeTab === "rejected") count = rejectedList.length;

    if (count === 0) emptyState.classList.remove("hidden");
    else emptyState.classList.add("hidden");
}

function refreshUI() {
    updateTopCounts();
    updateVisibleJobCount();
    updateEmptyState();
}

function setActiveButton(selectedBtn) {
    const buttons = [allFilterBtn, interviewFilterBtn, rejectFilterBtn];

    buttons.forEach((btn) => {
        btn.classList.remove("bg-blue-600", "text-white");
        btn.classList.add("bg-white", "text-black");
    });

    selectedBtn.classList.remove("bg-white", "text-black");
    selectedBtn.classList.add("bg-blue-600", "text-white");
}

function showSection(tab) {
    activeTab = tab;

    if (tab === "all") {
        allCards.classList.remove("hidden");
        interviewSection.classList.add("hidden");
        rejectedSection.classList.add("hidden");
    }

    if (tab === "interview") {
        allCards.classList.add("hidden");
        interviewSection.classList.remove("hidden");
        rejectedSection.classList.add("hidden");
    }

    if (tab === "rejected") {
        allCards.classList.add("hidden");
        interviewSection.classList.add("hidden");
        rejectedSection.classList.remove("hidden");
    }

    refreshUI();
}

// For HTML onclick="toggleStyles('all-filter-btn')"
function toggleStyles(id) {
    if (id === "all-filter-btn") {
        setActiveButton(allFilterBtn);
        showSection("all");
    }

    if (id === "interview-filter-btn") {
        setActiveButton(interviewFilterBtn);
        showSection("interview");
    }

    if (id === "rejected-filter-btn") {
        setActiveButton(rejectFilterBtn);
        showSection("rejected");
    }
}

function createCardHTML(data) {
    return `
    <div class="myCard flex justify-between bg-slate-100 py-3 px-3 rounded-lg">
      <div class="space-y-2">
        <h2 class="text-gray-950 font-bold jobName">${data.jobName}</h2>
        <p class="text-gray-500 jobTitle">${data.jobTitle}</p>
        <p class="text-gray-500 jobInfo">${data.jobInfo}</p>
        <button class="btn border-t-white-100 jobStatus">${data.jobStatus}</button>
        <p class="text-gray-800 jobDescription">${data.jobDescription}</p>
        <div class="flex gap-3">
          <button class="btn btn-outline btn-accent interviewClickBtn">INTERVIEW</button>
          <button class="btn btn-soft btn-secondary rejectedClickBtn">Rejected</button>
        </div>
      </div>

      <div>
        <button class="btn btn-circle">
          <i class="dlt-card-btn fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `;
}

function interviewRendering() {
    interviewSection.innerHTML = "";
    for (const item of interviewList) {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = createCardHTML(item);
        interviewSection.appendChild(wrapper);
    }
}

function rejectRendering() {
    rejectedSection.innerHTML = "";
    for (const item of rejectedList) {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = createCardHTML(item);
        rejectedSection.appendChild(wrapper);
    }
}

document.querySelector("main").addEventListener("click", function (event) {
    const interviewBtn = event.target.closest(".interviewClickBtn");
    const rejectBtn = event.target.closest(".rejectedClickBtn");
    const deleteBtn = event.target.closest(".dlt-card-btn");

    if (interviewBtn) {
        const card = interviewBtn.closest(".myCard");
        if (!card) return;

        const jobName = card.querySelector(".jobName")?.innerText || "";
        const jobTitle = card.querySelector(".jobTitle")?.innerText || "";
        const jobInfo = card.querySelector(".jobInfo")?.innerText || "";
        const jobDescription = card.querySelector(".jobDescription")?.innerText || "";

        card.querySelector(".jobStatus").innerText = "Interviewed";

        const cardInfo = {
            jobName,
            jobTitle,
            jobInfo,
            jobStatus: "Interviewed",
            jobDescription,
        };

        const isExist = interviewList.find((item) => item.jobName === jobName);
        if (!isExist) interviewList.push(cardInfo);

        rejectedList = rejectedList.filter((item) => item.jobName !== jobName);

        interviewRendering();
        rejectRendering();
        refreshUI();
    }

    if (rejectBtn) {
        const card = rejectBtn.closest(".myCard");
        if (!card) return;

        const jobName = card.querySelector(".jobName")?.innerText || "";
        const jobTitle = card.querySelector(".jobTitle")?.innerText || "";
        const jobInfo = card.querySelector(".jobInfo")?.innerText || "";
        const jobDescription = card.querySelector(".jobDescription")?.innerText || "";

        card.querySelector(".jobStatus").innerText = "Rejected";

        const cardInfo = {
            jobName,
            jobTitle,
            jobInfo,
            jobStatus: "Rejected",
            jobDescription,
        };

        const isExist = rejectedList.find((item) => item.jobName === jobName);
        if (!isExist) rejectedList.push(cardInfo);

        interviewList = interviewList.filter((item) => item.jobName !== jobName);

        rejectRendering();
        interviewRendering();
        refreshUI();
    }

    if (deleteBtn) {
        const card = deleteBtn.closest(".myCard");
        if (!card) return;

        const name = card.querySelector(".jobName")?.innerText || "";
        card.remove();

        interviewList = interviewList.filter((item) => item.jobName !== name);
        rejectedList = rejectedList.filter((item) => item.jobName !== name);

        interviewRendering();
        rejectRendering();
        refreshUI();
    }
});

// initial state
setActiveButton(allFilterBtn);
showSection("all");
refreshUI();