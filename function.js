function updateCount () {
  totalCount.innerText = allcards.children.length;
  jobCount.textContent = allcards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
updateCount ();

function toggleStyle (id) {
  const interviewing = document.getElementById("interview-btn");
  const rejecting = document.getElementById("reject-btn");
  const allbtn = document.getElementById("all-btn");
  const selected = document.getElementById(id);
// first removing button class
  allbtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewing.classList.remove("bg-white","bg-[#3B82F6]","text-white");
  rejecting.classList.remove("bg-white","bg-[#3B82F6]","text-white");
// then adding button class to clicked button 
  selected.classList.add("bg-[#3B82F6]", "text-white");

  if (id === 'interview-btn') {
    allcards.classList.add('hidden');
    filteredRejected.classList.add('hidden')
    filteredInterview.classList.remove('hidden')
  } else if (id === 'all-btn') {
    filteredInterview.classList.add('hidden');
    filteredRejected.classList.add('hidden')
    allcards.classList.remove('hidden');
  } else if (id === 'reject-btn') {
    filteredInterview.classList.add('hidden');
    allcards.classList.add('hidden')
    filteredRejected.classList.remove('hidden');
  }
}