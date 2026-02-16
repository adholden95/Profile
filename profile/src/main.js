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

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
    return;
  }
}

const clearBtn = document.getElementById("clear"); 
const form = document.getElementsByTagName("form")[0];

clearBtn.addEventListener("click", function (){
  form.reset();
  return;
})