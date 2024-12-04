package com._0.server.domain.post.repository;

import com._0.server.domain.post.entity.File;
import com._0.server.domain.post.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepository extends JpaRepository<File, Long> {
    boolean existsByPost(Post post);
}
