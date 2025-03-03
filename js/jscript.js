// js of responsive nav menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

// js for video slider nav
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".contentt");

let currentIndex = 0;
const slideInterval = 5000; // Change slide every 5 seconds

function sliderNav(index) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[index].classList.add("active");
    slides[index].classList.add("active");
    contents[index].classList.add("active");
}

function autoSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    sliderNav(currentIndex);
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        currentIndex = i;
        sliderNav(i);
    });
});

setInterval(autoSlide, slideInterval);

  /*scrolling down*/
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});








/*NUMBERS*/
  /*numbers*/
   /*numbers*/
   document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.number');
    const speed = 200; // The lower the slower
    
    counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
    
      // Lower inc to slow and higher to slow
      const inc = target / speed;
    
      // Check if target is reached
      if (count < target) {
          // Add inc to count and output in counter
          counter.innerText = Math.ceil(count + inc);
          // Call function every ms
          setTimeout(updateCount, 1);
      } else {
          counter.innerText = target;
      }
    };
    
    updateCount();
    });
    });









//ABOUT US PAGE
    const sentences = [

        "We capture your precious moments",
        "Professional videography and photography",
        "Contact us for your next event"
        ];
        
        let index = 0;
        const sentenceElement = document.getElementById('sentence');
        
        function showSentence() {
        sentenceElement.textContent = sentences[index];
        sentenceElement.style.opacity = 1;
        setTimeout(hideSentence, 3000);
        }
        
        function hideSentence() {
        sentenceElement.style.opacity = 0;
        setTimeout(nextSentence, 1000);
        }
        
        function nextSentence() {
        index = (index + 1) % sentences.length;
        showSentence();
        }
        
        showSentence();








        //portfolio page
           // Filter functionality
document.getElementById('photography').addEventListener('click', function() {
    filterPortfolio('photography');
});

document.getElementById('videography').addEventListener('click', function() {
    filterPortfolio('videography');
});

function filterPortfolio(type) {
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
        if (item.classList.contains(type)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


// script.js
// script.js
const dynamicWordElement = document.getElementById("dynamic-word");
const words = ["Create", "Inspire", "Transform", "Innovate", "Capture"];
let wordIndex = 0;

function changeWord() {
  dynamicWordElement.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
}

setInterval(changeWord, 3000); // Adjusted to 3000 ms for better pacing





// service paghe
// script.js
const faqQuestions = document.querySelectorAll('.faq-question');
const faqAnswers = document.querySelectorAll('.faq-answer');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // Remove active class from all questions
    faqQuestions.forEach(q => q.classList.remove('active'));
    question.classList.add('active');

    // Hide all answers
    faqAnswers.forEach(answer => answer.classList.remove('active'));

    // Show the selected answer
    const answerId = question.dataset.answer;
    document.getElementById(answerId).classList.add('active');
  });
});


