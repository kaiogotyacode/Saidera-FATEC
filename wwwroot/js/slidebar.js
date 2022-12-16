var radio1 = document.querySelector("#radio1")
var radio2 = document.querySelector("#radio2")
var radio3 = document.querySelector("#radio3")
var radio4 = document.querySelector("#radio4")

var left = document.querySelector("#left-button")
var right = document.querySelector("#right-button")

var label1 = document.querySelector("#label1")
var label2 = document.querySelector("#label2")
var label3 = document.querySelector("#label3")
var label4 = document.querySelector("#label4")

var carouselCounter = 1;

var carousel = document.querySelector("#carousel-images")

function resetButtonsColors() {
    label1.style.cssText += 'background-color: rgba(0, 0, 0, .15);'
    label2.style.cssText += 'background-color: rgba(0, 0, 0, .15);'
    label3.style.cssText += 'background-color: rgba(0, 0, 0, .15);'
    label4.style.cssText += 'background-color: rgba(0, 0, 0, .15);'
}

left.addEventListener("click", () => {
    if (carouselCounter == 1) {
        // significa que vou para o 4º
        carouselCounter = 4;
        resetButtonsColors()
        label4.style.cssText += 'background-color: #fff'
        carousel.style.cssText += 'margin-left: -300vw;'
        radio4.checked = true;
    } else if (carouselCounter == 2) {
        // significa que vou para o 1º
        carouselCounter = 1;
        resetButtonsColors()
        label1.style.cssText += 'background-color: #fff'
        carousel.style.cssText += 'margin-left: 0vw;'
        radio1.checked = true;
    } else if (carouselCounter == 3) {
        // significa que vou para o 2º
        carouselCounter = 2;
        resetButtonsColors()
        label2.style.cssText += 'background-color: #fff'
        carousel.style.cssText += 'margin-left: -100vw;'
        radio2.checked = true;
    } else if (carouselCounter == 4) {
        // significa que vou para o 3º
        carouselCounter = 3;
        resetButtonsColors()
        label3.style.cssText += 'background-color: #fff'
        carousel.style.cssText += 'margin-left: -200vw;'
        radio3.checked = true;
    }
})

right.addEventListener("click", () => {
    if (carouselCounter == 1) {
        // significa que vou para o 2º
        carouselCounter = 2;
        resetButtonsColors()
        label2.style.cssText += 'background-color: #fff'
        carousel.style.cssText += 'margin-left: -100vw;'
        radio2.checked = true;

    } else if (carouselCounter == 2) {
        // significa que vou para o 3º
        carouselCounter = 3;
        resetButtonsColors()
        label3.style.cssText += 'background-color: #fff'
        carousel.style.cssText += 'margin-left: -200vw;'
        radio3.checked = true;
    } else if (carouselCounter == 3) {
        // significa que vou para o 4º
        carouselCounter = 4;
        resetButtonsColors()
        label4.style.cssText += 'background-color: #fff'
        carousel.style.cssText += 'margin-left: -300vw;'
        radio4.checked = true;
    } else if (carouselCounter == 4) {
        // significa que vou para o 1º
        carouselCounter = 1;
        resetButtonsColors()
        label1.style.cssText += 'background-color: #fff'
        carousel.style.cssText += 'margin-left: 0vw;'
        radio1.checked = true;
    }
})

radio1.addEventListener("change", () => {
    if (radio1.checked) {
        resetButtonsColors()
        carouselCounter = 1;
        label1.style.cssText += 'background-color: #fff'
        carousel.style.cssText += 'margin-left: 0vw;'
    }
})

radio2.addEventListener("change", () => {
    if (radio2.checked) {
        resetButtonsColors()
        carouselCounter = 2;
        label2.style.cssText += 'background-color: #fff'
        carousel.style.cssText += 'margin-left: -100vw;'
    }
})

radio3.addEventListener("change", () => {
    if (radio3.checked) {
        resetButtonsColors()
        carouselCounter = 3;
        label3.style.cssText += 'background-color: #fff'
        carousel.style.cssText += 'margin-left: -200vw;'
    }
})

radio4.addEventListener("change", () => {
    if (radio4.checked) {
        resetButtonsColors()
        carouselCounter = 4;
        label4.style.cssText += 'background-color: #fff'
        carousel.style.cssText += 'margin-left: -300vw;'
    }
})



    setInterval( function() {
        if(carouselCounter == 1){
            resetButtonsColors()
            carouselCounter = 2
            label2.style.cssText += 'background-color: #fff'
            carousel.style.cssText += 'margin-left: -100vw;'
            radio2.checked = true;
        }else if(carouselCounter == 2){
            resetButtonsColors()
            carouselCounter = 3;
            label3.style.cssText += 'background-color: #fff'
            carousel.style.cssText += 'margin-left: -200vw;'
            radio3.checked = true;
        }else if(carouselCounter == 3){
            resetButtonsColors()
            carouselCounter = 4
            label4.style.cssText += 'background-color: #fff'
            carousel.style.cssText += 'margin-left: -300vw;'
            radio4.checked = true;
        }else if(carouselCounter == 4){
            resetButtonsColors()
            carouselCounter = 1
            label1.style.cssText += 'background-color: #fff'
            carousel.style.cssText += 'margin-left: 0vw;'
            radio1.checked = true;
        }
    }, 10000 )
     


