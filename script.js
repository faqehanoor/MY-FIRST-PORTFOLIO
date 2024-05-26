// Select all elements with the class "word"
let words = document.querySelectorAll(".word");

// Iterate through each word element
words.forEach((word) => {
    // Split the text content of each word into individual letters
    let letters = word.textContent.split("");
    // Clear the text content of the word element
    word.textContent = "";
    // Wrap each letter in a span element with a class name matching the letter
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";  // Using a common class for styling
        word.append(span);
    });
});

// Initialize indices to track the current and maximum word indices
let currentWordIndex = 0;
let maxWordIndex = words.length - 1; // Fixed typo from "lenght" to "length"

// Set the opacity of the first word to 1 (visible)
words[currentWordIndex].style.opacity = "1";

// Function to change text (animate letters)
let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    // Animate out the letters of the current word
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out"; // Assuming "out" is a class for fade-out animation
        }, i * 80);
    });

    // Set the opacity of the next word to 1 (start of fade-in)
    nextWord.style.opacity = "1";

    // Animate in the letters of the next word
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind"; // Assuming "behind" is an initial hidden state class
        setTimeout(() => {
            letter.className = "letter in"; // Assuming "in" is a class for fade-in animation
        }, 340 + i * 80);
    });

    // Update the current word index
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

// Set an interval to change the text periodically (e.g., every 3 seconds)
setInterval(changeText, 3000);

// const circles = document.querySelectorAll(`.circle`);
// circles.forEach(elem=>{
//     var dots = elem.getAttribute("data-dots");
//     var marked = elem.getAttribute("data-percent");
//     var percent = Math.floor(dots*marked/100);
//     var points = "";
//     var rotate = 360 / dots;

//     for(let i = 0; i < dots ; i++){
//          points += `<div class= "points" style="--i:${i}; --rot:${rotate}deg"></div>`
//     }

//     elem.innerHTML = points;

//    const pointsmarked = elem.querySelectorAll('.points');
//    for(let i=0; i<percent; i++){
//     pointsmarked[i].classList.add(`marked`)
//    }

// })


const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    const dots = parseInt(elem.getAttribute("data-dots"));
    const marked = parseInt(elem.getAttribute("data-percent"));
    const percent = Math.floor(dots * marked / 100);
    let points = "";
    const rotate = 360 / dots;

    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsmarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsmarked[i].classList.add('marked');
    }
});
