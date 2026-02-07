/*
  This piece treats the user's words as material.
  Meaning is not added — it is rearranged through structure.
*/

// Sentence templates grouped by role.
// Each template reframes a word differently.
const templates = [
  // persistence / staying
  word => `${word} stays with me`,
  word => `i can’t quite let go of ${word}`,
  word => `${word} keeps its place`,

  // doubt / uncertainty
  word => `${word} feels unfinished`,
  word => `i’m not sure what ${word} means anymore`,
  word => `${word} almost makes sense`,

  // return / repetition
  word => `i keep returning to ${word}`,
  word => `${word}, again`,
  word => `${word} comes back differently`,

  // echo / fragmentation
  word => `${word} echoes for a moment`,
  word => `just ${word}`,
  word => `${word} without explanation`,

  // time / drift
  word => `${word} drifts over time`,
  word => `${word} changes while i’m not looking`,
  word => `${word} doesn’t stay still`
];

// Words extracted from the user's input.
// These act as the generative seed.
let seedWords = [];

// Utility: pick a random element
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate a poem using current seedWords
function generatePoem() {
  const poem = document.getElementById("poem");
  poem.innerHTML = "";

  // Fixed structure: 3 lines
  // Variable content: word + template choice
  for (let i = 0; i < 3; i++) {
    const word = pick(seedWords);
    const template = pick(templates);

    const line = document.createElement("div");
    line.textContent = template(word);
    poem.appendChild(line);
  }
}

// Initial generation: extract seed words
document.getElementById("generate").onclick = () => {
  const input = document.getElementById("thought").value;

  seedWords = input
    .toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 2);

  // Fallback if input is empty or too short
  if (seedWords.length === 0) {
    seedWords = ["something"];
  }

  generatePoem();
};

// Regenerate poem using the same seed
document.getElementById("regen").onclick = generatePoem;
