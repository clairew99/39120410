package com._0.server.domain.post.service;

import com._0.server.domain.post.dto.PostListDetail;
import com._0.server.domain.post.dto.PostListRes;
import com._0.server.domain.post.entity.Post;
import com._0.server.domain.post.repository.FileRepository;
import com._0.server.domain.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final FileRepository fileRepository;

    @Override
    public PostListRes readPostList() {

        List<Post> postList = postRepository.findAllByOrderByCreatedAtDesc();

        List<PostListDetail> postListDetails = postList.stream()
                .map(post -> {
                    boolean hasFile = fileRepository.existsByPost(post); // 파일 존재 여부 확인
                    return new PostListDetail(
                            post.getTitle(),                             // 제목
                            hasFile,                                     // 첨부파일 여부
                            post.getMember().getUsername(),              // 작성자 이름
                            post.getViewCnt(),                           // 조회수
                            post.getCreatedAt()                          // 생성일
                    );
                })
                .toList();

        PostListRes res = PostListRes.builder()
                .list(postListDetails)
                .build();

        return res;
    }
}
