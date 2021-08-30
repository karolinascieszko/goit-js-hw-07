import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

//ADDING GALLERY ITEMS

const galleryBox = qs(".gallery");
console.log(galleryBox);


const images = galleryItems
    
    .map(
        item =>
            `<a class = "gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}"  alt="${item.description}" title="${item.description}"/> 
            </a>`
    )
    .join('');

galleryBox.insertAdjacentHTML("afterbegin", images);
console.log(images);

//ADDITIONAL OPTIONS

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
console.log(lightbox);


