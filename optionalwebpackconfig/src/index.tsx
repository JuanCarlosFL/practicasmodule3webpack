import logoImg from "./content/logo_2.png";
import React from 'react';
import ReactDOM from 'react-dom';
import { HelloComponent } from "./components/helloComponent";

const img = document.createElement('img');

img.src=logoImg;
img.alt = 'logo Lemoncode';

document.getElementById('imgContainer').appendChild(img);

ReactDOM.render(
    <div>
        <HelloComponent />
    </div>,
    document.getElementById('root')
)

console.log(`Mi Api base: ${process.env.API_BASE}`);