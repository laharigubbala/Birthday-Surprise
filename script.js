/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageNumber) {

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage =
        document.getElementById("page" + pageNumber);

    if (selectedPage) {

        selectedPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* =====================================================
   PAGE 2 - MEMORY QUIZ
===================================================== */

function checkAnswer(questionNumber, isCorrect) {

    const errorMessage =
        document.getElementById("error" + questionNumber);

    if (isCorrect) {

        errorMessage.textContent = "";

        if (questionNumber === 1) {

            document.getElementById("question1")
                .classList.add("hidden");

            document.getElementById("question2")
                .classList.remove("hidden");
        }

        else if (questionNumber === 2) {

            document.getElementById("question2")
                .classList.add("hidden");

            document.getElementById("question3")
                .classList.remove("hidden");
        }

        else if (questionNumber === 3) {

            document.getElementById("question3")
                .classList.add("hidden");

            document.getElementById("quizComplete")
                .classList.remove("hidden");
        }

    } else {

        errorMessage.textContent =
            "Oops! 😏 That's not right. Try again, Kannaa ❤️";
    }
}


/* =====================================================
   PAGE 3 - SPECIAL DATE
===================================================== */

function revealDate() {

    const button =
        document.getElementById("revealDateBtn");

    const reveal =
        document.getElementById("specialReveal");

    button.style.display = "none";

    reveal.classList.remove("hidden");
}


/* =====================================================
   PAGE 4 - GAME MENU
===================================================== */

function openGame(gameId) {

    document.getElementById("gameMenu")
        .classList.add("hidden");

    document.querySelectorAll(".game")
        .forEach(function(game) {
            game.classList.add("hidden");
        });

    document.getElementById(gameId)
        .classList.remove("hidden");
}


/* =====================================================
   GAME 1 - HIDDEN HEARTS
===================================================== */

/*
   There are 9 hearts.
   Exactly 3 are correct.

   Correct positions:
   1st heart
   5th heart
   8th heart
*/

const correctHeartPositions = [
    0,
    4,
    7
];

let heartsFound = 0;
let heartAttempts = 0;


function pickHeart(position) {

    if (heartAttempts >= 5) {
        return;
    }

    const buttons =
        document.querySelectorAll(
            "#hiddenHearts .heart-grid button"
        );

    const selectedButton =
        buttons[position];


    if (
        selectedButton.classList.contains("found") ||
        selectedButton.classList.contains("wrong-heart")
    ) {
        return;
    }


    heartAttempts++;


    document.getElementById("attemptCount")
        .textContent =
        "Attempts: " +
        heartAttempts +
        " / 5";


    /* CORRECT HEART */

    if (correctHeartPositions.includes(position)) {

        heartsFound++;

        selectedButton.classList.add("found");

        selectedButton.textContent =
            "❤️";


        document.getElementById("heartCount")
            .textContent =
            "Correct hearts: " +
            heartsFound +
            " / 3";


        document.getElementById("heartMessage")
            .textContent =
            "Yesss! You found one! 🥹❤️";


        if (heartsFound === 3) {

            document.getElementById("heartComplete")
                .classList.remove("hidden");

            document.getElementById("heartMessage")
                .textContent =
                "You found all 3! 👀❤️";

            disableHeartButtons();
        }

    }


    /* WRONG HEART */

    else {

        selectedButton.classList.add(
            "wrong-heart"
        );

        selectedButton.textContent =
            "💔";


        document.getElementById("heartMessage")
            .textContent =
            "Oops! That's not one... 😂 Try carefully!";
    }


    /* FIVE ATTEMPTS FINISHED */

    if (
        heartAttempts === 5 &&
        heartsFound < 3
    ) {

        document.getElementById("heartRetry")
            .classList.remove("hidden");

        document.getElementById("heartMessage")
            .textContent =
            "5 attempts over! 😭❤️";

    }

}


function disableHeartButtons() {

    const buttons =
        document.querySelectorAll(
            "#hiddenHearts .heart-grid button"
        );

    buttons.forEach(function(button) {
        button.disabled = true;
    });
}


function resetHearts() {

    heartsFound = 0;

    heartAttempts = 0;


    const buttons =
        document.querySelectorAll(
            "#hiddenHearts .heart-grid button"
        );


    buttons.forEach(function(button) {

        button.classList.remove("found");

        button.classList.remove(
            "wrong-heart"
        );

        button.textContent = "♡";

        button.disabled = false;

    });


    document.getElementById("attemptCount")
        .textContent =
        "Attempts: 0 / 5";


    document.getElementById("heartCount")
        .textContent =
        "Correct hearts: 0 / 3";


    document.getElementById("heartMessage")
        .textContent = "";


    document.getElementById("heartComplete")
        .classList.add("hidden");


    document.getElementById("heartRetry")
        .classList.add("hidden");
}


/* =====================================================
   GAME 2 - KNOW ME
===================================================== */


/* QUESTION 1 */

function checkWordsTyped() {

    const input =
        document.getElementById("wordAnswer");

    const answer =
        input.value.toLowerCase().trim();

    const error =
        document.getElementById("wordError");


    if (!answer) {

        error.textContent =
            "Type your answer first 😏❤️";

        return;
    }


    const validWords = [

        "manchidhi",

        "nii istam",

        "nee istam",

        "leave it",

        "hmm",

        "bye",

        "love you"

    ];


    const wordsFound =
        validWords.filter(function(word) {

            return answer.includes(word);

        });


    if (wordsFound.length >= 3) {

        error.textContent = "";


        document.getElementById("knowQ1")
            .classList.add("hidden");


        document.getElementById("knowQ2")
            .classList.remove("hidden");

    }

    else {

        error.textContent =
            "Hmm... remember properly 😂❤️ Try again!";

    }

}


/* QUESTION 2 */

function checkChocolateTyped() {

    const input =
        document.getElementById("chocolateAnswer");

    const answer =
        input.value.toLowerCase().trim();

    const error =
        document.getElementById("chocolateError");


    if (
        answer.includes("kitkat") ||
        answer.includes("kit kat")
    ) {

        error.textContent = "";


        document.getElementById("knowQ2")
            .classList.add("hidden");


        document.getElementById("knowQ3")
            .classList.remove("hidden");

    }

    else {

        error.textContent =
            "Nope 😂 Think about my favourite chocolate! 🍫";

    }

}


/* QUESTION 3 */

function checkHappyTyped() {

    const input =
        document.getElementById("happyAnswer");

    const answer =
        input.value.toLowerCase().trim();

    const error =
        document.getElementById("happyError");


    const keywords = [

        "love",
        "care",
        "attention",
        "time",
        "mata vini",
        "listen",
        "understand",
        "understanding"

    ];


    let matches = 0;


    keywords.forEach(function(word) {

        if (answer.includes(word)) {
            matches++;
        }

    });


    if (matches >= 2) {

        error.textContent = "";


        document.getElementById("knowQ3")
            .classList.add("hidden");


        document.getElementById("knowQ4")
            .classList.remove("hidden");

    }

    else {

        error.textContent =
            "Think about what actually makes me happy 🥹❤️";

    }

}


/* QUESTION 4 */

function checkTwoThingsTyped() {
    const answer = document.getElementById("twoThingsAnswer").value
        .toLowerCase()
        .trim();

    const youTerms = [
        "nuvvu",
        "nuvu",
        "ganesh",
        "kannaa",
        "bangaram",
        "you"
    ];

    const chocolateTerms = [
        "chocolate",
        "chocolates",
        "kitkat",
        "kit kat"
    ];

    const knowsYou = youTerms.some(word => answer.includes(word));
    const knowsChocolate = chocolateTerms.some(word => answer.includes(word));

    if (knowsYou && knowsChocolate) {
        document.getElementById("twoThingsResult").innerHTML =
            "Awww... you actually know me pretty well! 🥹❤️<br><br>" +
            "Maybe I don't need to explain myself so much after all. 😌🫶";

        document.getElementById("twoThingsResult").classList.remove("wrong");
        document.getElementById("twoThingsResult").classList.add("success");
    } else {
        document.getElementById("twoThingsResult").innerHTML =
            "Hmm... try again, Kannaa 👀❤️<br>" +
            "Think about the two things I really love! 🥹";

        document.getElementById("twoThingsResult").classList.add("wrong");
    }
}

/* =====================================================
   GAME 3 - CHOOSE ME
===================================================== */

function chooseNext(questionNumber, choice) {

    let reaction = "";


    /* QUESTION 1 */

    if (questionNumber === 1) {


        if (choice === "hug") {

            reaction =
                "Awww... 🤗❤️ I knew you'd choose a hug. Come here, Kannaa! 🫶";

        }

        else {

            reaction =
                "Ohhh 👀😘 Someone is feeling brave today... I see you!";

        }


        document.getElementById("chooseQ1")
            .classList.add("hidden");


        document.getElementById("chooseReaction1")
            .textContent = reaction;


        document.getElementById("chooseReaction1")
            .classList.remove("hidden");


        setTimeout(function() {

            document.getElementById("chooseReaction1")
                .classList.add("hidden");


            document.getElementById("chooseQ2")
                .classList.remove("hidden");

        }, 1800);

    }


    /* QUESTION 2 */

    else if (questionNumber === 2) {


        if (choice === "me") {

            reaction =
                "Correct answer 😌❤️ You may continue, Kannaa.";

        }

        else {

            reaction =
                "MONEY?! 😭😂 Fine... I'll remember this one! 💰👀";

        }


        document.getElementById("chooseQ2")
            .classList.add("hidden");


        document.getElementById("chooseReaction2")
            .textContent = reaction;


        document.getElementById("chooseReaction2")
            .classList.remove("hidden");


        setTimeout(function() {

            document.getElementById("chooseReaction2")
                .classList.add("hidden");


            document.getElementById("chooseQ3")
                .classList.remove("hidden");

        }, 1800);

    }


    /* QUESTION 3 */

    else if (questionNumber === 3) {


        if (choice === "love") {

            reaction =
                "That's my boy. ❤️🥹 Love always wins!";

        }

        else {

            reaction =
                "LUST?! 😏😂 Okayyy... I definitely wasn't expecting that answer!";

        }


        document.getElementById("chooseQ3")
            .classList.add("hidden");


        document.getElementById("chooseReaction3")
            .textContent = reaction;


        document.getElementById("chooseReaction3")
            .classList.remove("hidden");


        setTimeout(function() {

            document.getElementById("chooseReaction3")
                .classList.add("hidden");


            document.getElementById("chooseComplete")
                .classList.remove("hidden");

        }, 2000);

    }

}


/* =====================================================
   BACK TO GAME MENU
===================================================== */

function backToGames() {

    document.querySelectorAll(".game")
        .forEach(function(game) {

            game.classList.add("hidden");

        });


    document.getElementById("gameMenu")
        .classList.remove("hidden");
}


/* =====================================================
   PAGE 5 - OPEN LETTER
===================================================== */

function openLetter() {

    document.getElementById("envelopeSection")
        .classList.add("hidden");


    document.getElementById("letterSection")
        .classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   PAGE 5 - SECRET CODE
===================================================== */

function unlockSecret() {

    const input =
        document.getElementById("secretCode");

    const error =
        document.getElementById("codeError");

    const code =
        input.value.trim();


    if (code === "162157") {

        error.textContent = "";


        document.getElementById("letterSection")
            .classList.add("hidden");


        document.getElementById("finalSection")
            .classList.remove("hidden");


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    else {

        error.textContent =
            "Hmm... that's not our secret code 👀❤️ Try again!";

    }

}


/* =====================================================
   SECRET CODE - ENTER KEY
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const input =
            document.getElementById("secretCode");


        input.addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {

                    unlockSecret();

                }

            }
        );

    }
);