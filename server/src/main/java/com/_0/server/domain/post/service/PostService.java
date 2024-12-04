package com._0.server.domain.post.service;

import com._0.server.domain.post.dto.PostListRes;

public interface PostService {
    PostListRes readPostList();

    void removePost(Long postId);
}
