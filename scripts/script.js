// refer to question 1 before development starts for scope document
// connect to this api https://api.magicthegathering.io/v1/cards

//Fetching the API
async function fetchCards() {
  let cards = [];
  try {
    cards = await fetch("https://api.magicthegathering.io/v1/cards");
    const data = await cards.json();

    return data.cards;
  } catch (err) {
    console.log(err);
  }
  return cards;
}

//Running the list of cards
(async function() {
  let cards = await fetchCards();
  buildView(cards);
})();

//function displaying the cards
function buildView(cards) {
  let output = "";

  //checking if the images are valid
  cards.forEach(card => imageHandler(card));

  if (!cards.length) {
    output = "Ups! could not find any cards by that name.";
  } else {
    for (const card of cards) {
      output += `<div class="col-xs-10 col-sm-5 col-md-4">
                    <div class="card-container">
                        <h4>${card.name}</h4>
                        <img src="${card.imageUrl}" width="100%">
                        <a href="card-specific.html?id=${card.id}" class="btn btn-success">View More</a>
                    </div>
                </div>`;
    }
  }
  document.getElementById("cards").innerHTML = output;
}

//code runnning through the onclick function
document.getElementById("searchButton").onclick = function() {
  onClickFunction();
};

//Checking if the card search is valid or has content
function filterCard(card, textContent) {
  if (card.name.toLowerCase().includes(textContent)) {
    return true;
  } else {
    return false;
  }
}

//Search button function
async function onClickFunction() {
  let textContent = document.getElementById("search").value;
  textContent = textContent.toLowerCase();
  console.log(textContent);

  document.getElementById("cards").innerHTML = "";

  let cards = await fetchCards();

  cards = cards.filter(card => filterCard(card, textContent));

  buildView(cards);
}

//image error handler
function imageHandler(card) {
  if (card.imageUrl === undefined) {
    card.imageUrl = "https://via.placeholder.com/223x310";
  }
}
