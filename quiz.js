function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer using querySelector
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Check if the user selected an answer
    if (selectedAnswer) {
        // Get the value of the selected answer
        const userAnswer = selectedAnswer.value;
        
        // Compare the user's answer to the correct answer
        const feedbackElement = document.getElementById("feedback");
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        // If no answer was selected
        document.getElementById("feedback").textContent = "Please select an answer!";
        document.getElementById("feedback").style.color = "orange";
    }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);