package com._0.server.domain.post.controller;

import com._0.server.domain.post.dto.PostListRes;
import com._0.server.domain.post.service.PostService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
@RequiredArgsConstructor
@Tag(name = "Post", description = "post api")
public class PostController {

    private final PostService postService;

    @GetMapping
    public ResponseEntity<PostListRes> getPost() {

        PostListRes res = postService.readPostList();

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity<?> deletePost(@PathVariable Long postId) {

        postService.removePost(postId);

        return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
    }
}
