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

function renderInterview() {
  filteredInterview.innerHTML = "";

  for(let interview of interviewList) {
    
    let div = document.createElement('div');
    div.className = 'bg-base-100 rounded-lg flex justify-between p-5 shadow transition duration-300 ease-in-out hover:shadow-md hover:-translate-y-0.5 job-details-card';
    // this will be injected in filtered section 
    div.innerHTML = `
        <!-- main part 1 -->
        <div class="space-y-3">
          <!-- part 1 -->
          <div>
            <P class="company-name text-lg text-[#002C5C] font-semibold">${interview.companyName}</P>
            <P class="job-type text-base-content/50 text-[16px]">${interview.jobType}</P>
          </div>
          <!-- part 2 -->
          <div class="flex gap-3">
            <P class="jon-info text-base-content/60 text-[14px]">${interview.joinInfo}</P>
          </div>
          <!-- part 3 -->
          <div class="">
            <P class="condition p-1 text-[14px]">${interview.condition}</P>
            <P class="notes mt-2 text-base-content/70 text-[14px]">${interview.notes}</P>
          </div>
          <div>
            <button id="interviewed-btn" class="btn btn-outline btn-success  text-[14px] btn-sm interviewing-btn">INTERVIEW</button>
            <button id="rejected-btn" class="btn btn-outline btn-error text-[14px] btn-sm rejected-btn">REJECTED</button>
          </div>
        </div>
        <!-- main part 2 -->
        <div>
          <button class="btn btn-ghost text-base-content/50"><i class="fa-regular fa-trash-can"></i></button>
        </div>
    `
    filteredInterview.appendChild(div);

    const conditionEl = div.querySelector(".condition");
    conditionEl.classList.add("badge", "badge-soft");
    const cardStyle = div;

    if(interview.condition === "INTERVIEWED"){
    conditionEl.classList.add("badge-success");
    cardStyle.classList.add("border-success","border-l-4");
    }
    if(interview.condition === "REJECTED"){
    conditionEl.classList.add("badge-error");
    cardStyle.classList.add("border-error","border-l-4");
    }
    // cardStyle.classList.remove("border-error","border-l-4");
  }
}

function renderRejected() {
  filteredRejected.innerHTML = "";

  for(let reject of rejectedList) {
    
    let div = document.createElement('div');
    div.className = 'bg-base-100 rounded-lg flex justify-between p-5 shadow transition duration-300 ease-in-out hover:shadow-md hover:-translate-y-0.5 job-details-card';
    // this will be injected in filtered section 
    div.innerHTML = `
        <!-- main part 1 -->
        <div class="space-y-3">
          <!-- part 1 -->
          <div>
            <P class="company-name text-lg text-[#002C5C] font-semibold">${reject.companyName}</P>
            <P class="job-type text-base-content/50 text-[16px]">${reject.jobType}</P>
          </div>
          <!-- part 2 -->
          <div class="flex gap-3">
            <P class="jon-info text-base-content/60 text-[14px]">${reject.joinInfo}</P>
          </div>
          <!-- part 3 -->
          <div class="">
            <P class="condition p-1 text-[14px] "badge", "badge-soft", "badge-success">${reject.condition}</P>
            <P class="notes mt-2 text-base-content/70 text-[14px]">${reject.notes}</P>
          </div>
          <div>
            <button id="interviewed-btn" class="btn btn-outline btn-success  text-[14px] btn-sm interviewing-btn">INTERVIEW</button>
            <button id="rejected-btn" class="btn btn-outline btn-error  text-[14px] btn-sm rejected-btn">REJECTED</button>
          </div>
        </div>
        <!-- main part 2 -->
        <div>
          <button class="btn btn-ghost text-base-content/50"><i class="fa-regular fa-trash-can"></i></button>
        </div>
    `
    filteredRejected.appendChild(div);
    const conditionEl = div.querySelector(".condition");
    conditionEl.classList.add("badge", "badge-soft");
    const cardStyle = div;
    
    
    if(reject.condition === "INTERVIEWED"){
      
      conditionEl.classList.add("badge-success");
      cardStyle.classList.add("border-success","border-l-4");
    }
    if(reject.condition === "REJECTED"){
    conditionEl.classList.add("badge-error");
    cardStyle.classList.add("border-error","border-l-4");
    }
    // cardStyle.classList.remove("border-success","border-l-4");
    
    // cardStyle.classList.add("border-error","border-l-4");
  }
}
