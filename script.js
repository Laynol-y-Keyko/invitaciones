const images = document.querySelectorAll(".element__efect");
const texts = document.querySelectorAll(".element__text");
function triggerAnimation(entries) {
  entries.forEach((entry) => {
    const image = entry.target.querySelector("img");
    const text = entry.target.querySelector(".nombresTexto-fade");
    if (image) {
      image.classList.toggle("unset", entry.isIntersecting);
    }
    if (text) {
      text.classList.toggle("nombresTexto-fadeI", entry.isIntersecting);
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.25,
};

const observer = new IntersectionObserver(triggerAnimation, options);

images.forEach((image) => {
  observer.observe(image);
});

texts.forEach((text) => {
  observer.observe(text);
});

function updateCountdown() {
  const targetDate = new Date("2024-01-13T14:00:00").getTime();
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Boton flotante de musica
document.addEventListener("DOMContentLoaded", function () {
  const audioPlayer = document.getElementById("audio-player");
  const playPauseButton = document.getElementById("play-pause-button");
  
  playPauseButton.style.backgroundImage = "url('img/boton-de-play.png')";

  audioPlayer.volume = 0.5;
  let userInteracted = false;

  document.addEventListener("click", function () {
    if (!userInteracted && audioPlayer.paused) {
      audioPlayer.play();
      playPauseButton.classList.remove("play");
      playPauseButton.classList.add("pause");
      userInteracted = true;
      console.log("Click event!");
      playPauseButton.style.backgroundImage = "url('img/pausa.png')";
    }
  });


  playPauseButton.addEventListener("click", function () {
    if (audioPlayer.paused) {
      audioPlayer.currentTime = 0;
      audioPlayer.play();
      playPauseButton.classList.remove("play");
      playPauseButton.classList.add("pause");

      playPauseButton.style.backgroundImage = "url('img/pausa.png')";
    } else {
      audioPlayer.pause();
      playPauseButton.classList.remove("pause");
      playPauseButton.classList.add("play");

      playPauseButton.style.backgroundImage = "url('img/boton-de-play.png')";
    }
  });

  audioPlayer.addEventListener("ended", function () {
    // Cuando la canción termina, reiniciar
    audioPlayer.currentTime = 0;
    audioPlayer.play();
  });

  // Reproducir automáticamente al cargar la página
  audioPlayer.play();
  playPauseButton.classList.remove("play");
  playPauseButton.classList.add("pause");
});
