const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

const setCard = () => {
  const card = document.getElementById(idInput.value);
  console.log(card);
  card.style.color = colorInput.value; 
}

const reset = () => {
    const diamonds = document.getElementById("diamonds")
    const hearts = document.getElementById("hearts")
    const spades = document.getElementById("spades")
    const clubs = document.getElementById("clubs")

    diamonds.style.color = null;
    hearts.style.color = null;
    spades.style.color = null;
    clubs.style.color = null;
}