import { defineStore } from "pinia"
import { ref, inject } from "vue"

const { VITE_SERVER_URL } = import.meta.env // http://localhost:8080/api/v1

export const usePostStore = defineStore('post', () => {

    const axios = inject('axios')

    const postList = ref(
        
            [
              {
                "id": 2,
                "title": "개발자가 되고싶어요",
                "file_exists": true,
                "username": "user1",
                "view_cnt": 25,
                "created_at": "2024-12-04T11:00:00"
              },
              {
                "id": 1,
                "title": "Spring Security 정복하기",
                "file_exists": true,
                "username": "user1",
                "view_cnt": 10,
                "created_at": "2024-12-04T10:30:00"
              },
              {
                "id": 4,
                "title": "Java가 어렵지만 도전해 볼게요",
                "file_exists": false,
                "username": "user2",
                "view_cnt": 8,
                "created_at": "2024-12-03T09:30:00"
              },
              {
                "id": 3,
                "title": "Vue가 마음대로 안움직여요ㅠ",
                "file_exists": true,
                "username": "user2",
                "view_cnt": 12,
                "created_at": "2024-12-03T09:15:00"
              },
              {
                "id": 7,
                "title": "AWS 자격증을 따보고 싶습니다.",
                "file_exists": true,
                "username": "user3",
                "view_cnt": 19,
                "created_at": "2024-12-02T14:20:00"
              },
              {
                "id": 6,
                "title": "백엔드 개발자가 꿈이에요!",
                "file_exists": false,
                "username": "user3",
                "view_cnt": 5,
                "created_at": "2024-12-02T14:10:00"
              },
              {
                "id": 5,
                "title": "사용자 경험을 우선시한 프론트엔드 개발자",
                "file_exists": true,
                "username": "user3",
                "view_cnt": 33,
                "created_at": "2024-12-02T14:00:00"
              },
              {
                "id": 10,
                "title": "로그인 기능이 어렵네요. 그래도 도전!",
                "file_exists": false,
                "username": "user4",
                "view_cnt": 9,
                "created_at": "2024-12-01T14:00:00"
              },
              {
                "id": 9,
                "title": "새해를 맞이하며",
                "file_exists": true,
                "username": "user4",
                "view_cnt": 15,
                "created_at": "2024-12-01T13:50:00"
              },
              {
                "id": 8,
                "title": "중요한건 꺾여도 그냥 하는 마음",
                "file_exists": true,
                "username": "user4",
                "view_cnt": 21,
                "created_at": "2024-12-01T13:40:00"
              },
              {
                "id": 15,
                "title": "곧 2025년이네요",
                "file_exists": false,
                "username": "user5",
                "view_cnt": 6,
                "created_at": "2024-11-30T16:40:00"
              },
              {
                "id": 14,
                "title": "오늘 하루도 고생많으셨습니다.",
                "file_exists": true,
                "username": "user5",
                "view_cnt": 7,
                "created_at": "2024-11-30T16:30:00"
              },
              {
                "id": 13,
                "title": "꿈을 향해 한걸음",
                "file_exists": false,
                "username": "user5",
                "view_cnt": 4,
                "created_at": "2024-11-30T16:20:00"
              },
              {
                "id": 12,
                "title": "할 수 있다",
                "file_exists": true,
                "username": "user5",
                "view_cnt": 17,
                "created_at": "2024-11-30T16:10:00"
              },
              {
                "id": 11,
                "title": "어렵지만 오늘도 힘내봅니다.",
                "file_exists": false,
                "username": "user5",
                "view_cnt": 11,
                "created_at": "2024-11-30T16:00:00"
              }
            ]
        
    )

    const getPostList = () => {
        // console.log(axios.defaults.headers.common['Authorization'])
        axios.get(`${VITE_SERVER_URL}/post`)
        .then((response) => {                  
            console.log(response.data) 
            postList.value = response.data
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return {
        postList, getPostList
    }
})