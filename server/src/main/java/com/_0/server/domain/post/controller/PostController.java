package com._0.server.domain.post.controller;

import com._0.server.domain.post.dto.FileInfoDto;
import com._0.server.domain.post.dto.PostDetailRes;
import com._0.server.domain.post.dto.PostListRes;
import com._0.server.domain.post.dto.RegistPostReq;
import com._0.server.domain.post.entity.Post;
import com._0.server.domain.post.service.PostService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@RestController
@RequestMapping("/post")
@RequiredArgsConstructor
@Tag(name = "Post", description = "post api")
public class PostController {

    @Value("${file.path}")
    private String uploadPath;

    private final PostService postService;

//  @PostMapping(consumes= "multipart/form-data")
    @PostMapping
    public ResponseEntity<?> registPost(@RequestBody RegistPostReq registPostReq) {
//            (HttpServletRequest hsRequest,
//            @RequestPart("postDetail") RegistPostReq registPostReq,
//            @RequestPart(value = "uploadFiles", required = false) MultipartFile[] files) throws Exception {

        // 게시물 저장 후 id 불러오기
        long memberId = 1L;
        Post post = postService.savePost(memberId, registPostReq);

        // 첨부파일 저장을 위해
//        postService.saveFiles(post, files);

//        for (MultipartFile file : files) {
//            String today = new SimpleDateFormat("yyMMdd").format(new Date());
//            String saveFolder = uploadPath + File.separator + today;
//
//            File folder = new File(saveFolder);
//            if (!folder.exists())
//                folder.mkdirs();
//
//            FileInfoDto fileInfoDto = new FileInfoDto();
//            String originalFileName = file.getOriginalFilename();
//
//            if (!originalFileName.isEmpty()) {
//                String saveFileName = UUID.randomUUID().toString() + originalFileName.substring(originalFileName.lastIndexOf('.'));
//
//                fileInfoDto.setSaveFolder(today);
//                fileInfoDto.setOriginalFile(originalFileName);
//                fileInfoDto.setSaveFile(saveFileName);
//
//                file.transferTo(new File(folder, saveFileName));
//            }
//
//        }
        return new ResponseEntity<>(null, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<PostListRes> getPost() {

        PostListRes res = postService.readPostList();

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/{postId}")
    public ResponseEntity<PostDetailRes> getPostDetail(@PathVariable Long postId){

        PostDetailRes res = postService.readPostDetail(postId);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<?> deletePost(@PathVariable Long postId) {

        postService.removePost(postId);

        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }
}
