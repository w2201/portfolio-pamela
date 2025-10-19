// Piccolo esempio JS (contatore clic)
const btn = document.getElementById('counter');
let count = 0;
btn.addEventListener('click', () => {
  count++;
  btn.textContent = `${count} clic!`;
});
console.log('Portfolio di Pamela pronto!');
