let rev = 0;
var images= ['images/house-one.gif','images/house-two.gif','images/house-three.gif'
,'images/house-four.gif','images/house-five.gif','images/house-six.gif'
,'images/house-seven.gif','images/house-eight.gif','images/house-nine.gif']
var housesheader= ['House One' ,'House two' ,
'House three', 'House four','House five'
,'House six', 'House seven', 'House eight' ,'House nine'];
var housesDescription = ['This is the first home.','This is the second home.',
'This is the third home.','This is the fourth home.', 'This is the fifth home. '
,'This is the sixth home.','This is the seventh home.',
'This is the eighth home.','This is the ninth home.'];
firstReview(rev);

function previousReview() {
    rev = rev - 1;
   onclick(rev);
}

function nextReview() {
    rev = rev + 1;
    onclick(rev);
}
function firstReview(review) {
  document.getElementsByClassName('house')[review].style.display='block';
    document.getElementsByClassName('carousel-btn')[review].style.backgroundColor = 'white';

}

function onclick (review){
    if (review >= images.length) {
        review = 0;
        rev = 0;
    }
    if (review < 0) {
        review = images.length - 1;
        rev = images.length - 1;
    }
    document.getElementsByClassName('img')[0].src= images[review];
    document.querySelector('.house-description h1').innerText=housesheader[review];
    document.querySelector('.house-description p').innerText=housesDescription[review];

    for(let i= 0 ;i<images.length;i++) {
        document.getElementsByClassName('carousel-btn')[i].style.backgroundColor = 'grey';
    }
    document.getElementsByClassName('carousel-btn')[review].style.backgroundColor = 'white';
}
for (let i =0 ;i<images.length;i++) {
    document.getElementsByClassName('carousel-btn')[i].addEventListener('click', function () {
        onclick(i);
    });
}
setInterval(function (){
    ++rev;
    onclick(rev);
},3000);




