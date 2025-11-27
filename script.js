const scenes = [
  { text: "1/7: Mrs Lim receives a message late at night", bg: "scene1.jpg" },
  { text: "2/7: The message appears to show her son in trouble", bg: "scene2.jpg" },
  { text: "3/7: He asks her to withdraw money from her CPF", bg: "scene3.jpg" },
  { text: "4/7: Somethings seems off about him, however Mrs Lim followed his instructions and transfered the funds to him", bg: "scene4.jpg" },
  { text: "5/7: Days gone by and Mrs Lim patiently waits for her son to respond...", bg: "scene5.jpg" },
  { text: "6/7: One day an SPF officer contacts her and inform that she was the victim of a scam", bg: "scene6.jpg" },
  { text: "7/7: How could my son scam me! Mrs Lim thought to herself", bg: "scene7.jpg" },
];

let currentScene = 0;
let isTyping = false;
let typingInterval;

const sceneEl = document.getElementById("scene");
const textBoxEl = document.getElementById("textBox");
const nextButtonEl = document.getElementById("nextButton");
const fadeOverlay = document.getElementById("fadeOverlay");

nextButtonEl.classList.add("buttonbob");
textBoxEl.classList.add("textbob");

// Preload images
scenes.forEach(s => new Image().src = s.bg);

// Typewriter function
function typeWriter(text, element, speed = 40, callback) {
  element.textContent = "";
  let i = 0;
  isTyping = true;

  typingInterval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(typingInterval);
      isTyping = false;
      if (callback) callback();
    }
  }, speed);
}

// Load scene with proper fade -> typewriter sequence
function loadScene(index) {
  // Step 1: Fade overlay IN
  fadeOverlay.style.opacity = 1;

  setTimeout(() => {
    // Step 2: Change background while screen is dark
    sceneEl.style.backgroundImage = `url(${scenes[index].bg})`;

    // Step 3: Fade overlay OUT while typing
    fadeOverlay.style.transition = "opacity 0.35s ease";
    fadeOverlay.style.opacity = 0;

    typeWriter(scenes[index].text, textBoxEl, 40);
  }, 350); // match overlay fade-in duration
}

// Next button logic
nextButtonEl.addEventListener("click", () => {
  if (isTyping) {
    // If typing, finish instantly
    clearInterval(typingInterval);
    textBoxEl.textContent = scenes[currentScene].text;
    isTyping = false;
    fadeOverlay.style.opacity = 0; // make sure overlay is gone
    return;
  }

  currentScene++;
  if (currentScene < scenes.length) {
    loadScene(currentScene);
  } else {
    // Final message with fade
    fadeOverlay.style.opacity = 1;
    setTimeout(() => {
      textBoxEl.textContent = "Proceed to TryLab to find out what happens next!";
      fadeOverlay.style.opacity = 0;
      nextButtonEl.style.display = "none";
    }, 350);
  }
});

// Initialize first scene
loadScene(currentScene);
