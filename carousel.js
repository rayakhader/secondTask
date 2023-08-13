class Carousel {
    constructor(imgInfo, DomElmld) {
        this.imgInfo = imgInfo;
        this.domElement = DomElmld;
        this.rev = 0;
        this.images = imgInfo.map(info => info.src);
        this.housesheader = imgInfo.map(info => info.title);
        this.housesDescription = imgInfo.map(info => info.desc);
        this.firstReview(this.rev);

        this.addEvents();
        setInterval(() => {
            this.rev = (this.rev + 1) % this.images.length;
            this.onclick(this.rev);
        }, 3000);
    }

    previousReview() {
        this.rev = (this.rev - 1 + this.images.length) % this.images.length;
        this.onclick(this.rev);
    }

    nextReview() {
        this.rev = (this.rev + 1) % this.images.length;
        this.onclick(this.rev);
    }

    firstReview(review) {
        this.domElement.getElementsByClassName('house')[review].style.display = 'block';
        this.domElement.getElementsByClassName('carousel-btn')[review].style.backgroundColor = 'white';
    }

    onclick(review) {
        this.domElement.querySelector('.img').src = this.images[review];
        this.domElement.querySelector('.house-description h1').innerText = this.housesheader[review];
        this.domElement.querySelector('.house-description p').innerText = this.housesDescription[review];

        for (let i = 0; i < this.images.length; i++) {
            this.domElement.getElementsByClassName('carousel-btn')[i].style.backgroundColor = 'grey';
        }
        this.domElement.getElementsByClassName('carousel-btn')[review].style.backgroundColor = 'white';
    }

    addEvents() {
        for (let i = 0; i < this.images.length; i++) {
            this.domElement.getElementsByClassName('carousel-btn')[i].addEventListener('click', () => {
                this.onclick(i);
                this.rev = i;
            });
        }
    }
}

const imgInfo = [
    { src: "images/house-one.gif", desc: "This is the first home.", title: "House One" },
    { src: "images/house-two.gif", desc: "This is the second home.", title: "House Two" },
    { src: "images/house-three.gif", desc: "This is the third home.", title: "House Three" },
    { src: "images/house-four.gif", desc: "This is the fourth home.", title: "House Four" },
    { src: "images/house-five.gif", desc: "This is the fifth home.", title: "House Five" },
    { src: "images/house-six.gif", desc: "This is the sixth home.", title: "House Six" },
    { src: "images/house-seven.gif", desc: "This is the seventh home.", title: "House Seven" },
    { src: "images/house-eight.gif", desc: "This is the eighth home.", title: "House Eight" },
    { src: "images/house-nine.gif", desc: "This is the ninth home.", title: "House Nine" }
];

const carousel = new Carousel(imgInfo, document);
