import './style.css'


const cards = document.querySelectorAll(".projectCard");

cards.forEach(card => {

  const cardBody = card.querySelector(".cardID");

  card.addEventListener('mouseenter', function(){
    card.classList.add("image-full"); 
    if (cardBody) {
      cardBody.classList.remove("hidden");
    }
  });

  card.addEventListener('mouseleave', function(){
    card.classList.remove("image-full");
    if (cardBody) {
      cardBody.classList.add("hidden");
    }
  });
});