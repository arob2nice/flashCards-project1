// prompt user to create deck + add cards; stored in local storage

const createNewDeckBtn = document.querySelector('#new-deck-btn'); // new deck button
const noDecksMessage = document.querySelector('#no-deck'); // no deck added message

createNewDeckBtn.addEventListener('click', function (event) { // start event for adding deck + cards
    event.preventDefault();

// create array for deck names
let deckNames = JSON.parse(localStorage.getItem('deckNames')) || [];

// create deck by adding name
let deckName = prompt("Enter the name of your study deck");
    if (!deckName) {
        alert("Deck name cannot be empty.");
        return;
    }
    // add deck into the deckNames array
    deckNames.push(deckName);

    // create array for card questions and answers
    let cardQuestions = [];
    let cardAnswers = [];
    
    let addmore = true;
    while (addmore) {
        // create cardQuestion and cardAnswer variables
        let cardQuestion = prompt("What is the card's question?");
        let cardAnswer = prompt("What is the card's answer?");

        if (!cardQuestion || !cardAnswer) {
            alert("You must add a card question or answer.");
            continue;
        }

        // push card question and answer into the cardQuestions and cardAnswers arrays
        cardQuestions.push(cardQuestion);
        cardAnswers.push(cardAnswer);

        addmore = confirm("Would you like to add another card?");
    }

    // studyDeck object
    let studyDeck = {
        deckName: deckName,
        cardQuestions: cardQuestions,
        cardAnswers: cardAnswers
    };

    localStorage.setItem(deckName, JSON.stringify(studyDeck));
    localStorage.setItem('deckNames', JSON.stringify(deckNames));

    addDeckContainer(deckName);
    noDecksMessage.style.display = 'none';
});

// func to create a rectangle for the deck
function addDeckContainer(deckName) {
    const deckContainer = document.querySelector('#deck-container');

    // create new div element for the deck
    const container = document.createElement('div');
    container.classList.add('deck-container');
    
    // add deck name as content
    container.textContent = deckName;

    // add square to the container
    deckContainer.appendChild(container);
}

// how to make deck stay on page after refresh: