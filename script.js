

const allFilterBtn = document.getElementById('all-filter-btn')
const interviewFilterBtn = document.getElementById('interview-filter-btn')
const rejectFilterBtn = document.getElementById('rejected-filter-btn')

let totalCount = document.getElementById('total');
let interviewCount = document.getElementById('interview');
let rejectCount = document.getElementById('reject');
let interviewList = []
let rejectedList = []

const allCards = document.getElementById('allCards');
const jobCount = document.getElementById('job-count');
const interviewSection = document.getElementById('interviewSection')
const rejectedSection = document.getElementById('rejectedSection')

function counter() {
    totalCount.innerText = allCards.children.length
    jobCount.innerText = allCards.children.length
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectedList.length

}
counter()

// Toggle Button Style
function toggleStyles(id) {

    console.log(id);

    rejectFilterBtn.classList.remove('bg-blue-600', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-600', 'text-white')
    allFilterBtn.classList.remove('bg-blue-600!', 'text-white')

    rejectFilterBtn.classList.add('bg-white', 'text-black')
    interviewFilterBtn.classList.add('bg-white', 'text-black')
    allFilterBtn.classList.add('bg-white', 'text-black')

    const selected = document.getElementById(id)
    // console.log(selected.innerText);

    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-600', 'text-white')
    if (id === 'interview-filter-btn') {
        allCards.classList.add('hidden')
        interviewSection.classList.remove('hidden')
        rejectedSection.classList.add('hidden')
    }
    if (id === 'all-filter-btn') {
        allCards.classList.remove('hidden')
        interviewSection.classList.add('hidden')
        rejectedSection.classList.add('hidden')
    }
    if (id === 'rejected-filter-btn') {
        allCards.classList.add('hidden')
        interviewSection.classList.add('hidden')
        rejectedSection.classList.remove('hidden')

    }
}

// toggleStyles('all-filter-btn')




document.querySelector('main').addEventListener('click', function (event) {
    if (event.target.classList.contains('interviewClickBtn')) {

        const parent = event.target.parentNode.parentNode
        console.log(parent, 'Clicked');
        const jobName = parent.querySelector('.jobName').innerText
        const jobTitle = parent.querySelector('.jobTitle').innerText
        const jobInfo = parent.querySelector('.jobInfo').innerText
        const jobStatus = parent.querySelector('.jobStatus').innerText
        const jobDescription = parent.querySelector('.jobDescription').innerText
        parent.querySelector('.jobStatus').innerText = 'Interviewed'
        //   console.log(jobName,jobTitle,jobInfo,jobStatus,jobDescription);

        const cardInfo = {
            jobName,
            jobTitle,
            jobInfo,
            jobStatus: 'Interviewed',
            jobDescription
        }

        console.log(cardInfo);
        const isExist = interviewList.find(item => item.jobName === cardInfo.jobName)

        if (!isExist) {
            interviewList.push(cardInfo)
        }
        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName)



        console.log(interviewList);

        counter()
        interviewRendering()
        rejectRendering()
    }


    if (event.target.classList.contains('rejectedClickBtn')) {

        const parent = event.target.parentNode.parentNode
        console.log(parent, 'Clicked');
        const jobName = parent.querySelector('.jobName').innerText
        const jobTitle = parent.querySelector('.jobTitle').innerText
        const jobInfo = parent.querySelector('.jobInfo').innerText
        const jobStatus = parent.querySelector('.jobStatus').innerText
        const jobDescription = parent.querySelector('.jobDescription').innerText
        parent.querySelector('.jobStatus').innerText = 'Rejected'
        //   console.log(jobName,jobTitle,jobInfo,jobStatus,jobDescription);

        const cardInfo = {
            jobName,
            jobTitle,
            jobInfo,
            jobStatus: 'Rejected',
            jobDescription
        }
        console.log(cardInfo);
        const isExist = rejectedList.find(item => item.jobName === cardInfo.jobName)

        if (!isExist) {
            rejectedList.push(cardInfo)
        }
        interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName)


        console.log(rejectedList);

        counter()
        rejectRendering()
        interviewRendering()

    }


    if (event.target.classList.contains('dlt-card-btn')) {
        // console.log('Clicked');
        const cards = event.target.closest('.myCard')
        cards.remove()
        counter()
       
        const name = cards.querySelector('.jobName').innerText
        interviewList = interviewList.filter(item => item.jobName != name)
        rejectedList = rejectedList.filter(item => item.jobName != name)
        interviewRendering()
        rejectRendering()
        console.log(name);
        counter()
    }




})


