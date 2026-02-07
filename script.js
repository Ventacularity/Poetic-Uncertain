const fillers = [
  "lingers",
  "drifts",
  "refuses to settle",
  "almost disappears",
  "returns unexpectedly"
];

let seedWords = [];

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generatePoem() {
  const poem = document.getElementById("poem");
  poem.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const line = document.createElement("div");
    line.textContent = `${pick(seedWords)} ${pick(fillers)}`;
    poem.appendChild(line);
  }
}

document.getElementById("generate").onclick = () => {
  const input = document.getElementById("thought").value;

  seedWords = input
    .toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 2);

  if (seedWords.length === 0) seedWords = ["something"];

  generatePoem();
};

document.getElementById("regen").onclick = generatePoem;
