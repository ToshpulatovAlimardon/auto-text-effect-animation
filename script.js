const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

let careerIndex = 0;



const updateText = () => {
  containerEl.innerHTML = `
    <h1>I am a ${careers[careerIndex]}</h1>
  `;
};

updateText();
