function updateCount () {
  totalCount.innerText = allcards.children.length;
  jobCount.textContent = allcards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
updateCount ();