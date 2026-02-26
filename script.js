
let interviewList = [];
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
    
    const interviewStyle = parentNode.querySelector('.condition');

    const cardStyle = event.target.closest('.job-details-card');

    interviewStyle.innerText = 'INTERVIEWED';
    interviewStyle.classList.remove("badge", "badge-soft", "badge-error");
    interviewStyle.classList.add("badge", "badge-soft", "badge-success");

    cardStyle.classList.remove("border-error","border-l-4");
    cardStyle.classList.add("border-success","border-l-4");

    const cardInfo = {companyName, jobType, joinInfo, notes, condition:'INTERVIEWED'};

    const isExist = interviewList.find(item => item.companyName === cardInfo.companyName);

    if (!isExist) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName);
    updateCount();
    renderInterview();
    renderRejected();
  } else if (event.target.classList.contains('rejected-btn')) {
    
    const parentNode = event.target.parentNode.parentNode;
  
    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobType = parentNode.querySelector('.job-type').innerText;
    const joinInfo = parentNode.querySelector(".jon-info").innerText;
    const condition = parentNode.querySelector(".condition").innerText;
    const notes = parentNode.querySelector(".notes").innerText;
    
    const rejectStyle = parentNode.querySelector('.condition');
    const cardStyle = event.target.closest('.job-details-card');

    rejectStyle.innerText = 'REJECTED';
    rejectStyle.classList.remove("badge", "badge-soft", "badge-success")
    rejectStyle.classList.add("badge", "badge-soft", "badge-error");

    cardStyle.classList.remove("border-success","border-l-4");
    cardStyle.classList.add("border-error","border-l-4");

    const cardInfo = {companyName, jobType, joinInfo, notes, condition:'REJECTED'};

    const isExist = rejectedList.find(item => item.companyName === cardInfo.companyName);

    if (!isExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(item => item.companyName !== cardInfo.companyName);
    updateCount();
    renderRejected();
    renderInterview();
    
  }
});

    