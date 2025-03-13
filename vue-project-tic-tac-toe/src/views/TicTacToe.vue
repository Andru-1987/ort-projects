<script setup>
import { ref, computed } from "vue";

// Board state
const board = ref(Array(9).fill(null));
const currentPlayer = ref("X");
const winner = ref(null);

// Winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Check for winner
const checkWinner = () => {
    for (const [a, b, c] of winningCombinations) {
        if (board.value[a] && board.value[a] === board.value[b] && board.value[a] === board.value[c]) {
            winner.value = board.value[a];
            return;
        }
    }
    if (!board.value.includes(null)) {
        winner.value = "Draw";
    }
};

// Handle a player's move
const makeMove = (index) => {
    if (!board.value[index] && !winner.value) {
        board.value[index] = currentPlayer.value;
        checkWinner();
        if (!winner.value) {
            currentPlayer.value = currentPlayer.value === "X" ? "O" : "X";
        }
    }
};

// Reset the game
const resetGame = () => {
    board.value = Array(9).fill(null);
    currentPlayer.value = "X";
    winner.value = null;
};

// Computed property for status message
const statusMessage = computed(() => {
    return winner.value ? (winner.value === "Draw" ? "It's a Draw!" : `Winner: ${winner.value}`) : `Next player: ${currentPlayer.value}`;
});
</script>

<template>
    <div class="game">
        <h1>Tic-Tac-Toe</h1>
        <p class="status">{{ statusMessage }}</p>

        <div class="board">
            <button v-for="(cell, index) in board" :key="index" class="cell" @click="makeMove(index)"
                :class="{ 'x': cell === 'X', 'o': cell === 'O' }">
                {{ cell }}
            </button>
        </div>

        <button class="reset" @click="resetGame">Restart Game</button>
    </div>
</template>

<style scoped>
.game {
    text-align: center;
    font-family: Arial, sans-serif;
}

.status {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 80px);
    gap: 5px;
    justify-content: center;
    margin: 20px auto;
}

.cell {
    width: 80px;
    height: 80px;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    line-height: 80px;
    border: 2px solid #333;
    background-color: #fff;
    cursor: pointer;
}

.cell.x {
    color: blue;
}

.cell.o {
    color: red;
}

.reset {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    background-color: #333;
    color: white;
    border-radius: 5px;
}
</style>
