import Header from '@components/layouts/Header';
import style from './CommunityDetail.module.css';
import Icon from '@components/ui/Icon';
import PostSlider from '@components/ui/PostSlider/PostSlider';
import ScrapButton from '@components/ui/ScrapButton';
import HeartButton from '@components/ui/HeartButton';
import { useLocation } from 'react-router-dom';
import { SetStateAction, useEffect, useState } from 'react';
import { useFetch } from '@hooks/useFetch';
import { END_POINT } from '@utils/endpoint/endpoint';
import { timetoString } from '@utils/validation';

interface PostDetail {
  boardInfo: {
    imageURLs: string[];
    title: string;
    content: string;
    location: string;
    updatedAt: string;
  };
  boardCreatorInfo: {
    userId: string;
    profileImage: string;
  };
  commentInfos: Array<{
    userName: string;
    date: string;
    content: string;
  }>;
}

const CommunityDetail = () => {
  const location = useLocation();
  const memberSeq = localStorage.getItem('memberSeq');
  const boardSeq = location.pathname.split('/:').pop();

  const [postDetail, setPostDetail] = useState<PostDetail | null>(null);
  const [slidesData, setSlidesData] = useState([]);
  const [commentData, setCommentData] = useState<
    Array<{
      userName: string;
      date: string;
      content: string;
    }>
  >([]);
  const [commentCtn, setCommentCtn] = useState(0);

  const [commentInputValue, setCommentInputValue] = useState('');
  const fetchPostDetail = useFetch(true);
  const fetchComment = useFetch(true);

  useEffect(() => {
    getPostDetail();
  }, []);

  // [ ] 게시글 상세정보 조회
  const getPostDetail = async () => {
    try {
      const response = await fetchPostDetail({
        url: `${END_POINT}/board?boardSeq=${boardSeq}`,
        method: 'get',
      });
      console.log(response);
      if (response.status === 200) {
        setPostDetail((response.data as PostDetail) || null);
        setSlidesData(response.data.boardInfo.imageURLs || []);
        setCommentData(response.data.commentInfos || []);
        setCommentInputValue('');
        setCommentCtn(response.data);
      } else {
        console.error('게시글 상세 정보를 불러오는데 실패했습니다.');
      }
    } catch (error) {
      console.error('게시글 상세 정보를 불러오는 중 오류 발생:', error);
    }
  };

  // [ ]  댓글 등록 핸들러
  const handleComment = async () => {
    console.log('댓글 등록');
    if (!commentInputValue.trim()) {
      alert('댓글 내용을 입력해주세요.');
      return;
    }
    try {
      const response = await fetchComment({
        url: `${END_POINT}/comment`,
        method: 'post',
        data: {
          memberSeq: memberSeq,
          boardSeq: boardSeq,
          comment: commentInputValue,
        },
      });

      if (response.status === 200 || response.status === 201) {
        setCommentInputValue(''); // 입력 필드 초기화
        await getPostDetail(); // 게시글 상세 정보 다시 불러오기
        alert('댓글이 등록되었습니다.');
      } else {
        alert('댓글 등록에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('댓글 등록 중 오류 발생:', error);
      alert('댓글 등록 중 오류가 발생했습니다.');
    }
  };

  // [ ] 댓글 입력값 변경 핸들러
  const handleCommentInput = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    console.log(e.target.value);
    setCommentInputValue(e.target.value);
  };

  return (
    <>
      <Header type='back' />
      <div className={style.postDetailContainer}>
        <div className={style.postWrapper}>
          <div className={style.userInfoContainer}>
            <div className={style.userInfoBox}>
              <img
                className={style.userImg}
                // src={postDetail.boardCreatorInfo.profileImage}
              ></img>
              <div className={style.flexBox}>
                <div className={style.userName}>
                  {postDetail?.boardCreatorInfo?.userId}
                </div>
                <div className={style.postDate}>
                  {timetoString(postDetail?.boardInfo?.updatedAt || '')}
                </div>
              </div>
              <div className={style.locationInput}>
                {postDetail?.boardInfo?.location}
              </div>
            </div>
            <div className={style.activeBox}>
              {/* <Icon iconType='nullScrap' />
              <Icon iconType='nullHeart' /> */}
              <ScrapButton />
              <HeartButton />
            </div>
          </div>
          <div className={style.postContainer}>
            <div className={style.postTitle}>
              {postDetail?.boardInfo?.title}
            </div>
            <div className={style.SliderContainer}>
              <PostSlider data={slidesData} />
            </div>

            <div className={style.postContent}>
              {postDetail?.boardInfo?.content}
            </div>
          </div>
        </div>

        <div className={style.sperator}></div>
        <div className={style.commentContainer}>
          <div className={style.commentTitleBox}>
            <div className={style.commentTitle}>댓글</div>
            <div className={style.commentCount}>{commentData.length}</div>
          </div>
          <div className={style.commentBox}>
            {commentData.map((item, idx) => (
              <div className={style.commentCard} key={idx}>
                <div className={style.userInfoBox}>
                  <img className={style.userImg} src={item.profileImage}></img>
                  <div className={style.flexBox}>
                    <div className={style.userName}>{item.userId}</div>
                    <div className={style.postDate}>
                      {timetoString(item.updatedAt)}
                    </div>
                  </div>
                </div>
                <div className={style.commentContent}>{item.comment}</div>
              </div>
            ))}
          </div>

          <div className={style.commentActiveBox}>
            <div className={style.commentInput}>
              <input
                type='text'
                placeholder='댓글을 작성해보세요.'
                value={commentInputValue}
                onChange={handleCommentInput}
              />
              <button className={style.commentBtn} onClick={handleComment}>
                <Icon iconType='commentWrite' />
              </button>
            </div>
            <div className={style.buttonBox}>
              <button className={style.button}>
                <Icon iconType='comment' />
                <p className={style.buttonText}>1</p>
              </button>
              <button className={style.button}>
                <Icon iconType='heart' />
                <p className={style.buttonText}>2</p>
              </button>
              <button className={style.button}>
                <Icon iconType='scrap' />
                <p className={style.buttonText}>3</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityDetail;
