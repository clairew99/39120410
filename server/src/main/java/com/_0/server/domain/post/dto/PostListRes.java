package com._0.server.domain.post.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class PostListRes {

    private List<PostListDetail> list;
}
