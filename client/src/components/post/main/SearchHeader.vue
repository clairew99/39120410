<script setup>

</script>

<template>
 <div class="d-flex flex-column">
        <div class="mb-5" style="text-align: center;"><h1>SparkList🎆</h1></div>
        <v-text-field
            label="Search"
            append-inner-icon="mdi-magnify"
            @click:append-inner="search"
            variant="outlined"
            hide-details
            single-line
            min-width="500px"
            width="auto"
        ></v-text-field>
    </div>
</template>

<style scoped>
</style>
