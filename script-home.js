// small <h1></h1> feature
const heading = document.querySelector('.home-planted');

heading.addEventListener('mouseenter', function(event) {
    this.classList.add('mouse-shimmer');
})
heading.addEventListener('mouseleave', function() {
    this.classList.remove('mouse-shimmer');
})
  
// when the user drags their mouse over a photo in the gallery:
// the photo will increase in size by 25%,

const gallery = document.querySelectorAll('.gallery-img-container');

for (let picture of gallery) {
    picture.addEventListener('mouseover', function() {
        this.classList.add('hover-pic');
    })
    picture.addEventListener('mouseleave', function() {
        this.classList.remove('hover-pic');
    })
}