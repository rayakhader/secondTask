let rev = 0;
carousel(rev);

function previousReview() {
    rev = rev - 1;
    carousel(rev);
}

function nextReview() {
    rev = rev + 1;
    carousel(rev);
}

function carousel(review) {
    let carouselItem = document.getElementsByClassName("carousel-item");
    let carouselBtn = document.getElementsByClassName("carousel-btn");


    if (review >= carouselItem.length) {
        review = 0;
        rev = 0;
    }
    if (review < 0) {
        review = carouselItem.length - 1;
        rev = carouselItem.length - 1;
    }
    for (let i = 0; i < carouselItem.length; i++) {
        carouselItem[i].style.display = "none";
        carouselBtn[i].style.backgroundColor="grey";
    }
    carouselItem[review].style.display = "block";
    carouselBtn[review].style.backgroundColor="white";



}