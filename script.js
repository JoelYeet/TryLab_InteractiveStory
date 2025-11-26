// List of scenes
// Each scene has: { text: "...", bg: "image.jpg" }
const scenes = [
  {
    text: "1/7: Mrs Lim receives a message late at night",
    bg: "scene1.jpg"
  },
  {
    text: "2/7: The message appears to show her son in trouble",
    bg: "scene2.jpg"
  },
  {
    text: "3/7: He asks her to withdraw money from her CPF",
    bg: "scene3.jpg"
  },
  {
    text: "4/7: Somethings seems off about him, however Mrs Lim followed his instructions and transfered the funds to him",
    bg: "scene4.jpg"
  },
  {
    text: "5/7: Days gone by and Mrs Lim patiently waits for her son to respond...",
    bg: "scene5.jpg"
  },
  {
    text: "6/7: One day an SPF officer contacts her and inform that she was the victim of a scam",
    bg: "scene6.jpg"
  },
  {
    text: "7/7: How could my son scam me!, Mrs Lim thought to herself",
    bg: "scene7.jpg"
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
    textBoxEl.textContent = "Proceed to TryLab to find out what happens next!";
    nextButtonEl.style.display = "none";
  }
});