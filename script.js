
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
// toggleStyle()




document.querySelector('main').addEventListener('click', function (event) {
    if (event.target.classList.contains('interviewClickBtn')) {
        
        const parent = event.target.parentNode.parentNode
   console.log(parent,'Clicked');
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
      
     console.log(interviewList);
     
        counter()

    }
  
})