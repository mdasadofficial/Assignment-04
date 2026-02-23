let interviewList = [];
let rejectList = [];

let total = document.getElementById('total');
let interview = document.getElementById('interview');
let reject = document.getElementById('reject');

const allBtn = document.getElementById('all-btn')
const allInterview = document.getElementById('interview-btn')
const allReject = document.getElementById('rejected-btn')

const allCardsSection = document.getElementById('allCards');

const sectionContainer = document.querySelector('section')
console.log(sectionContainer);


//  Total Interview Reject Counter Function ***

function totalJobs(){
    total.innerText = allCards.children.length
    interview.innerText = interviewList.length
    reject.innerText = rejectList.length

}
totalJobs()

function toggleStyle(id){
   
}