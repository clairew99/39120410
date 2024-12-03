-- Insert Members
INSERT INTO member (id, username, password, nickname, gender) VALUES
                                                                  (1, 'user1', 'password1', '홍길동', true),
                                                                  (2, 'user2', 'password2', '김영희', false),
                                                                  (3, 'user3', 'password3', '박철수', true),
                                                                  (4, 'user4', 'password4', '이민정', false),
                                                                  (5, 'user5', 'password5', '최수정', false);

-- Insert Posts
INSERT INTO post (id, member_id, title, view_cnt, content) VALUES
                                                               (1, 1, '첫 번째 게시글', 10, '이것은 첫 번째 게시글의 내용입니다.'),
                                                               (2, 1, '두 번째 게시글', 25, '이것은 두 번째 게시글의 내용입니다.'),
                                                               (3, 2, '세 번째 게시글', 12, '이것은 세 번째 게시글의 내용입니다.'),
                                                               (4, 2, '네 번째 게시글', 8, '이것은 네 번째 게시글의 내용입니다.'),
                                                               (5, 3, '다섯 번째 게시글', 33, '이것은 다섯 번째 게시글의 내용입니다.'),
                                                               (6, 3, '여섯 번째 게시글', 5, '이것은 여섯 번째 게시글의 내용입니다.'),
                                                               (7, 3, '일곱 번째 게시글', 19, '이것은 일곱 번째 게시글의 내용입니다.'),
                                                               (8, 4, '여덟 번째 게시글', 21, '이것은 여덟 번째 게시글의 내용입니다.'),
                                                               (9, 4, '아홉 번째 게시글', 15, '이것은 아홉 번째 게시글의 내용입니다.'),
                                                               (10, 4, '열 번째 게시글', 9, '이것은 열 번째 게시글의 내용입니다.'),
                                                               (11, 5, '열한 번째 게시글', 11, '이것은 열한 번째 게시글의 내용입니다.'),
                                                               (12, 5, '열두 번째 게시글', 17, '이것은 열두 번째 게시글의 내용입니다.'),
                                                               (13, 5, '열세 번째 게시글', 4, '이것은 열세 번째 게시글의 내용입니다.'),
                                                               (14, 5, '열네 번째 게시글', 7, '이것은 열네 번째 게시글의 내용입니다.'),
                                                               (15, 5, '열다섯 번째 게시글', 6, '이것은 열다섯 번째 게시글의 내용입니다.');

-- Insert Files
INSERT INTO file (id, post_id, name, path) VALUES
                                               (1, 1, '파일1-1.txt', '/files/file1-1.txt'),
                                               (2, 2, '파일2-1.txt', '/files/file2-1.txt'),
                                               (3, 2, '파일2-2.txt', '/files/file2-2.txt'),
                                               (4, 3, '파일3-1.txt', '/files/file3-1.txt'),
                                               (5, 5, '파일5-1.txt', '/files/file5-1.txt'),
                                               (6, 7, '파일7-1.txt', '/files/file7-1.txt'),
                                               (7, 7, '파일7-2.txt', '/files/file7-2.txt'),
                                               (8, 8, '파일8-1.txt', '/files/file8-1.txt'),
                                               (9, 9, '파일9-1.txt', '/files/file9-1.txt'),
                                               (10, 12, '파일12-1.txt', '/files/file12-1.txt'),
                                               (11, 12, '파일12-2.txt', '/files/file12-2.txt'),
                                               (12, 14, '파일14-1.txt', '/files/file14-1.txt');
