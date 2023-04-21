const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.controller__dot')

const prevBtn = document.querySelector('.slide__prev')
const nextBtn = document.querySelector('.slide__next')

const slider = {
    currentIndex: 0,

    handleEvents: function() {
        nextBtn.onclick = () => {
            if (this.currentIndex != slides.length - 1) {
                this.currentIndex += 1
                this.renderCurrentSlide()
            } else {
                this.currentIndex = 0
                this.renderCurrentSlide()
            }
        }

        prevBtn.onclick = () => {
            if (this.currentIndex != 0) {
                this.currentIndex -= 1
                this.renderCurrentSlide()
            } else {
                this.currentIndex = slides.length - 1
                this.renderCurrentSlide()
            }
        }

        Array.from(dots).forEach((dot, index) => {
            dot.onclick = () => {
                this.currentIndex = index
                this.renderCurrentSlide()
            }
        })
    },

    renderCurrentSlide: function() {
        slides[this.currentIndex].classList.add('active')
        dots[this.currentIndex].classList.add('active')
        Array.from(slides).forEach((slide, index) => {
            if (slide.classList.contains('active') && index != this.currentIndex) {
                slide.classList.remove('active')
            }
        })

        Array.from(dots).forEach((dot, index) => {
            if (dot.classList.contains('active') && index != this.currentIndex) {
                dot.classList.remove('active')
            }
        })
    },

    loopSlide: function() {
        
        setInterval(() => {
            if (this.currentIndex != slides.length - 1) {
                this.currentIndex += 1
                this.renderCurrentSlide()
            } else {
                this.currentIndex = 0
                this.renderCurrentSlide()
            }
        }, 2000)
    },

    start: function() {
        this.renderCurrentSlide()
        this.handleEvents()
        this.loopSlide()
    },
}

slider.start()