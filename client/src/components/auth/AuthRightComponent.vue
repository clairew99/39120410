<script setup>

</script>

<template>

    <v-container fluid class="d-flex align-center justify-center">
        <!-- <v-sheet width="100%" class="pa-12" rounded> -->
            <v-card width="100%" class="mx-10 px-6 py-8" variant="text">
                
                <v-form v-model="form">
                    <v-text-field label="user ID" single-line variant="outlined"></v-text-field>
                    <v-text-field label="password" single-line variant="outlined"></v-text-field>
                    <v-btn
                    size="large"
                    type="submit"
                    variant="elevated"
                    color = "#EA002C"
                    block
                    >
                    Sign In
                    </v-btn>
                </v-form>
            </v-card>
        <!-- </v-sheet> -->
    </v-container>

    
</template>


<style scoped>
.v-container {
  /* width : inherit; */
  height : 100vh;
  /* height: 100vh; 세로로 꽉 채우기 */
}
</style>