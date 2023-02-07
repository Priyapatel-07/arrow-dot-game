// var bird = document.getElementById('bird');
// var moveLink = document.getElementById('move-link');
// var position = 140;

// //bird.style.position = 'relative';

// moveLink.onclick = function() {
//     //for(var i=0;i<10;i++){
//     position += 20;
//     bird.style.right = position + 'px';
//     // if(i==10){
//     //     break;
//     // }
//    // }
// }



// const bird = document.getElementById("bird");
// const dot = document.querySelector(".dot");
// const hitButton = document.getElementById("move-link");

// hitButton.addEventListener("click", function() {
//   // Set the distance for the bird to travel
//   const distance = dot.getBoundingClientRect().left - bird.getBoundingClientRect().right;

//   // Move the bird towards the dot
//   bird.style.transition = "transform 1s";
//   bird.style.transform = `translateX(${distance}px)`;
//   setTimeout(() => {
//     // Change the color of the dot
//     dot.style.backgroundColor = "green";
//   }, 700);
// });

const bird = document.getElementById("bird");
const dot = document.querySelector(".dot");
const hitButton = document.getElementById("move-link");

hitButton.addEventListener("click", function() {
  // Set the distance for the bird to travel
  const distance = dot.getBoundingClientRect().left - bird.getBoundingClientRect().right+180;
  // Move the bird towards the dot
  bird.style.transition = "transform 1s";
  bird.style.transform = `translateX(${distance}px)`;
  setTimeout(() => {
    // Change the color of the dot
    dot.style.backgroundColor = "green";
  }, 900);
});

