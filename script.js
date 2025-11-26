// List of scenes
// Each scene has: { text: "...", bg: "image.jpg" }
const scenes = [
  {
    text: "1/4: Mrs Lim receives a message late at night.",
    bg: "scene1.jpg"
  },
  {
    text: "2/4: The message appears to show her son in trouble, he asks her to withdraw money from her CPF",
    bg: "scene2.jpg"
  },
  {
    text: "3/4: Something feels off, but she trusts her son, she withdraws $500 from her RA and transfer the amount to her beloved son",
    bg: "scene3.jpg"
  },
  {
    text: "4/4: Soon, Mrs Lim gradually stops receiving messages from her son",
    bg: "scene4.jpg"
  }
];

let currentScene = 0;

const sceneEl = document.getElementById("scene");
const textBoxEl = document.getElementById("textBox");
const nextButtonEl = document.getElementById("nextButton");

// Load the first scene
loadScene(currentScene);

function loadScene(index) {
  textBoxEl.textContent = scenes[index].text;
  sceneEl.style.backgroundImage = `url(${scenes[index].bg})`;
}

nextButtonEl.addEventListener("click", () => {
  currentScene++;

  if (currentScene < scenes.length) {
    loadScene(currentScene);
  } else {
    textBoxEl.textContent = "Proceed to TryLab to find out what happens next!s";
    nextButtonEl.style.display = "none";
  }
});