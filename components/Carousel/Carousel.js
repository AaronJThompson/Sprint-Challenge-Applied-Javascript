class Carousel {
    constructor(element) {
        this.carousel = element;

        this.images = element.querySelectorAll("img");
        this.images = Array.from(this.images);

        this.currentIndex = 0;

        this.leftButton = element.querySelector(".left-button");
        this.rightButton = element.querySelector(".right-button");

        this.leftButton.addEventListener("click", () => {
            this.carouselLeft();
        })

        this.rightButton.addEventListener("click", () => {
            this.carouselRight();
        })

        this.images[this.currentIndex].style.display = "block";
    }

    carouselLeft() {
        this.moveImage(-1);
    }

    carouselRight() {
        this.moveImage(1);
    }

    moveImage(amount) {
        let imageCount = this.images.length;
        let indexDelta = this.currentIndex + amount;
        let newIndex = indexDelta;
        if(indexDelta < 0){
            newIndex = imageCount + indexDelta;
        } else if(indexDelta > (imageCount - 1)){
            newIndex = indexDelta - imageCount;
        }
        
        this.animateMove(this.currentIndex, newIndex);

        this.currentIndex = newIndex;
    }

    animateMove(from, to){
        let carouselWidth = this.carousel.style.width;
        let fromImage = this.images[from];
        let toImage = this.images[to];
        toImage.style.display = "block";
        if(from < to){
            toImage.style.left = "100%";
            TweenMax.to(toImage, .5, {left: 0});
            TweenMax.to(fromImage, .5, {left: "-100%"});
            setTimeout(() => {
                fromImage.style.left = 0;
                fromImage.style.display = "none";
            })
        } else {
            toImage.style.left = "-100%";
            TweenMax.to(toImage, .5, {left: 0});
            TweenMax.to(fromImage, .5, {left: "100%"});
            setTimeout(() => {
                fromImage.style.left = 0;
                fromImage.style.display = "none";
            })
        }
    }
}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
