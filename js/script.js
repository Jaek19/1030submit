const slide = document.getElementById('slide');
const toLeft = () => {
  slide.style.left = '-100%';
  slide.style.transition = 'left 0.3s';

  setTimeout(() => {
    slide.style.left = 0;
    slide.style.transition = 'none';
    slide.append(slide.firstElementChild);
  }, 500);
};
setInterval(toLeft, 2800);

const noticeLi = document.querySelectorAll('#notice li a');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close');

noticeLi.forEach((li) =>
  li.addEventListener('click', () => {
    popup.style.display = 'block';
  })
);

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
