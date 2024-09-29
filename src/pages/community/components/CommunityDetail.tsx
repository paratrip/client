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
import { getLocationName } from '@utils/helpers/trasformLocation';

interface BoardCreatorInfo {
  memberSeq: number;
  userId: string;
  profileImage: string;
}

interface BoardInfo {
  boardSeq: number;
  title: string;
  content: string;
  location: string;
  updatedAt: string;
  imageURLs: string[];
}

interface CommentInfo {
  commentSeq: number;
  comment: string;
  updatedAt: string;
  memberSeq: number;
  userId: string;
  profileImage: string;
}

interface CountInfo {
  commentCnt: number;
  heartCnt: number;
  scrapCnt: number;
  heart: boolean;
  scrap: boolean;
}

interface PostData {
  boardInfo: BoardInfo;
  boardCreatorInfo: BoardCreatorInfo;
  commentInfos: CommentInfo[];
  countInfo: CountInfo;
}

const CommunityDetail = () => {
  const location = useLocation();
  const memberSeq = localStorage.getItem('memberSeq');
  const boardSeq = location.pathname.split('/:').pop();

  const [postDetail, setPostDetail] = useState<PostData | null>(null);
  const [userImgURL, setUserImgURL] = useState<string | null>(null);
  const [slidesData, setSlidesData] = useState<string[]>([]);
  const [commentData, setCommentData] = useState<CommentInfo[]>([]);
  const [commentCnt, setCommentCnt] = useState<CountInfo>({
    commentCnt: 0,
    heartCnt: 0,
    scrapCnt: 0,
    heart: false,
    scrap: false,
  });
  const [isHeart, setIsHeart] = useState<boolean>(false);
  const [isScrap, setIsScrap] = useState<boolean>(false);

  const [commentInputValue, setCommentInputValue] = useState('');
  const fetchPostDetail = useFetch<void, PostData>(true);
  const fetchComment = useFetch(true);

  // [ ] 게시글 상세정보 조회
  const getPostDetail = async () => {
    try {
      const response = await fetchPostDetail({
        url: `${END_POINT}/board?memberSeq=${memberSeq}&boardSeq=${boardSeq}`,
        method: 'get',
      });

      if (response.status === 200) {
        const { data } = response;
        setPostDetail(data);
        setUserImgURL(data.boardCreatorInfo.profileImage);
        setSlidesData(data.boardInfo.imageURLs || []);
        setCommentData(data.commentInfos || []);
        setCommentInputValue('');
        setCommentCnt(data.countInfo);
        setIsHeart(data.countInfo.heart);
        setIsScrap(data.countInfo.scrap);
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

  useEffect(() => {
    getPostDetail();
  }, []);

  useEffect(() => {
    if (postDetail) {
      setIsHeart(postDetail.countInfo.heart);
      setIsScrap(postDetail.countInfo.scrap);
    }
  }, [postDetail]);

  return (
    <>
      <Header type='back' />
      <div className={style.postDetailContainer}>
        <div className={style.postWrapper}>
          <div className={style.userInfoContainer}>
            <div className={style.userInfoBox}>
              {userImgURL === null ? (
                <Icon iconType='communityUserDefaultImgSmall' />
              ) : (
                <img
                  className={style.userImg}
                  src={postDetail?.boardCreatorInfo?.profileImage}
                ></img>
              )}

              <div className={style.flexBox}>
                <div className={style.userName}>
                  {postDetail?.boardCreatorInfo?.userId}
                </div>
                <div className={style.postDate}>
                  {timetoString(postDetail?.boardInfo?.updatedAt || '')}
                </div>
              </div>
              <div className={style.locationInput}>
                {getLocationName(postDetail?.boardInfo?.location || '')}
              </div>
            </div>
            <div className={style.activeBox}>
              {postDetail && (
                <>
                  <ScrapButton
                    initialScrapState={postDetail.countInfo.scrap}
                    onScrapChange={newState => setIsScrap(newState)}
                    onScrapSuccess={getPostDetail}
                  />  
                  <HeartButton
                    initialHeartState={postDetail.countInfo.heart}
                    onHeartChange={newState => setIsHeart(newState)}
                    onHeartSuccess={getPostDetail}
                  />
                </>
              )}
            </div>
          </div>
          <div className={style.postContainer}>
            <div className={style.postTitle}>
              {postDetail?.boardInfo?.title}
            </div>
            {slidesData.length !== 0 && (
              <div className={style.SliderContainer}>
                <PostSlider data={slidesData} />
              </div>
            )}
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
                  {item.profileImage === null ? (
                    <Icon iconType='communityUserDefaultImg30px' />
                  ) : (
                    <img
                      className={style.userImg}
                      src={item.profileImage}
                    ></img>
                  )}

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
                <Icon
                  iconType={
                    commentInputValue ? 'commentWriteOn' : 'commentWriteOff'
                  }
                />
              </button>
            </div>
            <div className={style.statusBox}>
              <div className={style.status}>
                <Icon iconType='comment' />
                <p className={style.statusText}>{commentCnt.commentCnt}</p>
              </div>
              <div className={style.status}>
                <Icon iconType='heart' />
                <p className={style.statusText}>{commentCnt.heartCnt}</p>
              </div>
              <div className={style.status}>
                <Icon iconType='scrap' />
                <p className={style.statusText}>{commentCnt.scrapCnt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityDetail;
