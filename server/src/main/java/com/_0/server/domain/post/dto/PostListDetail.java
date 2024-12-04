package com._0.server.domain.post.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Builder
@Getter
@AllArgsConstructor
public class PostListDetail {

    private String title;

    private boolean file_exists;

    private String username;

    private int view_cnt;

    private LocalDateTime created_at;

}
