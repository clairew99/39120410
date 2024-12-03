<script setup>
import AuthLeftComponent from '@/components/auth/AuthLeftComponent.vue';
import AuthRightComponent from '@/components/auth/AuthRightComponent.vue';
</script>

<template>
  <v-main>
      <v-row no-gutters>
      <v-col>
        <AuthLeftComponent/>
      </v-col>
      <v-col>
        <AuthRightComponent/>
      </v-col>
    </v-row>
  </v-main>
</template>


<style scoped>
.v-main {
	height: 100vh; /**100vh? */
  display : flex;
  justify-content: center;
	align-items: center;
}
</style>