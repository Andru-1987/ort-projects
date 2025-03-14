// Function to generate winning combinations dynamically for any grid size
const getWinningCombinations = (gridSize = 3) => {

    const horizontalCombinations = Array.from({ length: gridSize }, (_, row) =>
        Array.from({ length: gridSize }, (_, col) => row * gridSize + col)
    );

    const verticalCombinations = Array.from({ length: gridSize }, (_, col) =>
        Array.from({ length: gridSize }, (_, row) => row * gridSize + col)
    );

    const diagonal1 = Array.from({ length: gridSize }, (_, i) => i * gridSize + i);
    const diagonal2 = Array.from({ length: gridSize }, (_, i) => (i + 1) * gridSize - (i + 1));

    return [...horizontalCombinations, ...verticalCombinations, diagonal1, diagonal2];


};

export { getWinningCombinations }
