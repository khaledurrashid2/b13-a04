
let currentFilter = 'All';

let jobs = [
    {
        id: 1,
        company: 'Lincoln High School',
        title: 'English Teacher',
        location: 'Chicago, IL',
        type: 'Full-time',
        salary: '$48,500',
        status: 'not-applied',
        description: 'Teach English literature and composition to high school students. Must have state certification and experience with diverse learners.'
    },
    {
        id: 2,
        company: 'Washington Middle School',
        title: 'Math Teacher',
        location: 'Portland, OR',
        type: 'Full-time',
        salary: '$52,300',
        status: 'not-applied',
        description: 'Mathematics instructor for grades 6-8. Experience with differentiated instruction and project-based learning preferred.'
    },
    {
        id: 3,
        company: 'Science Academy',
        title: 'Chemistry Teacher',
        location: 'Denver, CO',
        type: 'Full-time',
        salary: '$57,800',
        status: 'not-applied',
        description: 'Chemistry teacher for high school science department. Lab supervision experience and ability to make chemistry engaging required.'
    },
    {
        id: 4,
        company: 'Roosevelt Elementary',
        title: 'Geography Teacher',
        location: 'Miami, FL',
        type: 'Full-time',
        salary: '$45,200',
        status: 'not-applied',
        description: 'Teach world geography and social studies to elementary students. Passion for working with young learners and creative teaching methods essential.'
    },
    {
        id: 5,
        company: 'Jefferson High School',
        title: 'Math Teacher',
        location: 'Boston, MA',
        type: 'Full-time',
        salary: '$55,600',
        status: 'not-applied',
        description: 'High school mathematics teacher specializing in algebra and geometry. AP Math certification is a plus.'
    },
    {
        id: 6,
        company: 'Riverside Academy',
        title: 'English Teacher',
        location: 'Seattle, WA',
        type: 'Full-time',
        salary: '$51,200',
        status: 'not-applied',
        description: 'Middle school English teacher focused on reading comprehension and creative writing. Small class sizes and supportive environment.'
    },

    {
        id: 7,
        company: 'Westlake High School',
        title: 'Chemistry Teacher',
        location: 'Austin, TX',
        type: 'Full-time',
        salary: '$58,400',
        status: 'not-applied',
        description: 'Advanced chemistry teacher for honors and AP Chemistry courses. Experience with laboratory safety and engaging demonstrations required.'
    },
    {
        id: 8,
        company: 'Maplewood Elementary',
        title: 'Geography Teacher',
        location: 'Minneapolis, MN',
        type: 'Full-time',
        salary: '$44,800',
        status: 'not-applied',
        description: 'Elementary geography teacher introducing students to maps, cultures, and world landmarks. Creative and hands-on teaching approach desired.'
    },
    {
        id: 9,
        company: 'Central High School',
        title: 'Math Teacher',
        location: 'Atlanta, GA',
        type: 'Full-time',
        salary: '$54,200',
        status: 'not-applied',
        description: 'Mathematics teacher for high school students specializing in trigonometry and pre-calculus. Strong classroom management skills required.'
    },
    {
        id: 10,
        company: 'Harbor Preparatory',
        title: 'English Teacher',
        location: 'San Diego, CA',
        type: 'Full-time',
        salary: '$56,700',
        status: 'not-applied',
        description: 'High school English teacher for advanced literature courses including Shakespeare and American literature. Experience with AP English preferred.'
    },
    {
        id: 11,
        company: 'Mountain View Middle School',
        title: 'Math Teacher',
        location: 'Boulder, CO',
        type: 'Part-time',
        salary: '$24,500',
        status: 'not-applied',
        description: 'Middle school math teacher for grades 6-8. Focus on building strong foundational skills in a supportive environment.'
    },
    {
        id: 12,
        company: 'Renaissance Charter School',
        title: 'Geography Teacher',
        location: 'Orlando, FL',
        type: 'Full-time',
        salary: '$46,300',
        status: 'not-applied',
        description: 'Middle school geography teacher covering physical geography, map reading, and cultural studies. Technology integration encouraged.'
    }
];

