require ('./style.scss');

const sliderElement = document.querySelector('.picture-slider')
const continueButton = document.querySelector('.continue')
const radioElements = document.querySelectorAll('.scrollbar__radio')
const radioElementArray = Array.from(radioElements)

const sliderWidth = Math.ceil(sliderElement.getBoundingClientRect().width)

radioElements.forEach((element, index) => element.addEventListener ('change', () => {
    sliderElement.scrollTo(sliderWidth * index, 0)

}));

continueButton.addEventListener('click', () => {
    const checkedRadio = radioElementArray.find(radio => radio.checked);
    const nextRadioButton = checkedRadio.parentElement.nextElementSibling;

    if (nextRadioButton === null){
        window.location = './login.html'
    } else {
        nextRadioButton.click();
    }

})