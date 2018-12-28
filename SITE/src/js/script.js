let reviews = document.getElementsByClassName('people-review__text'),
		peoples = document.getElementsByClassName('people-person-text'),
	arrowLeft = document.getElementsByClassName('arrows__left')[0],
	arrowRight = document.getElementsByClassName('arrows__right')[0];

console.log(reviews);		

class Slider {

	constructor(contImages){
		this.maxSlides = contImages.length - 1;
		this.contImages = contImages;
		this.currentSlide = 0;
		this.preparingSlides();
	}


	slideRight() {
		if(this.currentSlide < this.maxSlides){
			this.hideSlides();
			this.currentSlide++;
			this.showSlides();
		}
		else if(this.currentSlide === this.maxSlides){
			this.hideSlides();
			this.currentSlide = 0;
			this.showSlides();
		}
	}

	slideLeft() {
		if(this.currentSlide > 0){
			this.hideSlides();
			this.currentSlide--;
			this.showSlides();
		}
		else if(this.currentSlide === 0){
			this.hideSlides();
			this.currentSlide = this.maxSlides;
			this.showSlides();
		}
	}

	preparingSlides() {
		for(let i=1; i < this.maxSlides + 1; i++ ){
			this.contImages[i].style.display = 'none';
		}
	}

	showSlides() {
		this.contImages[this.currentSlide].style.display = 'block';
	}

	hideSlides() {
		this.contImages[this.currentSlide].style.display = 'none';
	}

};

const slide = new Slider(reviews),
			people = new Slider(peoples);

arrowRight.addEventListener('click', () =>{	
	slide.slideRight();
	people.slideRight();
});

arrowLeft.addEventListener('click', () =>{	
	slide.slideLeft();
	people.slideLeft();
});