// This function will loop through each item of the jobs array. For a job we clicked to change status, it will set the status. If there already an status, it will reset/toggle it to 'not-applied'  
function setStatus(id, newStatus) {
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {
      if (jobs[i].status === newStatus) {
        jobs[i].status = "not-applied";
      } else {
        jobs[i].status = newStatus;
      }
      break;
    }
  }
  render();
}

// This function sets a tab 'active' upon mouse click
function setFilter(f, el) {
  currentFilter = f;

  let tabs = document.querySelectorAll('.filter-tab');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  el.classList.add('active');
  render();
}

// This function deletes a job from the jobs array
function deleteJob(id) {
  let newJobs = [];

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id !== id) {
      newJobs.push(jobs[i]);
    }
  }

  jobs = newJobs;
  render();
}

// This function renders the information from the jobs array, check status of each job (interview, rejected, etc.) and prepares the final html to display in the available jobs tab
function render() {

  let interviewCount = 0;
  let rejectedCount = 0;

  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].status === "interview") interviewCount++;
    if (jobs[i].status === "rejected") rejectedCount++;
  }

  document.getElementById("stat-total").textContent = jobs.length;
  document.getElementById("stat-interview").textContent = interviewCount;
  document.getElementById("stat-rejected").textContent = rejectedCount;

  let filteredJobs = [];

  for (let i = 0; i < jobs.length; i++) {
    if (currentFilter === "All") {
      filteredJobs.push(jobs[i]);
    } else if (currentFilter === "Interview" && jobs[i].status === "interview") {
      filteredJobs.push(jobs[i]);
    } else if (currentFilter === "Rejected" && jobs[i].status === "rejected") {
      filteredJobs.push(jobs[i]);
    }
  }

  let jobText = filteredJobs.length === 1 ? "1 job" : filteredJobs.length + " jobs";
  document.getElementById("jobs-count").textContent = jobText;

  let listEl = document.getElementById("jobList");
  let emptyEl = document.getElementById("emptyState");

  if (filteredJobs.length === 0) {
    listEl.classList.add("hidden");
    emptyEl.classList.remove("hidden");
    emptyEl.classList.add("flex");
    return;
  } else {
    listEl.classList.remove("hidden");
    emptyEl.classList.add("hidden");
    emptyEl.classList.remove("flex");
  }

  let html = "";

  for (let i = 0; i < filteredJobs.length; i++) {

    let job = filteredJobs[i];

    let statusBadge = '<span class="status-not-applied">NOT APPLIED</span>';
    if (job.status === "interview") {
      statusBadge = '<span class="status-interview-tag">INTERVIEW</span>';
    }
    if (job.status === "rejected") {
      statusBadge = '<span class="status-rejected-tag">REJECTED</span>';
    }

    html += `
      <div class="job-card px-4 sm:px-6 py-4 sm:py-5">
        <div class="flex items-start justify-between">
          <div class="flex-1 min-w-0 pr-3">
            <h3 class="text-sm sm:text-base font-bold text-[#1d4ed8] leading-tight">${job.company}</h3>
            <p class="text-xs sm:text-sm text-gray-500 mt-0.5">${job.title}</p>
            <p class="text-xs text-gray-400 mt-1">
              ${job.location} • ${job.type} • ${job.salary}
            </p>
          </div>

          <button class="trash-btn mt-1 shrink-0" onclick="deleteJob(${job.id})">
            <img src="./assets/delete-icon.png" class="w-5 h-5">
          </button>
        </div>

        <div class="mt-3 mb-2">${statusBadge}</div>

        <p class="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">
          ${job.description}
        </p>

        <div class="flex flex-wrap gap-2">
          <button class="btn-interview ${job.status === 'interview' ? 'active' : ''}"
            onclick="setStatus(${job.id}, 'interview')">
            INTERVIEW
          </button>

          <button class="btn-rejected ${job.status === 'rejected' ? 'active' : ''}"
            onclick="setStatus(${job.id}, 'rejected')">
            REJECTED
          </button>
        </div>
      </div>
    `;
  }

  listEl.innerHTML = html;
}

render();