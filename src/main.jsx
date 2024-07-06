import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

// Create a particle element
function createParticle(x, y) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 1000); // Remove particle after 1 second
}
// Add mouse move event listener
document.addEventListener('mousemove', (event) => {
  createParticle(event.pageX, event.pageY);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
