require ('./style.scss');

const container = document.querySelector('.picture-slider')
const imageWindow = document.querySelector('.picture-slider__scroller')
const next = document.querySelector('.next')
const dots = document.querySelector('.dots');

const infoOne = document.querySelector('picture-slider__information-one')
const infoTwo = document.querySelector('picture-slider__information-two')
const infothree = document.querySelector('picture-slider__information-three')

function slideDots(){
Array.from(dots.children).forEach((dot, index) =>{
    if(currentIndex === index){
        dot.classList.add('fill')
    }else{
        dot.classList.remove('fill')
    }

})
}



Array.from(container.children).forEach((element, index) => {
    dots.innerHTML += `<div class = "dot ${ index == 0 ? 'fill' : '' }" data-index="${index}"></div>`;
})


let currentIndex = 0;
const imageWindowWidth = container.offsetWidth;
console.log(imageWindowWidth)

        
container.addEventListener('click', (event) => {
    let newIndex = currentIndex;
    
   if(event.target === next){
        if(newIndex < container.children.length - 1){
            newIndex = currentIndex + 1;
        }
    }

    currentIndex = newIndex;
    const offset = newIndex * imageWindowWidth;


    container.animate([{ transform: `translateX(-${offset}px)` }], { duration: 300, fill: 'both'})

    slideDots();
});

slideDots();