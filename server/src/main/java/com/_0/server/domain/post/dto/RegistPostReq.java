package com._0.server.domain.post.dto;

import com._0.server.domain.member.entity.Member;
import com._0.server.domain.post.entity.Post;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class RegistPostReq {

    private String title;

    private String content;

    public Post toPost(Member member, RegistPostReq registPostReq) {

        return Post.builder()
                .title(registPostReq.getTitle())
                .content(registPostReq.getContent())
                .member(member)
                .viewCnt(0)
                .createdAt(LocalDateTime.now())
                .build();

    };

}
