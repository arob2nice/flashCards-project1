flashcard.addEventListener("click", () => {
    isShowingAnswer = !isShowingAnswer;
    updateFlashcard();
});

// Show the previous card
prevButton.addEventListener("click", () => {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        isShowingAnswer = false;
        updateFlashcard();
    }
});

// Show the next card
nextButton.addEventListener("click", () => {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        isShowingAnswer = false;
        updateFlashcard();
    }
});