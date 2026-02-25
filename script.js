
let interviewList = [];
console.log(interviewList)
let rejectedList = [];

const totalCount = document.getElementById("total-count");
const jobCount = document.getElementById("job-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");

const allcards = document.getElementById("allcards");
const mainContainer = document.querySelector('main');
const filteredInterview = document.getElementById('filtered-interview');
const filteredRejected = document.getElementById('filtered-rejected');

mainContainer.addEventListener('click', (event) => {
  if(event.target.classList.contains('interviewing-btn')) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const joinInfo = parentNode.querySelector(".jon-info").innerText;
    const condition = parentNode.querySelector(".condition").innerText;
    const notes = parentNode.querySelector(".notes").innerText;
    console.log(companyName, jobType, joinInfo, condition, notes);
    const interviewStyle = parentNode.querySelector('.condition');
    interviewStyle.innerText = 'INTERVIEWED';
    interviewStyle.classList.add("badge", "badge-soft", "badge-success");

    let cardInfo = {companyName, jobType, joinInfo, notes, condition:'INTERVIEWED'};
    console.log(cardInfo.companyName);
    const isExist = interviewList.find(item => item.companyName === cardInfo.companyName);

    if (!isExist) {
      interviewList.push(cardInfo);
    }

    updateCount();
    renderInterview();
  }
});

    