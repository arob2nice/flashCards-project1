let decks = JSON.parse(localStorage.getItem('decks')) || [];
    document.getElementById('saveDeckBtn').addEventListener('click', function () {
      const deckName = document.getElementById('deckName').value.trim();
      if (!deckName) {
        alert('Please enter a deck name.');
        return;
      }
      const cards = [];
      document.querySelectorAll('.question').forEach((questionInput, index) => {
        const answerInput = document.querySelectorAll('.answer')[index];
        const questionText = questionInput.value.trim();
        const answerText = answerInput.value.trim();
        if (questionText && answerText) {
          cards.push({ question: questionText, answer: answerText });
        }
      });
      if (cards.length === 0) {
        alert('Please add at least one card.');
        return;
      }
      decks.push({ name: deckName, cards });
      localStorage.setItem('decks', JSON.stringify(decks));
      renderDecks();
      clearModal();
    });
    function clearModal() {
      document.getElementById('deckName').value = '';
      document.getElementById('cards-container').innerHTML = `
        <div class="card mb-3">
          <div class="card-body">
            <label class="form-label">Question</label>
            <input type="text" class="form-control question" placeholder="Enter question">
            <label class="form-label">Answer</label>
            <input type="text" class="form-control answer" placeholder="Enter answer">
          </div>
        </div>`;
      document.querySelector('.btn-close').click();
    }
    document.getElementById('add-card-btn').addEventListener('click', function () {
      const cardsContainer = document.getElementById('cards-container');
      const newCard = document.createElement('div');
      newCard.className = 'card mb-3';
      newCard.innerHTML = `
        <div class="card-body">
          <label class="form-label">Question</label>
          <input type="text" class="form-control question" placeholder="Enter question">
          <label class="form-label">Answer</label>
          <input type="text" class="form-control answer" placeholder="Enter answer">
        </div>`;
      cardsContainer.appendChild(newCard);
    });
    function renderDecks() {
      const deckContainer = document.getElementById('deck-container');
      deckContainer.innerHTML = '';
      decks.forEach((deck, index) => {
        const deckElement = document.createElement('div');
        deckElement.className = 'deck-item';
        deckElement.textContent = deck.name;
        deckElement.dataset.index = index;
        deckElement.addEventListener('click', function () {
          window.location.href = `/Users/tanyapunater/Desktop/GWU/myrepos/flashCards-project1/study.html?deckIndex=${index}`;
        });
        deckContainer.appendChild(deckElement);
      });
      document.getElementById('no-deck').style.display = decks.length > 0 ? 'none' : 'block';
    }
    renderDecks();

        document.addEventListener('DOMContentLoaded', function() {
          const userInfo = JSON.parse(localStorage.getItem('userInfo'));
          if (userInfo && userInfo.username) {
            document.querySelector('.Name').textContent = `${userInfo.username}'s Decks`;
          }
        });
