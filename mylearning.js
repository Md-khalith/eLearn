let currentCourseIndex = null;
let timer = null;
let secondsWatched = 0;

// Load and render added courses
window.onload = function () {
  let container = document.querySelector('.addedcourse');
  let courses = JSON.parse(localStorage.getItem('mycourses')) || [];

  if (courses.length === 0) {
    document.querySelector('.default-message').style.display = 'flex';
  } else {
    document.querySelector('.default-message').style.display = 'none';
  }

  courses.forEach((item, index) => {
    const progressValue = item.progress || 0;

    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course-item');
    courseDiv.innerHTML = `
      <div class="mycourse1" data-index="${index}">
        <div class="thumbnail">
          <img src="${item.thumbnailUrl}" alt="course-thumbnail">
        </div>
        <div class="course-info">
          <h2>${item.title}</h2>
          <p>${item.description}</p>
          <div class="course-progress">
            <div class="label">Course Progress - ${progressValue}%</div>
            <div class="progress-bar">
              <div class="custom-progress" style="width: ${progressValue}%"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    courseDiv.querySelector('.mycourse1').addEventListener('click', () => {
      showVideo(item.title, item.description, item.videoUrl, index);
    });

    container.appendChild(courseDiv);
  });
};

// Convert YouTube link to embedded link
function convertToEmbeddedUrl(youtubeUrl) {
  const url = new URL(youtubeUrl);
  const videoId = url.hostname.includes("youtu.be")
    ? url.pathname.slice(1)
    : url.searchParams.get("v");
  return `https://www.youtube.com/embed/${videoId}`;
}

//  Show video and start timer
function showVideo(title, description, videoUrl, index) {
  currentCourseIndex = index;
  secondsWatched = 0;

  document.getElementById('videoTitle').textContent = title;
  document.getElementById('videoDescription').textContent = description;

  const embedUrl = convertToEmbeddedUrl(videoUrl);
  document.getElementById('course-video').src = embedUrl;
  document.getElementById('videoPlayerWrapper').style.display = 'flex';

  // ✅ Timer starts when video opens
  timer = setInterval(() => {
    secondsWatched++;
  }, 1000);
}

//  Close video and stop timer
function closeVideo() {
  document.getElementById('videoPlayerWrapper').style.display = 'none';
  document.getElementById('course-video').src = "";

  clearInterval(timer); 

  // Save progress based on time watched
  let courses = JSON.parse(localStorage.getItem('mycourses')) || [];
  if (courses[currentCourseIndex]) {
    let course = courses[currentCourseIndex];
    const prevProgress = course.progress || 0;
    let newProgress = Math.min(prevProgress + Math.floor(secondsWatched / 10), 100);
    course.progress = newProgress;
    localStorage.setItem('mycourses', JSON.stringify(courses));
    // Update UI
    const courseCard = document.querySelectorAll('.course-item')[currentCourseIndex];
    courseCard.querySelector('.custom-progress').style.width = `${newProgress}%`;
    courseCard.querySelector('.label').textContent = `Course Progress - ${newProgress}%`;
  }
}

// Reset button clears everything
document.querySelector('.reset-storage').addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.clear();
  location.reload();
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".explore").setAttribute("href", "index.html#skills-certifications");
});
