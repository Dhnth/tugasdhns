let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Tentukan batas maksimum pergerakan
    let maxScroll = 1000; // Sesuaikan dengan panjang halaman Anda
    if (value > maxScroll) value = maxScroll;

    // Terapkan nilai dengan batasan
    text.style.marginTop = Math.min(value * 2.5, 1100) + 'px'; // Maksimum 500px
    leaf.style.top = Math.max(value * -1.5, -400) + 'px'; // Minimum -200px
    leaf.style.left = Math.min(value * 1.5, 500) + 'px'; // Maksimum 300px
    hill5.style.left = Math.min(value * 1.5, 900) + 'px'; // Maksimum 300px
    hill4.style.left = Math.max(value * -1.5, -1000) + 'px'; // Minimum -300px
    hill1.style.top = Math.min(value * 1, 400) + 'px'; // Maksimum 200px
});
