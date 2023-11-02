const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const content = document.querySelector('.content');
const circle = document.querySelector('.circle')

open.addEventListener('click', () => {
  container.classList.add('show-nav');
  content.style.display = 'none';
  circle.style.borderRadius = '50%';
});

close.addEventListener('click', () => {
  container.classList.remove('show-nav');
  content.style.display = 'block';
  circle.style.borderRadius = 'initial';

});




