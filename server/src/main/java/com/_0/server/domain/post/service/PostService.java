package com._0.server.domain.post.service;

import com._0.server.domain.post.dto.PostListRes;
import com._0.server.domain.post.dto.RegistPostReq;
import com._0.server.domain.post.entity.Post;
import org.springframework.web.multipart.MultipartFile;

public interface PostService {
    Post savePost(long memberId, RegistPostReq registPostReq);

    void saveFiles(Post post, MultipartFile[] files);

    PostListRes readPostList();

    void removePost(Long postId);


}
