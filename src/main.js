const sliderValue = document.getElementById('range-value');
const inputSlider = document.getElementById('customRange2');


inputSlider.oninput = (() => {
  const value = inputSlider.value;

  sliderValue.textContent = 'Max.' + '$' + value;
});

