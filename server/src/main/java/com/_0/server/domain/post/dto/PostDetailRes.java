package com._0.server.domain.post.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class PostDetailRes {

    private String username;

    private String title;

    private int viewCnt;

    private String content;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
