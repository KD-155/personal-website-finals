<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient'

// Import images from assets folder
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';

const commentName = ref('');
const commentText = ref('');
const comments = ref();
const error = ref(null);

const addComment = async () => {
  try {
    const { error: insertError } = await supabase
      .from('comments')
      .insert([{ commentName: commentName.value, commentText: commentText.value }]);

    if (insertError) {
      throw insertError;
    }

    commentName.value = '';
    commentText.value = '';
    await fetchComments();
  } catch (err) {
    error.value = err.message;
  }
};

const fetchComments = async () => {
  try {
    const { data, error: selectError } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false });

    if (selectError) {
      throw selectError;
    }

    comments.value = data;
  } catch (err) {
    error.value = err.message;
  }
};

onMounted(async () => {
    await fetchComments();
});
</script>

<template>
  <input type="checkbox" id="menu" hidden>
  <nav class="navbar">
    <a href="#home" class="logo">KellyS</a>
    <label for="menu" class="label">
      <div></div>
      <div></div>
      <div></div>
    </label>
    <ul class="nav-links">
      <li><a href="#education">Education</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#hobbies">Hobbies</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#resources">Resources</a></li>
      <li><a href="#comments">Feedback</a></li>
    </ul>
  </nav>

  <section id="home" class="home">
    <div class="home-content">
      <h1>HI, I'M KELLY WELCOME TO MY WEBSITE</h1>
      <p>I am currently a 2nd-Year College student, Batch 2023-2027.</p>
      <div class="socials-grid">
        <div class="social-card">
          <a href="https://github.com/KD-155" target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
        <div class="social-card">
          <a href="mailto:ksdumbrique2@student.apc.edu.ph" target="_blank"><i class="fa-regular fa-envelope"></i></a>
        </div>
        <div class="social-card">
          <a href="https://www.linkedin.com/in/kelly-dumbrique-928a7b216/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    <div class="home-img">
      <img :src="image7" alt="Profile" class="profile-img">
    </div>
  </section>

  <section id="education" class="education">
    <h2>Education | Achievements</h2>
    <div class="timeline-items">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">August 2021</div>
        <div class="timeline-content">
          <h3>Senior High School</h3>
          <p>Asia Pacific College | STEM - Engineering</p>
        </div>
        <div class="timeline-content">
          <h3>Head of Finance</h3>
          <p>APC Bahaghari</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">November 2021</div>
        <div class="timeline-content">
          <h3>Finance Officer</h3>
          <p>Junior Information Systems Security Association - APC Chapter</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">April 2023</div>
        <div class="timeline-content">
          <h3>Documentations Officer</h3>
          <p>APC HiRAYA</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">August 2023</div>
        <div class="timeline-content">
          <h3>High Honors</h3>
          <p>Asia Pacific College | Senior High School Graduate</p>
        </div>
        <div class="timeline-content">
          <h3>College</h3>
          <p>Asia Pacific College | Bachelor of Science in Computer Science specializing in Cybersecurity and Forensics</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">August 2024</div>
        <div class="timeline-content">
          <h3>Vice President - Internal</h3>
          <p>Junior Information Systems Security Association - APC Chapter</p>
        </div>
        <div class="timeline-content">
          <h3>Assistant Director of Finance</h3>
          <p>Microsoft Community - APC</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">October 2024</div>
        <div class="timeline-content">
          <h3>Ambassador</h3>
          <p>Gogolook Whoscall</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">November 2024</div>
        <div class="timeline-content">
          <h3>Honor Student Awardee</h3>
          <p>Asia Pacific College</p>
        </div>
        <div class="timeline-content">
          <h3>Quality Assessment Interviewee</h3>
          <p>ASEAN University Network</p>
        </div>
      </div>
    </div>
  </section>

  <section id="experience" class="experience">
    <h2>Skills | Experience</h2>
    <div class="experience-grid">
      <div class="experience-card">
        <a href="https://www.canva.com/" target="_blank"><i class="fa-solid fa-c"></i></a>
        <h3>Canva</h3>
      </div>
      <div class="experience-card">
        <a href="https://www.w3schools.com/Css/" target="_blank"><i class="fa-brands fa-css3-alt"></i></a>
        <h3>CSS</h3>
      </div>
      <div class="experience-card">
        <a href="https://www.figma.com/" target="_blank"><i class="fa-brands fa-figma"></i></a>
        <h3>Figma</h3>
      </div>
      <div class="experience-card">
        <a href="http://flowgorithm.org/" target="_blank"><i class="fa-brands fa-f"></i></a>
        <h3>Flowgorithm</h3>
      </div>
      <div class="experience-card">
        <a href="https://github.com/" target="_blank"><i class="fa-brands fa-github"></i></a>
        <h3>GitHub</h3>
      </div>
      <div class="experience-card">
        <a href="https://www.w3schools.com/html/" target="_blank"><i class="fa-brands fa-html5"></i></a>
        <h3>HTML</h3>
      </div>
      <div class="experience-card">
        <a href="https://www.java.com/en/" target="_blank"><i class="fa-brands fa-java"></i></a>
        <h3>Java</h3>
      </div>
      <div class="experience-card">
        <a href="https://www.w3schools.com/js/default.asp" target="_blank"><i class="fa-brands fa-js"></i></a>
        <h3>JavaScript</h3>
      </div>
      <div class="experience-card">
        <a href="https://m365.cloud.microsoft/?auth=2" target="_blank"><i class="fa-brands fa-microsoft"></i></a>
        <h3>Microsoft Office 365</h3>
      </div>
      <div class="experience-card">
        <a href="https://www.mysql.com/" target="_blank"><i class="fa-solid fa-database"></i></a>
        <h3>MySQL</h3>
      </div>
      <div class="experience-card">
        <a href="https://www.python.org/" target="_blank"><i class="fa-brands fa-python"></i></a>
        <h3>Python</h3>
      </div>
      <div class="experience-card">
        <a href="https://react.dev/" target="_blank"><i class="fa-brands fa-react"></i></a>
        <h3>React</h3>
      </div>
      <div class="experience-card">
        <i class="fa-solid fa-user-tie"></i>
        <h3>System Administration</h3>
      </div>
      <div class="experience-card">
        <i class="fa-solid fa-screwdriver-wrench"></i>
        <h3>Technical Support</h3>
      </div>
      <div class="experience-card">
        <a href="https://ubuntu.com/desktop" target="_blank"><i class="fa-brands fa-ubuntu"></i></a>
        <h3>Ubuntu</h3>
      </div>
      <div class="experience-card">
        <a href="https://code.visualstudio.com/" target="_blank"><i class="fa-solid fa-v"></i></a>
        <h3>Visual Studio Code</h3>
      </div>
      <div class="experience-card">
        <a href="https://vuejs.org/" target="_blank"><i class="fa-brands fa-vuejs"></i></a>
        <h3>Vue.js</h3>
      </div>
    </div>
  </section>

  <section id="hobbies" class="hobbies">
    <h2>Hobbies | Goals</h2>
    <div class="hobbies-grid">
      <div class="hobbies-card">
        <i class="fa-solid fa-paintbrush"></i>
        <h3>Hobbies & Interests</h3>
        <p>My hobbies include watching movies and series, going on spontaneous trips, and listening to music.</p>
      </div>
      <div class="hobbies-card">
        <i class="fa-solid fa-bullseye"></i>
        <h3>Goals</h3>
        <p>My goals in life aren't that hard. First, I want to graduate on time and to get a stable job. Of course, that job must have a healthy environment where I can ensure that I have a work-life balance. And hopefully, I get to retire early and live a comfortable life.</p>
      </div>
    </div>
  </section>

  <section id="gallery" class="gallery">
    <h2>Picture Gallery</h2>
    <div class="gallery-grid">
      <div class="gallery-card">
        <img :src="image1" alt="Gallery Image 1">
      </div>
      <div class="gallery-card">
        <img :src="image6" alt="Gallery Image 2">
      </div>
      <div class="gallery-card">
        <img :src="image3" alt="Gallery Image 3">
      </div>
      <div class="gallery-card">
        <img :src="image4" alt="Gallery Image 4">
      </div>
      <div class="gallery-card">
        <img :src="image2" alt="Gallery Image 5">
      </div>
    </div>
  </section>

  <section id="resources" class="resources">
    <h2>Resources</h2>
    <div class="resources-grid">
      <a href="https://github.com/KD-155/personal-website-finals" target="_blank" class="resources-card">
        <h3>My GitHub Repository</h3>
      </a>
      <a href="https://www.youtube.com/watch?v=UqHILyzcULE" target="_blank" class="resources-card">
        <h3>Education Timeline Design</h3>
      </a>
      <a href="https://www.youtube.com/watch?v=fQbBwP_xOXk" target="_blank" class="resources-card">
        <h3>Home Page Design</h3>
      </a>
      <a href="https://fontawesome.com/" target="_blank" class="resources-card">
        <h3>Icons</h3>
      </a>
      <a href="https://gemini.google.com/app/96dc6fdd574c54ca?hl=en-IN" target="_blank" class="resources-card">
        <h3>Position the Social Links Horizontally</h3>
      </a>
      <a href="https://gemini.google.com/app/8357e8ed5c444195?hl=en-IN" target="_blank" class="resources-card">
        <h3>Resources Design</h3>
      </a>
      <a href="https://www.youtube.com/watch?v=o9EH4SkxZ_M" target="_blank" class="resources-card">
        <h3>Responsive Navigation Bar</h3>
      </a>
    </div>
  </section>

  <section id="comments" class="comments">
    <div class="comments-container">
      <h2>Thoughts about my website?</h2>
      <p>Let me know your feedback!</p>
      <div v-if="error" class="error-message">{{ error }}</div>
      <div class="comments-content">
        <textarea v-model="commentName" placeholder="Your Name" required></textarea>
      </div>
      <div class="comments-content">
        <textarea v-model="commentText" placeholder="Message" required></textarea>
      </div>
      <button @click="addComment">Submit</button>
      <div id="comment-list">
      <div v-for="comment in comments" :key="comment.id" class="comment-item">
        <strong>{{ comment.commentName }}:</strong> {{ comment.commentText }}
      </div>
      </div>
    </div>
  </section>

  <footer>
    <p>© 2025 Kelly Dumbrique. All rights reserved.</p>
  </footer>
</template>