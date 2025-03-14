<script setup>
import { ref, computed, watch } from "vue";
import { getWinningCombinations } from "@/utils/combinations.js";

// Reactive size
const size = ref(3);

// Reactive state
const board = ref([]);
const currentPlayer = ref("X");
const winner = ref(null);

// Winning combinations as a computed property
const winningCombinations = computed(() => {
    const combinations = getWinningCombinations(size.value);
    return Array.isArray(combinations) ? combinations : []; // Ensure it's iterable
});

const validateSize = () => {
    size.value = Math.min(10, Math.max(3, Number(size.value) || 3));
};

// Reset game
const resetGame = () => {
    board.value = Array(size.value * size.value).fill(null);
    currentPlayer.value = "X";
    winner.value = null;
};

// Check for winner
const checkWinner = () => {
    for (const combination of winningCombinations.value) {
        const [first, ...rest] = combination;

        if (board.value[first] && rest.every((index) => board.value[index] === board.value[first])) {
            winner.value = board.value[first];
            return;
        }
    }

    if (!board.value.includes(null)) {
        winner.value = "Draw";
    }
};

const makeMove = (index) => {
    if (!board.value[index] && !winner.value) {
        board.value[index] = currentPlayer.value;
        checkWinner(); // Check winner BEFORE switching players
        if (!winner.value) {
            currentPlayer.value = currentPlayer.value === "X" ? "O" : "X";
        }
    }
};

// Computed property for status message
const statusMessage = computed(() => {
    return winner.value
        ? winner.value === "Draw"
            ? "It's a Draw!"
            : `Winner: ${winner.value}`
        : `Next player: ${currentPlayer.value}`;
});

// Watch for size changes, validate input, and reset the board
watch(size, () => {
    validateSize();
    resetGame();
}, { immediate: true });
</script>

<template>
    <div class="game">
        <label for="size">{{ size }}</label><br>
        <input id="size" type="range" v-model="size" min="3" max="10" @input="validateSize">
        <h1>Tic-Tac-Toe ({{ size }}x{{ size }})</h1>
        <p class="status">{{ statusMessage }}</p>

        <div class="board" :style="{ gridTemplateColumns: `repeat(${size}, 80px)` }">
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