function interviewRendering() {

    if (interviewList.length === 0) {
        interviewSection.innerHTML = `
     <div id="emptyState"
            class=" w-full h-[350px]  space-y-4 flex flex-col justify-center items-center text-center">
            <img src="jobs.png" alt="">
            <h3 class="text-black font-bold">No jobs available</h3>
            <p class="text-gray-500">Check back soon for new job opportunities</p>

         </div>
    
    `
        return
    }

    interviewSection.innerHTML = ""
    for (const interview of interviewList) {
        console.log(interview);

        const div = document.createElement('div')
        div.innerHTML = `
        
            <!-- Card-1 div -->
            <!-- Mobile First Corp -->
            <div class=" myCard flex justify-between bg-slate-100 py-3 px-3 rounded-lg">
               <!-- div left -->
               <div class="space-y-2">
                  <h2 class="text-gray-950 font-bold jobName">${interview.jobName}</h2>
                  <h2 class="text-gray-950 font-bold jobName">${interview.jobName}</h2>
                  <p class="text-gray-500 jobTitle">${interview.jobTitle}</p>
                  <p class="text-gray-500 jobInfo">${interview.jobInfo}</p>
                  <button class="btn border-t-white-100 jobStatus">${interview.jobStatus}</button>
                  <p class="text-gray-800 jobDescription">${interview.jobDescription}
                  </p>
                  <div class="flex gap-3">
                     <button class="btn btn-outline btn-accent interviewClickBtn">INTERVIEW</button>
                     <button class="btn btn-soft btn-secondary rejectedClickBtn">Rejected</button>
                  </div>


               </div>
               <!-- div right -->
               <!-- Delete Button -->
               <div> <button class="btn btn-circle "> <i class="dlt-card-btn fa-solid fa-trash-can"></i> </button></div>
            </div>
        
        `


        interviewSection.appendChild(div)

    }
}


function rejectRendering() {

    if (rejectedList.length === 0) {
        rejectedSection.innerHTML = `
     <div id="emptyState"
            class=" w-full h-[350px]  space-y-4 flex flex-col justify-center items-center text-center">
            <img src="jobs.png" alt="">
            <h3 class="text-black font-bold">No jobs available</h3>
            <p class="text-gray-500">Check back soon for new job opportunities</p>

         </div>
    
    `
        return
    }
    rejectedSection.innerHTML = ""
    for (const rejected of rejectedList) {
        console.log(rejected);

        const div = document.createElement('div')
        div.innerHTML = `
        
            <!-- Card-1 div -->
            <!-- Mobile First Corp -->
            <div class=" myCard flex justify-between bg-slate-100 py-3 px-3 rounded-lg">
               <!-- div left -->
               <div class="space-y-2">
                  <h2 class="text-gray-950 font-bold jobName">${rejected.jobName}</h2>
                  <p class="text-gray-500 jobTitle">${rejected.jobTitle}</p>
                  <p class="text-gray-500 jobInfo">${rejected.jobInfo}</p>
                  <button class="btn border-t-white-100 jobStatus">${rejected.jobStatus}</button>
                  <p class="text-gray-800 jobDescription">${rejected.jobDescription}
                  </p>
                  <div class="flex gap-3">
                     <button class="btn btn-outline btn-accent interviewClickBtn">INTERVIEW</button>
                     <button class="btn btn-soft btn-secondary rejectedClickBtn">Rejected</button>
                  </div>


               </div>
               <!-- div right -->
               <!-- Delete Button -->
               <div> <button class="btn btn-circle "> <i class="dlt-card-btn fa-solid fa-trash-can"></i> </button></div>
            </div>
        
        `
        rejectedSection.appendChild(div)

    }
}