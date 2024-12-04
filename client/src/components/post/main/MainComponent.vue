<script setup>
import { ref, onMounted, onUpdated } from "vue";
import SearchHeader from './SearchHeader.vue';
import { usePostStore } from "@/stores/post";
import { useRouter } from "vue-router";
import axios from "axios";

const store = usePostStore()

onMounted(() => {
  store.getPostList()
})

const headers = ref([
    { title: '작성자', align: 'start', key: 'username' },
    { title: '제목', align: 'start', key: 'title' },
    { title: '첨부파일 여부', align: 'start', key: 'file_exists' },  
    { title: '조회수', align: 'start', key: 'view_cnt' },
    { title: '생성일자', align: 'start', key: 'created_at' }
])
</script>

<template>
    <SearchHeader/>
    <v-data-table 
    :headers="headers"
    :items="store.postList"
    class="custom-table-header"></v-data-table>
</template>

<style scoped>
.custom-table-header .v-data-table-header {
    background-color: #4caf50;  /* 원하는 배경색 지정 */
    color: white;               /* 글자 색도 변경 가능 */
}
    

</style>
