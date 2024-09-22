import Icon from '@components/ui/Icon';
import style from './Post.module.css';
import { TITLE } from '@constants/texts';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { timetoString } from '@utils/validation';

interface BoardCreatorInfo {
  memberSeq: number;
  userId: string;
  profileImage: string;
}

interface BoardInfo {
  boardSeq: number;
  imageURLs: string[];
  location: string;
  updatedAt: string;
  content: string;
}

interface CountInfo {
  commentCnt: number;
  heartCnt: number;
  scrapCnt: number;
  heart: boolean;
  scrap: boolean;
}

interface CommentInfos {
  commentSeq: number;
  comment: string;
  updatedAt: string;
  memberSeq: number;
  userId: string;
  profileImage: string;
}

interface PostData {
  boardCreatorInfo: BoardCreatorInfo;
  boardInfo: BoardInfo;
  countInfo: CountInfo;
  commentInfos: CommentInfos;
}

const CustomPost = (props: any) => {
  const { data, postType, myTitle } = props;
  const postData = data.content;

  const navigate = useNavigate();

  const [isCheckdScroll, setIsCheckdScroll] = useState(false);

  // [x] 스크롤 이벤트 등록
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // [x] 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsCheckdScroll(true);
    } else {
      setIsCheckdScroll(false);
    }
  };

  // [ ] 게시글 수정 핸들러
  const handleEdit = (post: PostData) => {
    console.log('수정');
    navigate(`/community/write`, { state: post });
  };

  // [ ] 게시글 삭제 핸들러
  const handleDelete = () => {
    console.log('삭제');
    // TODO: 게시글 삭제 기능 추가
  };

  // [ ] 게시글 상세 페이지로 이동 핸들러
  const handlePostDetail = (boardSeq: number) => {
    const postDetailData = postData.find(
      (post: any) => post.boardInfo.boardSeq === boardSeq
    );

    navigate(`/community/detail/:${boardSeq}`, { state: { postDetailData } });
  };

  // [ ] 글쓰기 페이지로 이동 핸들러
  const handleWritePost = () => {
    console.log('글쓰기');
    navigate('/community/write');
  };

  // [ ] 맨 위로 이동 핸들러
  const handleOnTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  console.log(postData);
  return (
    <div className={style.container}>
      {postType === 'MY' && <p className={style.myPageTitle}>{myTitle}</p>}

      {postData?.length === 0 ? (
        <div className={style.noData}>
          {postType === 'ALL'
            ? TITLE.COMMUNITY.NODATA.ALL
            : TITLE.COMMUNITY.NODATA.ALL}
        </div>
      ) : (
        postData?.map((post: any, index: any) => (
          <div key={index} className={style.postBox}>
            <div className={style.post}>
              <div
                className={style.postInfo}
                onClick={() => handlePostDetail(post.boardInfo.boardSeq)}
              >
                <div className={style.textInfo}>
                  <div className={style.userInfo}>
                    {post.memberInfo.imgURL ? (
                      <img
                        className={style.userImg}
                        src={post.memberInfo?.imgURL}
                        alt='userImg'
                      />
                    ) : (
                      <Icon iconType='communityUserDefaultImg30px' />
                    )}

                    <div className={style.userTextBox}>
                      <p className={style.userName}>
                        {post.memberInfo.userId} 님
                      </p>
                      <p className={style.postDate}>
                        {timetoString(post.boardInfo.updatedAt)}
                      </p>
                    </div>
                  </div>
                  <h1 className={style.postTitle}>{post.boardInfo.title}</h1>
                  <p className={style.postLocation}>
                    {post.boardInfo.location}
                  </p>
                  {postType === 'MY' && (
                    <div className={style.postStatusContainer}>
                      <div className={style.postStatus}>
                        <Icon iconType='comment' />
                        <p className={style.buttonText}>
                          {post.countInfo.commentCnt}
                        </p>
                      </div>
                      <div className={style.postStatus}>
                        <Icon iconType='heart' />
                        <p className={style.buttonText}>
                          {post.countInfo.heartCnt}
                        </p>
                      </div>
                      <div className={style.postStatus}>
                        <Icon iconType='scrap' />
                        <p className={style.buttonText}>
                          {post.countInfo.scrapCnt}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {post?.boardInfo.imageURLs.length === 0 ? (
                  <></>
                ) : (
                  <img
                    className={postType === 'MY' ? style.myPostImg : ''}
                    src={post.boardInfo.imageURLs[0]}
                    alt='postImg'
                  />
                )}
              </div>
              <div className={style.postButtonWrap}>
                {postType === 'ALL' ? (
                  <>
                    <button className={style.button}>
                      <Icon iconType='comment' />
                      <p className={style.buttonText}>
                        {post.countInfo.commentCnt}
                      </p>
                    </button>
                    <button className={style.button}>
                      <Icon iconType='heart' />
                      <p className={style.buttonText}>
                        {post.countInfo.heartCnt}
                      </p>
                    </button>
                    <button className={style.button}>
                      <Icon iconType='scrap' />
                      <p className={style.buttonText}>
                        {post.countInfo.scrapCnt}
                      </p>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className={`${style.button} ${style.myPostBtn}`}
                      onClick={() => handleEdit(post)}
                    >
                      <p className={style.buttonText}>수정</p>
                    </button>
                    <button
                      className={`${style.button} ${style.myPostBtn}`}
                      onClick={handleDelete}
                    >
                      <p className={style.buttonText}>삭제</p>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))
      )}

      <div className={style.toolBtnBox}>
        <button onClick={handleWritePost}>
          <Icon iconType='write'></Icon>
        </button>
        {isCheckdScroll && (
          <button onClick={handleOnTop}>
            <Icon iconType='topArrow'></Icon>
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomPost;
