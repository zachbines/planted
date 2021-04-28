// small <h1></h1> feature
const heading = document.querySelector('.home-planted');

heading.addEventListener('mouseenter', function(event) {
    this.classList.add('mouse-shimmer');
})
heading.addEventListener('mouseleave', function() {
    this.classList.remove('mouse-shimmer');
})
  