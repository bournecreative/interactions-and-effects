import './style.css'
import { parallax } from './src/components/parallax/parallax'

document.querySelector('#app').innerHTML = `
  <div>
    <div class='parallax'></div> 
  </div>
`

parallax.initParallax()
