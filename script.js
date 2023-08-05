const h4Element = document.getElementById('headline');
const text = h4Element.textContent;

let charIndex = 0;

function typeWriter() {
  if (charIndex < text.length) {
    h4Element.textContent = text.slice(0, charIndex + 1);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();