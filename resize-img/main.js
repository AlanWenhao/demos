const img = document.querySelector('img');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 300;

img.onload = () => {
    ctx.drawImage(img ,0, 0);
}

