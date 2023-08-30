function calculateScore() {
    const answers = {
        q1: "c",
        q2: "a",
        q3: "d",
        q4: "b",
        q5: "a",
    };

    let score = 0;

    for (const question in answers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            if (userAnswer === answers[question]) {
                score++;
            }
        }
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Your score: ${score} out of 5`;
}