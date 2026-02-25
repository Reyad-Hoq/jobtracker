
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
  if (event.target.classList.contains('interviewed-btn')) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = document.querySelector(".company-name").innerText;
    const jobType = document.querySelector(".job-type").innerText;
    const joinInfo = document.querySelector(".jon-info").innerText;
    const condition = document.querySelector(".condition").innerText;
    const notes = document.querySelector(".notes").innerText;
    const interviewStyle = parentNode.querySelector('.condition');
    interviewStyle.innerText = 'INTERVIEWED';
    interviewStyle.classList.add("badge", "badge-soft", "badge-success")
  }
});
    