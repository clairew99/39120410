import { defineStore } from "pinia"
import { ref, inject } from "vue"

const { VITE_SERVER_URL } = import.meta.env // http://localhost:8080/api/v1

export const usePostStore = defineStore('post', () => {

    const axios = inject('axios')

    // send Notice    
    // const sendNotice = (matchingUuid, notice) => { 
    //     // console.log(notice)
    //     axios.post(`/notice/create/apply/${matchingUuid}`, notice)
    //     .then((response) => {
    //         alert("알림 전송!")
    //         })
    //     .catch((error) => { 
    //         console.log(error)
    //     })   

    // }

    // const sendReturn = (matchingUuid, notice) => { 
    //     axios.post(`/notice/create/return/${matchingUuid}`, notice)
    //     .then((response) => {
    //         alert("알림 전송!")
    //         })
    //     .catch((error) => { 
    //         console.log(error)
    //     })
    // }
    
    // read totalNoticeList
    // const postList = ref([])

    const postList = ref(
        
            [
              {
                "id": 2,
                "title": "두 번째 게시글",
                "file_exists": true,
                "username": "user1",
                "view_cnt": 25,
                "created_at": "2024-12-04T11:00:00"
              },
              {
                "id": 1,
                "title": "첫 번째 게시글",
                "file_exists": true,
                "username": "user1",
                "view_cnt": 10,
                "created_at": "2024-12-04T10:30:00"
              },
              {
                "id": 4,
                "title": "네 번째 게시글",
                "file_exists": false,
                "username": "user2",
                "view_cnt": 8,
                "created_at": "2024-12-03T09:30:00"
              },
              {
                "id": 3,
                "title": "세 번째 게시글",
                "file_exists": true,
                "username": "user2",
                "view_cnt": 12,
                "created_at": "2024-12-03T09:15:00"
              },
              {
                "id": 7,
                "title": "일곱 번째 게시글",
                "file_exists": true,
                "username": "user3",
                "view_cnt": 19,
                "created_at": "2024-12-02T14:20:00"
              },
              {
                "id": 6,
                "title": "여섯 번째 게시글",
                "file_exists": false,
                "username": "user3",
                "view_cnt": 5,
                "created_at": "2024-12-02T14:10:00"
              },
              {
                "id": 5,
                "title": "다섯 번째 게시글",
                "file_exists": true,
                "username": "user3",
                "view_cnt": 33,
                "created_at": "2024-12-02T14:00:00"
              },
              {
                "id": 10,
                "title": "열 번째 게시글",
                "file_exists": false,
                "username": "user4",
                "view_cnt": 9,
                "created_at": "2024-12-01T14:00:00"
              },
              {
                "id": 9,
                "title": "아홉 번째 게시글",
                "file_exists": true,
                "username": "user4",
                "view_cnt": 15,
                "created_at": "2024-12-01T13:50:00"
              },
              {
                "id": 8,
                "title": "여덟 번째 게시글",
                "file_exists": true,
                "username": "user4",
                "view_cnt": 21,
                "created_at": "2024-12-01T13:40:00"
              },
              {
                "id": 15,
                "title": "열다섯 번째 게시글",
                "file_exists": false,
                "username": "user5",
                "view_cnt": 6,
                "created_at": "2024-11-30T16:40:00"
              },
              {
                "id": 14,
                "title": "열네 번째 게시글",
                "file_exists": true,
                "username": "user5",
                "view_cnt": 7,
                "created_at": "2024-11-30T16:30:00"
              },
              {
                "id": 13,
                "title": "열세 번째 게시글",
                "file_exists": false,
                "username": "user5",
                "view_cnt": 4,
                "created_at": "2024-11-30T16:20:00"
              },
              {
                "id": 12,
                "title": "열두 번째 게시글",
                "file_exists": true,
                "username": "user5",
                "view_cnt": 17,
                "created_at": "2024-11-30T16:10:00"
              },
              {
                "id": 11,
                "title": "열한 번째 게시글",
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
    
    // // read noticeDetail
    // const notice = ref({})
    // const getNoticeDetail = (uuid) => {
    //     axios.get(`/notice/detail/${uuid}`)
    //         .then((response) => {
    //             notice.value = response.data
    //             console.log(notice.value)
    //     })
    // }

    // // update notice read_status
    // const readNotice = (uuid) => {
    //     axios.put(`${VITE_SERVER_URL}/notice/read/${uuid}` )
    //         .then(() => { 
    //             getNoticeList()
    //      })
    // }

    // // update notice process_status
    // const processNotice = (uuid) => {
    //     axios.put(`${VITE_SERVER_URL}/notice/process/${uuid}` )
    //         .then(() => { 
    //             getNoticeList()
    //         })        
    // }

    // // delete notice
    // const deleteNotice = (uuid) => { 
    //     axios.delete(`/notice/${uuid}`)
    //         .then(() => { 
    //         getNoticeList()
    //      })
    // }

    return {
        postList, getPostList
        // sendNotice, notice, getNoticeDetail, readNotice, deleteNotice, processNotice, sendReturn
    }
})