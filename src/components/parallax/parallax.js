import './parallax.scss'

export const parallax = {
    
    initParallax() {
        this.parallaxContainer = document.querySelector('.parallax')
        if (this.parallaxContainer) {
            window.addEventListener('scroll', this.parallaxMotion.bind(this))
        }
    },
    parallaxMotion() {
        const first = this.parallaxContainer.querySelector('.parallax-text-first')
        const mid = this.parallaxContainer.querySelector('.parallax-text-mid')
        const last = this.parallaxContainer.querySelector('.parallax-text-last ')
        const scrolled = window.scrollY
        const rate1 = scrolled * 0.5
        const rate2 = scrolled * 0.6
        const rate3 = scrolled * 0.8
        
        first.style.transform = `translate3d(0px,${rate1}px,0px)`
        mid.style.transform = `translate3d(0px,${rate2}px,0px)`
        last.style.transform = `translate3d(0px,${rate3}px,0px)`
        
    }
}
