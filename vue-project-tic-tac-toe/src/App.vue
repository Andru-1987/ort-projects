<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div id="nav">
    <RouterLink :to="{ name: 'Home' }" class="router-link-button">Home</RouterLink>
    <RouterLink :to="{ name: 'TicTacToe' }" class="router-link-button">Tic Tac Toe</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped>
#nav {
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center; /* Centers vertically */
  gap: 20px;
  padding: 20px;
}

.router-link-button {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 20px;
  /* background-color: #007bff; Blue color */
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s;
}

.router-link-button:hover {
  background-color: #0056b3; /* Darker blue */
  transform: scale(1.05);
}

.router-link-button:active {
  transform: scale(0.95);
}

.router-link-exact-active {
  background-color: #0056b3; /* Active link color */
}
</style>
