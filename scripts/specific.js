// refer to question 2 before development starts for scope document
// get URL query string
function getQueryStringValue(key) {
  return decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        "^(?:.*[&\\?]" +
          encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
          "(?:\\=([^&]*))?)?.*$",
        "i"
      ),
      "$1"
    )
  );
}
// variable for the id
const id = getQueryStringValue("id");

url = "https://api.magicthegathering.io/v1/cards/" + id;

if (id === "") {
  console.log("its empty");
}

//fetching single card
async function fetchCard(id) {
  url = "https://api.magicthegathering.io/v1/cards/" + id;
  try {
    card = await fetch(url).then(res => res.json());
  } catch (err) {
    console.error(err);
  }

  return card;
}

// Checking if theres a query string

function checkQueryString() {
  try {
    let url = window.location.href;
    let query_str = url.substr(url.indexOf("?") + 1, url.length - 1);
    let r_params = query_str.split("&");
    let params = {};
    for (i in r_params) {
      param = r_params[i].split("=");
      params[param[0]] = param[1];
    }
    return params;
  } catch (err) {
    return err;
  }
}

//Running the list of cards
(async function() {
  // variable for the id
  let id = getQueryStringValue("id");

  // Checking if theres a query string
  checkQueryString();

  console.log("The ID of the card is", id);
  let card = await fetchCard(id);
  console.log(card);
  buildView(card);
})();

//function displaying the cards
function buildView(card) {
  if (card.card.imageUrl === undefined) {
    card.card.imageUrl = "https://via.placeholder.com/223x310";
  }

  let output = `<div class="container"
            <div class="row">
                <div class="col-sm-3" id="cardImage">
                    <img src="${card.card.imageUrl}" width="100%">
                </div>
                <div class="col-sm-9" id="cardDetails">
                    <h2>${card.card.name}</h2>
                    <div><b>About:  </b>${card.card.text}
                </div>
                <div><b>Rarity: </b>${card.card.rarity}</div>
                <div><b>Color: </b>${card.card.colors}</div>
            </div>
        </div>`;

  document.getElementById("cardImage").innerHTML = output;
}

/*
//Running the list of cards
(async function () {
    let cards = await fetchCard();
    buildView(cards);
}());
*/
