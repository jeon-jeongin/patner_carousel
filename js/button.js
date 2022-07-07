const items = document.querySelector(".gallery_items");

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIdx = 0;
let itemWidth = 280;
let itemMargin = 20;

items.style.width = (itemWidth + itemMargin) * 10 - itemMargin + 'px';

function moveItem(num) {
    items.style.left = -num * 300 + 'px';
    currentIdx = num;
}

prevButton.addEventListener('click', function () {
    if (window.innerWidth = 2560) {
        if (currentIdx > 2) {
            moveItem(currentIdx - 1);
        } else {
            moveItem(0)
        }
    } else if (window.innerWidth = 1440) {
        if (currentIdx > 5) {
            moveItem(currentIdx - 1);
        } else {
            moveItem(0)
        }
    } else if (window.innerWidth = 1280) {
        if (currentIdx > 6) {
            moveItem(currentIdx - 1);
        } else {
            moveItem(0)
        }
    }
});

nextButton.addEventListener('click', function () {
    if (window.innerWidth = 2560) {
        if (currentIdx < 2) {
            moveItem(currentIdx + 1);
        } else {
            moveItem(0)
        }
    } else if (window.innerWidth = 1440) {
        if (currentIdx < 5) {
            moveItem(currentIdx + 1);
        } else {
            moveItem(0)
        }
    } else if (window.innerWidth = 1280) {
        if (currentIdx < 6) {
            moveItem(currentIdx + 1);
        } else {
            moveItem(0)
        }
    }
});

console.log(window.innerWidth)