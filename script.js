// Fase 1
function selectAnswer(answer) {
  document.getElementById("phase1").classList.add("hidden");
  document.getElementById("phase2").classList.remove("hidden");
}

// Fase 2
function checkIntruder(choice, isCorrect) {
  const hint = document.getElementById("hint");
  if (isCorrect) {
    hint.innerHTML =
      "Acertou! 📚 é o único que não é comida. Vamos para a próxima!";
    setTimeout(() => {
      document.getElementById("phase2").classList.add("hidden");
      document.getElementById("phase3").classList.remove("hidden");
    }, 1500);
  } else {
    hint.innerHTML = "Quase! Todos são comidas, exceto um...";
  }
}

// Fase 3
function finalCheck() {
  const answer = document.getElementById("animalAnswer").value.trim();
  const hint = document.getElementById("finalHint");

  if (answer.length > 0) {
    document.getElementById("phase3").classList.add("hidden");
    document.getElementById("finalMessage").classList.remove("hidden");
    startNameEffects();
  } else {
    hint.innerHTML = "Ei, você precisa digitar algum animal! 🐾";
    hint.style.color = "#e75480";
  }
}

// Efeitos para o nome
function startNameEffects() {
  const letters = document.querySelectorAll(".letter");

  // Efeito de digitação
  letters.forEach((letter, index) => {
    letter.style.opacity = "0";
    setTimeout(() => {
      letter.style.transition = "opacity 0.5s ease";
      letter.style.opacity = "1";
    }, index * 150);
  });

  // Efeito ao passar o mouse
  letters.forEach((letter) => {
    letter.addEventListener("mouseover", () => {
      letter.style.transform = "scale(1.5) rotate(10deg)";
      createConfetti(letter);
    });

    letter.addEventListener("mouseout", () => {
      letter.style.transform = "";
    });
  });
}

// Cria efeito de confete
function createConfetti(element) {
  const rect = element.getBoundingClientRect();
  const colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#ff00ff",
    "#00ffff",
  ];

  for (let i = 0; i < 15; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${rect.left + rect.width / 2}px`;
    confetti.style.top = `${rect.top}px`;
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = "50%";
    confetti.style.width = `${Math.random() * 8 + 4}px`;
    confetti.style.height = confetti.style.width;
    document.body.appendChild(confetti);

    const angle = Math.random() * Math.PI * 2;
    const velocity = 3 + Math.random() * 4;
    const x = Math.cos(angle) * velocity;
    const y = Math.sin(angle) * velocity;

    let opacity = 1;
    let posY = rect.top;
    let posX = rect.left + rect.width / 2;

    const animate = () => {
      opacity -= 0.02;
      posY -= y;
      posX += x;
      y += 0.1; // Gravidade

      confetti.style.opacity = opacity;
      confetti.style.top = `${posY}px`;
      confetti.style.left = `${posX}px`;
      confetti.style.transform = `rotate(${posX + posY}deg)`;

      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        confetti.remove();
      }
    };

    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 10);
  }
}
function finalizarComSurpresa() {
  alert(
    "Ei... você realmente chegou até o fim. Isso já diz muito. Obrigado por jogar! 💖"
  );
  window.location.href = "fim.html";
}
