// const rejectFilterBtn  = document.getElementById('rejected-filter-btn')
// const interviewFilterBtn  = document.getElementById('interview-filter-btn')
// const allFilterBtn  = document.getElementById('all-filter-btn')
// let allCards = document.getElementById('allCards')
// let totalCount = document.getElementById('totalCount')
// let interviewCount = document.getElementById('interviewCount')
// let rejectedCount = document.getElementById('rejectedCount')
// let TotalJobs = document.getElementById('TotalJobs')
// let interviewSection = document.getElementById('interviewSection')
// let rejectedSection = document.getElementById('rejectedSection')
// let interviewList = []
// let rejectedList = []

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
function counter() {
    
    totalCount.innerText = allCards.children.length
    jobCount.innerText = allCards.children.length
    interviewCount.innerText = interviewList.length
    rejectCount.innerText = rejectedList.length

}
counter() 

// Toggle Button Style
function toggleStyle(id) {
    rejectFilterBtn.classList.remove('bg-blue-600', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-600', 'text-white')
    allFilterBtn.classList.remove('bg-blue-600!', 'text-white')

    rejectFilterBtn.classList.add('bg-white', 'text-black')
    interviewFilterBtn.classList.add('bg-white', 'text-black')
    allFilterBtn.classList.add('bg-white', 'text-black')

    const selected = document.getElementById(id)

    selected.classList.remove('bg-white', 'text-black')
    selected.classList.add('bg-blue-600', 'text-white')


    }
toggleStyle()

