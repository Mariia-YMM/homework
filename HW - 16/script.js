class Slider {
    constructor(sliderEl) {
        this.sliderEl = sliderEl;
        this.slides = Array.from(sliderEl.getElementsByClassName('slide'));
        this.currentIndex = 0;
        this.showSlide(this.currentIndex);

        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.lastBtn = document.getElementById('lastBtn');
        this.firstBtn = document.getElementById('firstBtn');
        this.openBtn = document.getElementById('openBtn');
        this.addBtn = document.getElementById('addBtn');
        this.insertBtn = document.getElementById('insertBtn');
        this.removeLastBtn = document.getElementById('removeLastBtn');
        this.removeBtn = document.getElementById('removeBtn');

        this.prevBtn.addEventListener('click', this.prevSlide.bind(this));
        this.nextBtn.addEventListener('click', this.nextSlide.bind(this));
        this.lastBtn.addEventListener('click', this.lastSlide.bind(this));
        this.firstBtn.addEventListener('click', this.firstSlide.bind(this));
        this.openBtn.addEventListener('click', this.openSlideByIndex.bind(this));
        this.addBtn.addEventListener('click', this.addSlide.bind(this));
        this.insertBtn.addEventListener('click', this.insertSlide.bind(this));
        this.removeLastBtn.addEventListener('click', this.removeLastSlide.bind(this));
        this.removeBtn.addEventListener('click', this.removeSlide.bind(this));
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    lastSlide() {
        this.currentIndex = this.slides.length - 1;
        this.showSlide(this.currentIndex);
    }

    firstSlide() {
        this.currentIndex = 0;
        this.showSlide(this.currentIndex);
    }

    openSlideByIndex() {
        const index = Number(prompt('Enter the slide number:'));
        if (index >= 0 && index < this.slides.length) {
            this.currentIndex = index;
            this.showSlide(this.currentIndex);
        } else {
            alert('Incorrect slide number.');
        }
    }

    addSlide() {
        const title = prompt('Enter a title for the slide:');
        const description = prompt('Enter a description for the slide:');
        const newSlide = document.createElement('img');
        newSlide.className = 'slide';
        newSlide.src = '';
        newSlide.alt = '';
        this.sliderEl.appendChild(newSlide);
        this.slides.push(newSlide);
        this.currentIndex = this.slides.length - 1;
        this.showSlide(this.currentIndex);
    }

    insertSlide() {
        const index = Number(prompt('Enter the position to insert the slide:'));
        if (index >= 0 && index <= this.slides.length) {
            const title = prompt('Enter a title for the slide:');
            const description = prompt('Enter a description for the slide:');
            const newSlide = document.createElement('img');
            newSlide.className = 'slide';
            newSlide.src = '';
            newSlide.alt = '';
            this.slides.splice(index, 0, newSlide);
            this.sliderEl.insertBefore(newSlide, this.sliderEl.children[index]);
            this.currentIndex = index;
            this.showSlide(this.currentIndex);
        } else {
            alert('Incorrect slide insertion position.');
        }
    }

    removeLastSlide() {
        if (this.slides.length > 0) {
            this.sliderEl.removeChild(this.slides[this.slides.length - 1]);
            this.slides.pop();
            if (this.currentIndex >= this.slides.length) {
                this.currentIndex = this.slides.length - 1;
            }
            this.showSlide(this.currentIndex);
        } else {
            alert('There are no slides to delete.');
        }
    }

    removeSlide() {
        const index = Number(prompt('Enter the slide number to delete:'));
        if (index >= 0 && index < this.slides.length) {
            this.sliderEl.removeChild(this.slides[index]);
            this.slides.splice(index, 1);
            if (this.currentIndex >= this.slides.length) {
                this.currentIndex = this.slides.length - 1;
            }
            this.showSlide(this.currentIndex);
        } else {
            alert('Invalid slide number to delete.');
        }
    }
}

// Використання:

const sliderEl = document.querySelector('.slider');
const slider = new Slider(sliderEl);
