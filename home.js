//for carsouel click event
function attachCarouselScroll() {
  document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
    const track = wrapper.querySelector('.carousel-track');
    const leftBtn = wrapper.querySelector('.carousel-btn.left');
    const rightBtn = wrapper.querySelector('.carousel-btn.right');

    const scrollAmount = 650;

    leftBtn.addEventListener('click', () => {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
}
//courses data
const data = {
  webDevelopment: [
    {
      title:"Frontend Web Development: In Depth Project Tutorial",
      description: "Learn frontend from scratch with hands-on projects using HTML, CSS, JS, TS & React.",
      videoUrl: "https://youtu.be/MsnQ5uepIaE?si=WP8fypsomcJ2rlgt",
      thumbnailUrl: "thumbnails/img1.avif",
      ratingValue: 4.6,
      reviews: "348,291"
    },
    {
      title:"Full Stack Web Development Course 2023",
      description: "Master full stack web development with modern tools like React, Angular, MySQL & MongoDB.",
      videoUrl: "https://youtu.be/R6RX2Zx96fE?si=GnCTtooTFgvqU2bq",
      thumbnailUrl:"thumbnails/img2.avif",
      ratingValue: 4.5,
      reviews: "720,154"
    },
    {
      title:"FREE Coding Bootcamp -Build 4 Full Stack Projects",
      description: "Free bootcamp to build real-world full stack projects using React, JS, and more.",
      videoUrl: "https://youtu.be/MDZC8VDZnV8?si=ktQk2jJ9evGgikNs",
      thumbnailUrl: "thumbnails/img3.avif",
      ratingValue: 4.7,
      reviews: "605,937"
    },
    {
      title:"Full Stack Web Development for Beginners",
      description: "Complete beginner guide to full stack web dev using HTML, CSS, React & Node.js.",
      videoUrl: "https://youtu.be/nu_pCVPKzTk?si=Q8GU96pqooHgfr7P",
      thumbnailUrl: "thumbnails/img4.avif",
      ratingValue: 4.6,
      reviews: "812,403"
    },
    {
      title:"The Complete Web Development Roadmap",
      description: "Your step-by-step guide to frontend, backend, databases and frameworks.",
      videoUrl: "https://youtu.be/GxmfcnU3feo?si=QMZvSg4YYDca4cjN",
      thumbnailUrl: "thumbnails/img5.avif",
      ratingValue: 4.5,
      reviews: "293,746"
    },
    {
      title:"Full Stack Web Development [22 Hours] From Scratch",
      description: "Learn to build full stack apps from scratch using HTML, CSS, Tailwind & React.",
      videoUrl: "https://youtu.be/ZxKM3DCV2kE?si=EpJ6O5efMZviUhgx",
      thumbnailUrl: "thumbnails/img6.avif",
      ratingValue: 4.6,
      reviews: "157,820"
    },
    {
      title:"Frontend Web Development Bootcamp Courses",
      description: "Kickstart your frontend journey with HTML, CSS, and JavaScript bootcamp.",
      videoUrl: "https://youtu.be/zJSY8tbf_ys?si=JggW70Q3HwM7aZv2",
      thumbnailUrl: "thumbnails/img7.avif",
      ratingValue: 4.7,
      reviews: "984,561"
    },
    {
      title:"Frontend Web Devolepment Tutorial for Beginner In Tamil",
      description: "Tamil-based tutorial covering all frontend basics using HTML, CSS & JS.",
      videoUrl: "https://youtu.be/7dSJubxFWv0?si=yaype6fh4tgJL54x",
      thumbnailUrl: "thumbnails/img8.avif",
      ratingValue: 4.5,
      reviews: "439,208"
    },
    {
      title:"HTML & CSS Full Courses-Beginner to Pro",
      description: "Master HTML & CSS from beginner to pro with clear examples and projects.",
      videoUrl: "https://youtu.be/G3e-cpL7ofc?si=5hN84H4F0ncGWbOt",
      thumbnailUrl: "thumbnails/img9.avif",
      ratingValue: 4.6,
      reviews: "601,347"
    },
    {
      title:"50+ HOURS REACT.JS 19 MONSTER CLASS",
      description: "Deep dive into React.js with over 50 hours of content from basics to advanced.",
      videoUrl: "https://youtu.be/M9O5AjEFzKw?si=35RsdUyE5Fy1QcO8",
      thumbnailUrl: "thumbnails/img10.avif",
      ratingValue: 4.5,
      reviews: "773,910"
    }
  ],
  machineLearning: [
    {
      title: "Machine Learning Courses for Beginners",
      description: "Start ML from scratch with easy beginner lessons.",
      videoUrl: "https://youtu.be/NWONeJKn6kc?si=uiAu14iwap41D_QX",
      thumbnailUrl: "thumbnails/ml1.avif",
      ratingValue: 4.6,
      reviews: "348,291"
    },
    {
      title: "Machine Learning for Everybody - Full Course",
      description: "Understand ML basics without technical barriers or math.",
      videoUrl: "https://youtu.be/i_LwzRVP7bg?si=P17dqRXPrq6iqPFL",
      thumbnailUrl: "thumbnails/ml2.avif",
      ratingValue: 4.5,
      reviews: "720,154"
    },
    {
      title: "Machine Learning with Python and Scikit-Learn - Full Course",
      description: "Hands-on Python ML using Scikit-Learn tools.",
      videoUrl: "https://youtu.be/hDKCxebp88A?si=Z5_hRMPLeUToI2wG",
      thumbnailUrl: "thumbnails/ml3.avif",
      ratingValue: 4.7,
      reviews: "605,937"
    },
    {
      title: "Machine Learning Full Courses in 10 Hours",
      description: "Complete ML guide in a single, intensive video.",
      videoUrl: "https://youtu.be/GwIo3gDZCVQ?si=3xXpXa5r8dIrGdWa",
      thumbnailUrl: "thumbnails/ml4.avif",
      ratingValue: 4.6,
      reviews: "812,403"
    },
    {
      title: "PyTorch for Deep Learning & Machine Learning - Full Course", 
      description: "Learn PyTorch basics for building deep learning models.",
      videoUrl: "https://youtu.be/V_xro1bcAuA?si=WyvqC75yyqBKWN8I",
      thumbnailUrl: "thumbnails/ml5.avif",
      ratingValue: 4.5,
      reviews: "293,746"
    },
    {
      title: "Machine Learning in 2024 -  Beginners Course",
      description: "Fresh ML concepts for modern learners in 2024.",
      videoUrl: "https://youtu.be/bmmQA8A-yUA?si=ootnUgyYKlso2IOB",
      thumbnailUrl: "thumbnails/ml6.avif",
      ratingValue: 4.6,
      reviews: "157,820"
    },
    {
      title: "Create a Large Language Model from Scratch with Python - Tutorial",
      description: "Build your own LLM from the ground up.",
      videoUrl: "https://youtu.be/UU1WVnMk4E8?si=BWMsjjizsc44bqR3",
      thumbnailUrl: "thumbnails/ml7.avif",
      ratingValue: 4.7,
      reviews: "984,561"
    },
    {
      title: "The Complete Machine Learning Roadmap",
      description: "Roadmap for mastering machine learning step-by-step.",
      videoUrl: "https://youtu.be/7IgVGSaQPaw?si=QBB1JghWl4iFlWge",
      thumbnailUrl: "thumbnails/ml8.avif",
      ratingValue: 4.5,
      reviews: "439,208"
    },
    {
      title: "Standford CS229: Machine Learning - Full Course",
      description: "Classic Stanford ML course with deep theoretical insights.",
      videoUrl: "https://youtu.be/jGwO_UgTS7I?si=7zUIffBJhIVR31FZ",
      thumbnailUrl: "thumbnails/ml9.jpg",
      ratingValue: 4.6,
      reviews: "601,347"
    }
  ],
  dataScience: [
    {
        title: "Learn Data Science Tutorial - Full Course for Beginners",
        description: "Explore key concepts and tools in data science.",
        videoUrl: "https://youtu.be/ua-CiDNNj30?si=Q9aJmEuRL6yRCKNU",
        thumbnailUrl: "thumbnails/ds1.avif",
        ratingValue: 4.6,
        reviews: "348,291"
      },
      {
        title: "Data Science Full Course - Learn Data Science in 10 Hours",
        description: "Master data science quickly in one single course.",
        videoUrl: "https://youtu.be/-ETQ97mXXF0?si=G869LTIxlMyWNBUW",
        thumbnailUrl: "thumbnails/ds2.avif",
        ratingValue: 4.5,
        reviews: "720,154"
      },
      {
        title: "Data Science Full Course for Beginners in 27 hours - 2025",
        description: "Go from novice to pro in 27 engaging hours.",
        videoUrl: "https://youtu.be/gDZ6czwuQ18?si=GAKGb36xq0VJnRnL",
        thumbnailUrl: "thumbnails/ds3.avif",
        ratingValue: 4.7,
        reviews: "605,937"
      },
      {
        title: "What is Data Science? | Free Data Science Course for Beginners",
        description: "Understand what data science is, simply and clearly.",
        videoUrl: "https://youtu.be/JL_grPUnXzY?si=IOhAod808O4w8fjD",
        thumbnailUrl: "thumbnails/ds4.jpg",
        ratingValue: 4.6,
        reviews: "812,403"
      },
      {
        title: "The Complete Data Science Roadmap",
        description: "Step-by-step journey to become a data scientist.",
        videoUrl: "https://youtu.be/9R3X0JoCLyU?si=YrX-t3At8cLRsmSq",
        thumbnailUrl: "thumbnails/ds5.avif",
        ratingValue: 4.5,
        reviews: "293,746"
      },
      {
        title: "Predicting Student Exam Scores with Machine Learning - Data Science Project",
        description: "Apply ML to solve real-world education problems.",
        videoUrl: "https://youtu.be/XNGgElLhjD4?si=CK_FSlcCXv_m4s9h",
        thumbnailUrl: "thumbnails/ds6.avif",
        ratingValue: 4.6,
        reviews: "157,820"
      },
      {
        title: "Data Science FuLL Course - 12 Hours | Data Science Tutorial for Beginners | Edureka",
        description: "Comprehensive data science tutorial for 12 solid hours.",
        videoUrl: "https://www.youtube.com/live/xiEC5oFsq2s?si=HYBuDrSs1NtCZnd4",
        thumbnailUrl: "thumbnails/ds7.avif",
        ratingValue: 4.7,
        reviews: "984,561"
      }
  ],
  dataStructres: [
    {
      title: "Algorithms and Data Structures  Tutorial - Full Course for Beginners",
      description: "Foundational DSA for complete beginners, from scratch.",
      videoUrl: "https://youtu.be/8hly31xKli0?si=Di8ArD0VnL3RpCBt",
      thumbnailUrl: "thumbnails/dsa1.avif",
      ratingValue: 4.5,
      reviews: "720,154"
    },
    {
      title: "Data Sructures Explained for Beginners - How I Wish I was Taught",
      description: "Simplified DSA concepts explained like you're five.",
      videoUrl: "https://youtu.be/O9v10jQkm5c?si=C9guSIjeT3PyiYdF",
      thumbnailUrl: "thumbnails/dsa2.avif",
      ratingValue: 4.6,
      reviews: "348,291"
    },
    {
      title: "Learn Data Structures and Algorithms for free",
      description: "Free beginner course to learn core DSA topics fast.",
      videoUrl: "https://youtu.be/CBYHwZcbD-s?si=2uI-OeCG9VQlgXwH",
      thumbnailUrl: "thumbnails/dsa3.avif",
      ratingValue: 4.6,
      reviews: "812,403"
    },
    {
      title: "Data Structures and Algorithms for Beginners",
      description: "All the DSA building blocks explained step-by-step.",
      videoUrl: "https://youtu.be/BBpAmxU_NQo?si=GC_GT4XzsrHLG2ie",
      thumbnailUrl: "thumbnails/dsa4.avif",
      ratingValue: 4.5,
      reviews: "293,746"
    },
    {
      title: "Data Structures and Algorithms (DSA) in Java 2024",
      description: "Java-focused guide for learning DSA in 2024.",
      videoUrl: "https://youtu.be/4_HOnhB64Dg?si=tZe9RQJtYA1BAVjY",
      thumbnailUrl: "thumbnails/dsa5.avif",
      ratingValue: 4.6,
      reviews: "601,347"
    },
    {
      title: "Fastest way to learn Data Structures and Algorithms",
      description: "Speedrun your DSA learning journey with this course.",
      videoUrl: "https://youtu.be/tNrNLoCqzco?si=qu-Xx1DQvKKzH8K7",
      thumbnailUrl: "thumbnails/dsa6.avif",
      ratingValue: 4.7,
      reviews: "805,123"
    },
    {
      title: "Data Structures - Full Courses Using C and C++",
      description: "Master DSA quickly with this comprehensive course.",
      videoUrl: "https://youtu.be/B31LgI4Y4DQ?si=7gZo0E1l5kHs46ar",
      thumbnailUrl: "thumbnails/dsa7.avif",
      ratingValue: 4.6,
      reviews: "405,523"
    },
    {
      title: "Data Structures - Computer Science Course for Beginners",
      description: "Learn all about Data Structures in this lecture-style course",
      videoUrl: "https://youtu.be/zg9ih6SVACc?si=N7Gbp__xTiFEXJFB",
      thumbnailUrl: "thumbnails/dsa8.avif",
      ratingValue: 4.7,
      reviews: "465,123"
    }
  ],
  programmingLanguages: [
    {
      title: "Python Full Course for Beginners [2025]",
      description: "Complete Python bootcamp designed for 2025 beginners.",
      videoUrl: "https://youtu.be/K5KVEU3aaeQ?si=siiBDKMyVhCYuHMA",
      thumbnailUrl: "thumbnails/pl1.avif",
      ratingValue: 4.5,
      reviews: "720,154"
    },
    {
      title: "Learn Python - Full Course for Beginners [Tutorial]",
      description: "Perfect Python starter guide with hands-on projects.",
      videoUrl: "https://youtu.be/rfscVS0vtbw?si=E2sPPC6hYoSmQQJQ",
      thumbnailUrl: "thumbnails/pl2.avif",
      ratingValue: 4.7,
      reviews: "605,937"
    },
    {
      title: "Harvard's CS50's Introduction to Computer Science with Python - Full University Course",
      description: "CS fundamentals with Python from Harvard’s CS50 course.",
      videoUrl: "https://youtu.be/nLRL_NcnK-4?si=s-luH14fsadMDjyk",
      thumbnailUrl: "thumbnails/pl3.avif",
      ratingValue: 4.6,
      reviews: "812,403"
    },
    {
      title: "Java Tutorial - Java Full Course for Beginners in Tamil",
      description: "Full beginner Java course taught in Tamil language.",
      videoUrl: "https://youtu.be/kGxSyqKbzsc?si=BurWfmnv38vhQ4vZ",
      thumbnailUrl: "thumbnails/pl4.avif",
      ratingValue: 4.5,
      reviews: "293,746"
    },
    {
      title: "Java Full Coursse for free (2025)",
      description: "Updated free Java course for beginners in 2025.",
      videoUrl: "https://youtu.be/xTtL8E4LzTQ?si=E3caTVpglauH7EJZ",
      thumbnailUrl: "thumbnails/pl5.avif",
      ratingValue: 4.6,
      reviews: "157,820"
    },
    {
      title: "Learn Java 8 - Full Tutorial for Beginners",
      description: "Learn Java 8 essentials with beginner-friendly tutorials.",
      videoUrl: "https://youtu.be/grEKMHGYyns?si=kv27yu24XRMLEnbK",
      thumbnailUrl: "thumbnails/pl6.avif",
      ratingValue: 4.7,
      reviews: "984,561"
    },
    {
      title: "C++ Full Course for free",
      description: "Free complete guide to mastering C++ programming.",
      videoUrl: "https://youtu.be/-TkoO8Z07hI?si=ezcCcZaqKG_n42vH",
      thumbnailUrl: "thumbnails/pl7.avif",
      ratingValue: 4.5,
      reviews: "439,208"
    },
    {
      title: "C++ Programming Course - Beginner to Advanced",
      description: "Start C++ from zero to expert level here.",
      videoUrl: "https://youtu.be/8jLOx1hD3_o?si=W06h8c-GgaHmAfI0",
      thumbnailUrl: "thumbnails/pl8.avif",
      ratingValue: 4.6,
      reviews: "601,347"
    },
    {
      title: "C Programming Full Course for free",
      description: "Everything C programming, from basics to deep dive.",
      videoUrl: "https://youtu.be/87SH2Cn0s9A?si=WDakm6INFhooGkYH",
      thumbnailUrl: "thumbnails/pl9.avif",
      ratingValue: 4.5,
      reviews: "773,910"
    },
    {
      title: "C Programming Tutorial for Beginners",
      description: "C programming made easy for brand new coders.",
      videoUrl: "https://youtu.be/KJgsSFOSQv0?si=nHqYCr618bbmRk2e",
      thumbnailUrl: "thumbnails/pl10.avif",
      ratingValue: 4.6,
      reviews: "805,123"
    }
  ]

};
// loading data set in html
function renderCourses(target) {  
  const courses = data[target];
  const category = String(target).replace(/([A-Z])/g, ' $1').replace(/^./, char => char.toUpperCase());
    const sectionCourse = document.createElement('section');
    sectionCourse.classList.add('course-list');
    sectionCourse.style.paddingTop="10px";
    sectionCourse.id =target;
    sectionCourse.innerHTML = `
        <h2 class="section-title">${category}</h2>
      <div class="carousel-wrapper">
        <button class="carousel-btn left"><img src="icons/reshot-icon-arrow-chevron-left-975UQXVKZF.svg" alt="carousel-left-button"></button>
        
        <div class="carousel-track">
        </div>
        
        <button class="carousel-btn right"><img src="icons/reshot-icon-arrow-chevron-right-WDGHUKQ634.svg" alt="carousel-right-button"></button>
      </div>
    `;
    document.querySelector('body').appendChild(sectionCourse);
    const coursesTrack = sectionCourse.querySelector('.carousel-track');
  courses.forEach((course) => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('card');
    courseCard.style.width = "20rem";
    courseCard.innerHTML = `
    <img src=${course.thumbnailUrl} alt="course-thumbnail">
            <div class="card-body">
              <h5 class="card-title">${course.title}</h5>
              <p class="card-text">${course.description}</p>
              <div class="rating">
                <span class="rating-value">${course.ratingValue}</span>
                <span class="stars">
                  <span class="star full">&#9733;</span>
                  <span class="star full">&#9733;</span>
                  <span class="star full">&#9733;</span>
                  <span class="star full">&#9733;</span>
                  <span class="star half">&#9733;</span>
                </span>
                <span class="review-count">${course.reviews}</span>
              </div>  
              <a href="#" class="btn btn-primary" onclick="addCourses('${course.title}','${course.description}','${course.videoUrl}','${course.thumbnailUrl}')">Add course</a>
            </div>`;
    coursesTrack.appendChild(courseCard);
  });

}
renderCourses("webDevelopment");
renderCourses("machineLearning");
renderCourses("dataScience");
renderCourses("dataStructres");
renderCourses("programmingLanguages");
attachCarouselScroll();



const exploreList =document.createElement('section');
exploreList.id = 'skills-certifications';
exploreList.innerHTML = `
<h2>Explore top skills and certifications</h2>
<div class="skills-grid">
  <div class="category">
    <h3>In-demand Careers</h3>
    <ul>
      <li><a href="#dataScience">Data Scientist</a></li>
      <li><a href="#webDevelopment">Web Developer</a></li>
      <li><a href="#machineLearning">Machine Learning</a></li>
      <li><a href="#programmingLanguages">Programming Languages</a></li>
      <li><a href="#dataStructres">Data Structures</a></li>
    </ul>
  </div>

  <div class="category">
    <h3><a href="#webDevelopment">Web Development</a></h3>
    <ul>
      <li><a href="#webDevelopment">HTML CSS</a></li>
      <li><a href="#webDevelopment">JavaScript</a></li>
      <li><a href="#webDevelopment">React.js Angular</a></li>
      <li><a href="#webDevelopment">MySQL MongoDB</a></li>
      <li><a href="#webDevelopment">Java Python</a></li>
    </ul>
  </div>

  <div class="category">
    <h3><a href="#machineLearning">Machine Learning</a></h3>
    <ul>
      <li><a href="#dataScience">Data Science</a></li>
      <li><a href="#machineLearning">Python</a></li>
      <li><a href="#machineLearning">Machine Learning</a></li>
      <li><a href="#machineLearning">ChatGPT</a></li>
      <li><a href="#machineLearning">Deep Learning</a></li>
    </ul>
  </div>

  <div class="category">
    <h3><a href="#programmingLanguages">Programming Languages</a></h3>
    <ul>
      <li><a href="#programmingLanguages">Python</a></li>
      <li><a href="#programmingLanguages">Java</a></li>
      <li><a href="#programmingLanguages">C</a></li>
      <li><a href="#programmingLanguages">C++</a></li>
    </ul>
  </div>
</div>
`;
document.querySelector(".explore").setAttribute("href", "index.html#skills-certifications");
document.querySelector('body').appendChild(exploreList);
const footer =document.createElement('footer');
footer.innerHTML = `
<p>© 2025 eLearn.com | Built with ❤️ and caffeine ☕</p>`;
document.querySelector('body').appendChild(footer);
//to load the courses in course list
function addCourses(title, description, videoUrl, thumbnailUrl) {
  let courses = JSON.parse(localStorage.getItem('mycourses')) || [];
  const alreadyAdded = courses.some(course => course.title === title);
  if (alreadyAdded) {
    alert(`"${title}" is already in your learning list!`);
    return;
  }
  courses.push({title, description, videoUrl, thumbnailUrl});
  localStorage.setItem('mycourses', JSON.stringify(courses));
  window.location.href = 'mylearning.html';
}
document.querySelector('.reset-storage').addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.clear();
  location.reload();
});
document.querySelector(".get-started-btn").setAttribute("href","mylearning.html");
