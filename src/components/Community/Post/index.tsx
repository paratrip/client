import Icon from '@components/ui/Icon';
import style from './Post.module.css';
import { TITLE } from '@constants/texts';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { timetoString } from '@utils/validation';
import { useFetch } from '@hooks/useFetch';
import { END_POINT } from '@utils/endpoint/endpoint';

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
  const { data, postType, myTitle, iconShow = true, onPostDeleted } = props;
  const postData = data;

  const navigate = useNavigate();

  const [isCheckdScroll, setIsCheckdScroll] = useState(false);

  const memberSeq = localStorage.getItem('memberSeq');
  const fetchDeletePost = useFetch();

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
    navigate(`/community/write`, { state: post });
  };

  // [ ] 게시글 삭제 핸들러
  const handleDelete = async (post: PostData) => {
    const boardSeq = post.boardInfo.boardSeq;

    try {
      const response = await fetchDeletePost({
        url: `${END_POINT}/board`,
        method: 'delete',
        data: {
          memberSeq,
          boardSeq,
        },
      });

      if (response.status === 200) {
        alert('게시글이 삭제되었습니다.');
        onPostDeleted();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // [ ] 게시글 상세 페이지로 이동 핸들러
  const handlePostDetail = (boardSeq: number) => {
    const postDetailData = postData.find(
      (post: any) => post.boardInfo.boardSeq === boardSeq
    );
    console.log(postDetailData);
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

  return (
    <div className={style.container}>
      {postType === 'MY' && <p className={style.myPageTitle}>{myTitle}</p>}

      {postData?.length === 0 ? (
        <div className={style.noData}>
          {postType !== 'SCRAP'
            ? TITLE.COMMUNITY.NODATA.ALL
            : TITLE.COMMUNITY.NODATA.SCRAP}
        </div>
      ) : (
        postData?.map((post: any, index: any) => (
          <div
            key={index}
            className={style.postBox}
            style={index === postData.length - 1 ? { paddingBottom: '20px' } : {}}
          >
            <div className={style.post}>
              <div
                className={style.postInfo}
                onClick={() => handlePostDetail(post.boardInfo.boardSeq)}
              >
                <div className={style.textInfo}>
                  <div className={style.userInfo}>
                    {post.memberInfo.profileImage ? (
                      <img
                        className={style.userImg}
                        src={post.memberInfo?.profileImage}
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
                  {postType !== 'ALL' && (
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
                    className={postType !== 'ALL' ? style.myPostImg : ''}
                    src={post.boardInfo.imageURLs[0]}
                    alt='postImg'
                    style={{ borderRadius: '5px' }}
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
                ) : postType === 'MY' ? (
                  <>
                    <button
                      className={`${style.button} ${style.myPostBtn}`}
                      onClick={() => handleEdit(post)}
                    >
                      <p className={style.buttonText}>수정</p>
                    </button>
                    <button
                      className={`${style.button} ${style.myPostBtn}`}
                      onClick={() => handleDelete(post)}
                    >
                      <p className={style.buttonText}>삭제</p>
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        ))
      )}

      {iconShow && (
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
      )}
    </div>
  );
};

export default CustomPost;
