'use strict';

$(document).ready(function(){
  $('.slider__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider__nav'
  });
});

$('.slider__nav').slick({
  slidesToShow: 2,
  nextArrow: false,
  prevArrow: false,
  slidesToScroll: 1,
  asNavFor: '.slider__for',
  centerMode: true,
  focusOnSelect: true
});

const sliderValue = document.getElementById('range-value');
const inputSlider = document.getElementById('customRange2');

inputSlider.oninput = (() => {
  const value = inputSlider.value;

  sliderValue.textContent = 'Max.' + '$' + value;
});


const heart = document.querySelectorAll('.heart');
const redHeart = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png'
const emptyHeart = 'https://pixlok.com/wp-content/uploads/2021/12/Instagram-Like-Icon-83nfc3.png';

heart.forEach(item => {
  item.addEventListener('click', function handleClick() {

    if (item.src === emptyHeart) {
      item.src = redHeart;
    } else {
      item.src = emptyHeart;
    }
  })
});

const ripple = document.createElement('span');

function getAnimationDuration() {
  const aDuration = window.getComputedStyle(ripple).animationDuration;

  return aDuration.includes('ms') 
    ? aDuration.replace('ms', '') : aDuration.replace('s', '') * 1000;
}

document.addEventListener('click', function(e) {
  const targetItem = e.target;

  if (targetItem.closest('[data-ripple]')) {
    const button = targetItem.closest('[data-ripple]');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${e.pageX - (button.getBoundingClientRect().left + scrollX) - radius}px`;
    ripple.style.top = `${e.pageY - (button.getBoundingClientRect().top + scrollY) - radius}px`;
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    const timeOut = getAnimationDuration(ripple);

    setTimeout(() => {
      ripple ? ripple.remove() : null;
    }, timeOut);
  }
});
