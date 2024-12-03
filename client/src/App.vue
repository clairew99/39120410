<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-layout class="pa-0">
    <RouterView />
  </v-layout>
</template>

<style scoped>
.v-layout {
	width : 100vw;
	height : 100%;
}
/* 모든 v-container에 테두리 추가 */
div {
  border: 1px solid black;
}
</style>
