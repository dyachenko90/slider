const back = document.querySelector(".back");
const forward = document.querySelector(".forward");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumder = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "black"; 


const resetBG = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = "transparent";
    })
}

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        resetBG();
        slider.style.transform = `translateX(-${i *800}px)`
        slideNumder = i + 1;
        button.style.backgroundColor = "black";
    })
})

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumder*800}px)`;
    slideNumder += 1;
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumder-2)*800}px)`;
    slideNumder -= 1;
}

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumder = 1;
}

const getLastSlide = () => {
    slider.style.transform = `translateX(${(length-1)*800}px)`;
}

const changeBG = () => {
    resetBG();
    buttons[slideNumder-1].style.backgroundColor = "black"; 
}

forward.addEventListener("click", (e) => {
    slideNumder < length ? nextSlide() : getFirstSlide();
    changeBG();
});


back.addEventListener("click", (e) => {
    slideNumder > 1 ? prevSlide() : getLastSlide();
    changeBG();
});

