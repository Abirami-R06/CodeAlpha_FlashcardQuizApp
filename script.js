let flashcards = [
    {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language"
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets"
    },
    {
        question: "What does JS stand for?",
        answer: "JavaScript"
    }
];

let currentCard = 0;

function displayCard() {

    if (flashcards.length === 0) {
        document.getElementById("question").innerText =
            "No flashcards available";

        document.getElementById("answer").innerText = "";

        document.getElementById("cardNumber").innerText = "0 / 0";

        return;
    }

    document.getElementById("question").innerText =
        flashcards[currentCard].question;

    document.getElementById("answer").innerText =
        flashcards[currentCard].answer;

    document.getElementById("answer").style.display = "none";

    document.getElementById("cardNumber").innerText =
        `${currentCard + 1} / ${flashcards.length}`;
}

function showAnswer() {

    let answer = document.getElementById("answer");

    if (answer.style.display === "none") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}

function nextCard() {

    if (flashcards.length === 0) return;

    currentCard++;

    if (currentCard >= flashcards.length) {
        currentCard = 0;
    }

    displayCard();
}

function previousCard() {

    if (flashcards.length === 0) return;

    currentCard--;

    if (currentCard < 0) {
        currentCard = flashcards.length - 1;
    }

    displayCard();
}

function addCard() {

    let question = document.getElementById("questionInput").value.trim();
    let answer = document.getElementById("answerInput").value.trim();

    if (question === "" || answer === "") {
        alert("Please enter both question and answer.");
        return;
    }

    flashcards.push({
        question: question,
        answer: answer
    });

    currentCard = flashcards.length - 1;

    clearInputs();
    displayCard();

    alert("Flashcard added successfully!");
}

function editCard() {

    if (flashcards.length === 0) return;

    let question = document.getElementById("questionInput").value.trim();
    let answer = document.getElementById("answerInput").value.trim();

    if (question === "" || answer === "") {
        alert("Enter the new question and answer.");
        return;
    }

    flashcards[currentCard] = {
        question: question,
        answer: answer
    };

    clearInputs();
    displayCard();

    alert("Flashcard updated successfully!");
}

function deleteCard() {

    if (flashcards.length === 0) return;

    let confirmDelete = confirm(
        "Are you sure you want to delete this flashcard?"
    );

    if (!confirmDelete) return;

    flashcards.splice(currentCard, 1);

    if (currentCard >= flashcards.length) {
        currentCard = flashcards.length - 1;
    }

    if (currentCard < 0) {
        currentCard = 0;
    }

    displayCard();

    alert("Flashcard deleted successfully!");
}

function clearInputs() {

    document.getElementById("questionInput").value = "";
    document.getElementById("answerInput").value = "";
}

displayCard();
