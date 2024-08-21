document.addEventListener('DOMContentLoaded', () => {
    const symbols = ['🍒', '🍋', '🔔', '⭐', '🍉'];
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');
    const spinButton = document.getElementById('spin-button');
    const resetButton = document.getElementById('reset-button');
    const pointsDisplay = document.getElementById('points');
    const messageDisplay = document.getElementById('message');
    let points = 0;

    function spinReel(reel) {
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    function updateReels() {
        reel1.textContent = spinReel(reel1);
        reel2.textContent = spinReel(reel2);
        reel3.textContent = spinReel(reel3);
    }

    function evaluateResult() {
        if (reel1.textContent === reel2.textContent && reel2.textContent === reel3.textContent) {
            points += 10;
            messageDisplay.textContent = `You won 10 points!`;
        } else if (reel1.textContent === reel2.textContent || reel2.textContent === reel3.textContent || reel1.textContent === reel3.textContent) {
            points += 5;
            messageDisplay.textContent = `You won 5 points!`;
        } else {
            messageDisplay.textContent = `No match, try again.`;
        }
        pointsDisplay.textContent = points;
    }

    function spin() {
        let spinCount = 0;
        const spinInterval = setInterval(() => {
            updateReels();
            spinCount++;
            if (spinCount > 20) {
                clearInterval(spinInterval);
                evaluateResult();
            }
        }, 100);
    }

    function resetGame() {
        points = 0;
        pointsDisplay.textContent = points;
        messageDisplay.textContent = '';
        reel1.textContent = symbols[0];
        reel2.textContent = symbols[1];
        reel3.textContent = symbols[2];
    }

    spinButton.addEventListener('click', spin);
    resetButton.addEventListener('click', resetGame);
});
