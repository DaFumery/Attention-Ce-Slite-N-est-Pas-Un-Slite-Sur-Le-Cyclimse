"use strict";

//////////////////////////////////////
//////////////////////////////////////
//// DOM ELEMENTS
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const auteurText = document.getElementById("auteur");
const twitterBtn = document.getElementById("twitter-btn");
const newQuoteBtn = document.getElementById("new-quote-btn");
const loader = document.getElementById("loader");

//////////////////////////////////////
//////////////////////////////////////
//// VARIBLES

let apiQuotes = [];

//////////////////////////////////////
//////////////////////////////////////
//// LOADER

// Montrer le loader (Déclaration de function)
// function loading() {
//   loader.hidden = false;
//   quoteContainer.hidden = true;
// }

// Function fléchée
let loading = () => (loader.hidden = false);
quoteContainer.hidden = true;

// Cacher le loader (Déclaration de function)
// function complete() {
//   loader.hidden = true;
//   quoteContainer.hidden = false;
// }

// Function fléchée
let complete = () => (loader.hidden = true);
quoteContainer.hidden = false;

//////////////////////////////////////
//////////////////////////////////////
//// FETCHING DATA (LOCAL)

// Monter la nouvelle citation
function newQuote() {
  // Sélectionne une citation aléatoire du tableau apiQuotes
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  // Vérifie si le champ "Auteur" est vide --> Remplace par "Inconnu"
  if (!quote.author) {
    auteurText.textContent = "Inconnu";
  } else {
    auteurText.textContent = quote.author;
  }

  // Vérifie la longueur de la citation
  if (quote.text.length > 50) {
    quoteText.classList.add("trop-long-mec");
  } else {
    quoteText.classList.remove("trop-long-mec");
  }

  // Affiche la citation et cache le loader
  quoteText.textContent = quote.text;
  complete();
}

newQuote();

//////////////////////////////////////
//////////////////////////////////////
//// TWITTER BUTTON

function tweetQuote() {
  // Post citation
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${auteurText.textContent}`;
  // Ouvre une nouvelle fenêtre
  window.open(twitterUrl, "_blank");
}

//////////////////////////////////////
//////////////////////////////////////
//// EVENT LISTENERS
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

newQuotes();

//////////////////////////////////////
//////////////////////////////////////
//// FETCHING DATA (API)
/*
// Monter la nouvelle citation
function newQuote() {
  loading();
  // Sélectionne une citation aléatoire du tableau apiQuotes
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Vérifie si le champ "Auteur" est vide --> Remplace par "Inconnu"
  if (!quote.author) {
    auteurText.textContent = "Inconnu";
  } else {
    auteurText.textContent = quote.author;
  }

  // Vérifie la longueur de la citation
  if (quote.text.length > 50) {
    quoteText.classList.add("trop-long-mec");
  } else {
    quoteText.classList.remove("trop-long-mec");
  }

  // Affiche la citation et cache le loader
  quoteText.textContent = quote.text;
  complete();
}
// Recevoir les citations de l'API
async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";

  // Essaye de récupérer les datas (sinon renvoie error)
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log("Impossible d'accéder à l'API");
  }
}
*/
