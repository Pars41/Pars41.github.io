const cards = document.querySelectorAll(".card");

let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

let prog = document.querySelector(".bar span");

function flipCard({ target: clickedCard }) {
  if (cardOne !== clickedCard && !disableDeck) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector(".back-view img").src,
      cardTwoImg = cardTwo.querySelector(".back-view img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    matched++;
    if (matched == 8) {
      setTimeout(() => {
  prog.classList.remove("progress");

        document.querySelector(".wrapper").classList.add("rotate", "zoom");
        return shuffleCard();
      }, 1000);
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne.classList.add("rotate");
    cardTwo.classList.add("rotate");
    document.querySelector(".wrapper").classList.add("light");
    cardOne = cardTwo = "";
    return (disableDeck = false);
  }
  document.querySelector(".wrapper").classList.remove("light");
  setTimeout(() => {
    document.querySelector(".wrapper").classList.add("wraperro");

    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    document.querySelector(".wrapper").classList.remove("wraperro")
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
}

function shuffleCard() {
  matched = 0;
  disableDeck = false;
  cardOne = cardTwo = "";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
  cards.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".back-view img");
    imgTag.src = `img/${arr[i]}.jpg`;
    card.addEventListener("click", flipCard);
  });
}

function progress() {
  prog.classList.add("progress");
  setTimeout(() => {
  prog.classList.remove("progress");
    shuffleCard();
    
    document.querySelector(".wrapper").classList.add("rotate", "zoom");
    setTimeout(()=>{
    location.reload()

    },4000)
    
}, 50000);

}

shuffleCard();

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
