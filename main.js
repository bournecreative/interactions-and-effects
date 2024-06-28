import './style.css'
import { parallax } from './src/components/parallax/parallax'

document.querySelector('#app').innerHTML = `
  <div>
    <div class='parallax'>
      <span class='parallax-text'><span class='parallax-text-first'>par</span><span class='parallax-text-mid'>al</span><span class='parallax-text-last'>lax</span></span>
    </div>
    <div style="height: 100vh"></div>
    <div style="height: 100vh"></div>
    <div style="height: 100vh">END</div>
  </div>
`

parallax.initParallax()
