const images = document.querySelectorAll('.element__efect');
const texts = document.querySelectorAll('.element__text');
function triggerAnimation(entries){
  entries.forEach(entry => {
    const image = entry.target.querySelector('img');
    const text = entry.target.querySelector('.nombresTexto-fade');
    if (image) {
      image.classList.toggle('unset', entry.isIntersecting);
    }
    if (text) {
      text.classList.toggle('nombresTexto-fadeI', entry.isIntersecting);
    }

  });
}

const options={
 root: null,
 rootMargin: '0px',
 threshold: .25
}

const observer= new IntersectionObserver(triggerAnimation, options);

images.forEach(image=>{
  observer.observe(image);
});

texts.forEach(text=>{
  observer.observe(text);
});




function updateCountdown() {
  const targetDate = new Date("2024-01-13T14:00:00").getTime();
  const currentDate = new Date().getTime();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();


