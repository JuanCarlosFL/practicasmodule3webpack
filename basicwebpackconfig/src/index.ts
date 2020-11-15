import logoImg from "./content/logo_2.png";

const img = document.createElement('img');

img.src=logoImg;
img.alt = 'logo Lemoncode';

document.getElementById('imgContainer').appendChild(img);