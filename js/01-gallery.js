import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);


const galleryBox = qs(".gallery");
console.log(galleryBox);

//ADDING GALLERY

const images = galleryItems
    .map(
        item =>
            `<div class = "gallery__item">
            <a class = "gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview} "data-source="${item.original}" alt="${item.description}"/> 
            </a></div>`
    )
    .join('');

galleryBox.insertAdjacentHTML("afterbegin", images);
console.log(images);


const galleryImages = qsa(".gallery__image");
console.log("galleryImages");

//ADD GALLERY


galleryImages.forEach(item => {
    item.addEventListener("click", event => {
        event.preventDefault();

// CREATE MODAL WINDOW
        
        let modalWindow = basicLightbox.create(`<img src="${item.dataset.source}" alt="${item.alt}">`)
        modalWindow.show();
        
//ESC CLOSE

        if (modalWindow.visible() === true) {
            document.addEventListener("keydown", event => {
                if (event.key === "Escape") {
                    modalWindow.close();
                }
            })
        }
    })
})

