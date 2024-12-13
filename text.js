const container = document.querySelector('.graphics-container');
const leftGraphic = document.getElementById('left-graphic');
const centerGraphic = document.getElementById('center-graphic');
const rightGraphic = document.getElementById('right-graphic');

const graphics = [leftGraphic, centerGraphic, rightGraphic];
const windowWidth = window.innerWidth;

let mouseX = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX / ( windowWidth / 2 ) ;

    const leftPos = (mouseX - 0.5) * -400; // Adjust positioning
    const centerPos = (mouseX - 0.5) * -400;
    const rightPos = (mouseX - 0.5) * -400;

    // Apply transformations
    graphics[0].style.transform = `translateX(${leftPos}px)`;
    graphics[1].style.transform = `translateX(${centerPos}px)`;
    graphics[2].style.transform = `translateX(${rightPos}px)`;
});

// GSAP example
/*gsap.to(graphics[1], {
    spring: 2,
    movement,
})*/