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

        this.animationMoving = false;
    }

    carouselLeft() {
        if (!this.animationMoving)
            this.moveImage(-1);
    }

    carouselRight() {
        if (!this.animationMoving)
            this.moveImage(1);
    }

    moveImage(amount) {
        let imageCount = this.images.length;
        let indexDelta = this.currentIndex + amount;
        let newIndex = indexDelta;
        let dir = amount;
        if(indexDelta < 0){
            newIndex = imageCount + indexDelta;

        } else if(indexDelta > (imageCount - 1)){
            newIndex = indexDelta - imageCount;
        }
        
        this.animateMove(this.currentIndex, newIndex, dir);

        this.currentIndex = newIndex;
    }

    animateMove(from, to, dir){
        this.animationMoving = true;
        let carouselWidth = this.carousel.clientWidth;
        let fromImage = this.images[from];
        let toImage = this.images[to];
        toImage.style.display = "block";
        if(dir > 0){
            toImage.style.left = `${carouselWidth}px`;
            TweenMax.to(toImage, .5, {left: "0px"});
            TweenMax.to(fromImage, .5, {left: `${0-carouselWidth}px`});
            setTimeout(() => {
                fromImage.style.left = 0;
                fromImage.style.display = "none";
                this.animationMoving = false;
            }, 500);
        } else {
            toImage.style.left = `${0-carouselWidth}px`;
            TweenMax.to(toImage, .5, {left: "0px"});
            TweenMax.to(fromImage, .5, {left: `${carouselWidth}px`});
            setTimeout(() => {
                fromImage.style.left = 0;
                fromImage.style.display = "none";
                this.animationMoving = false;
            }, 500);
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
