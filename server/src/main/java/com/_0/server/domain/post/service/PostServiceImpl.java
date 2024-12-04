package com._0.server.domain.post.service;

import com._0.server.domain.member.entity.Member;
import com._0.server.domain.member.repository.MemberRepository;
import com._0.server.domain.post.dto.PostDetailRes;
import com._0.server.domain.post.dto.PostListDetail;
import com._0.server.domain.post.dto.PostListRes;
import com._0.server.domain.post.dto.RegistPostReq;
import com._0.server.domain.post.entity.Post;
import com._0.server.domain.post.repository.FileRepository;
import com._0.server.domain.post.repository.PostRepository;
import com._0.server.global.exception.BusinessLogicException;
import com._0.server.global.exception.ErrorCode;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class PostServiceImpl implements PostService {

    private final MemberRepository memberRepository;
    private final PostRepository postRepository;
    private final FileRepository fileRepository;

    @Override
    public Post savePost(long memberId, RegistPostReq registPostReq) {

        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new BusinessLogicException(ErrorCode.NOT_FOUND));

        Post post = registPostReq.toPost(member, registPostReq);

        return postRepository.save(post);
    }

    @Override
    public void saveFiles(Post post, MultipartFile[] files) {

    }

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

    @Override
    public PostDetailRes readPostDetail(Long postId) {

        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new BusinessLogicException(ErrorCode.NOT_FOUND));

        PostDetailRes res = PostDetailRes.builder()
                .title(post.getTitle())
                .content(post.getContent())
                .username(post.getMember().getUsername())
                .viewCnt(post.getViewCnt())
                .createdAt(post.getCreatedAt())
                .build();

        return res;
    }

    @Override
    public void removePost(Long postId) {

        fileRepository.deleteAllByPostId(postId);

        postRepository.deleteById(postId);

    }
}
