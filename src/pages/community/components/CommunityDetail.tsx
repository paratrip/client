import Header from '@components/layouts/Header';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './CommunityDetail.module.css';
import Icon from '@components/ui/Icon';
import PostSlider from '@components/ui/PostSlider/PostSlider';

const CommunityDetail = () => {
  const navigate = useNavigate();
  // [x] 뒤로가기 핸들러
  const goBack = () => {
    navigate('/community');
  };

  const slidesData = [
    { src: 'https://picsum.photos/564/304' },
    { src: 'https://picsum.photos/564/304' },
    { src: 'https://picsum.photos/564/304' },
    { src: 'https://picsum.photos/564/304' },
  ];

  const commentData = [
    { userName: '이름1', date: '1일전', content: '내용1' },
    { userName: '이름2', date: '2일전', content: '내용2' },
    { userName: '이름3', date: '3일전', content: '내용3' },
    { userName: '이름4', date: '4일전', content: '내용4' },
    { userName: '이름1', date: '1일전', content: '내용1' },
    { userName: '이름2', date: '2일전', content: '내용2' },
    { userName: '이름3', date: '3일전', content: '내용3' },
    { userName: '이름4', date: '4일전', content: '내용4' },
  ];

  return (
    <>
      <Header back={true} onClick={goBack} />
      <div className={style.postDetailContainer}>
        <div className={style.postWrapper}>
          <div className={style.userInfoContainer}>
            <div className={style.userInfoBox}>
              <img className={style.userImg}></img>
              <div className={style.flexBox}>
                <div className={style.userName}>이름</div>
                <div className={style.postDate}>date</div>
              </div>
              <div className={style.locationInput}>지역</div>
            </div>
            <div className={style.activeBox}>
              <Icon iconType='nullScrap' />
              <Icon iconType='nullHeart' />
            </div>
          </div>
          <div className={style.postContainer}>
            <div className={style.postTitle}>제목</div>
            <div className={style.SliderContainer}>
              <PostSlider data={slidesData} />
            </div>

            <div className={style.postContent}>내용</div>
          </div>
        </div>

        <div className={style.sperator}></div>
        <div className={style.commentContainer}>
          <div className={style.commentTitleBox}>
            <div className={style.commentTitle}>댓글</div>
            <div className={style.commentCount}>{commentData.length}</div>
          </div>
          <div className={style.commentBox}>
            {commentData.map((comment, idx) => (
              <div className={style.commentCard} key={idx}>
                <div className={style.userInfoBox}>
                  <img className={style.userImg}></img>
                  <div className={style.flexBox}>
                    <div className={style.userName}>{comment.userName}</div>
                    <div className={style.postDate}>{comment.date}</div>
                  </div>
                </div>
                <div className={style.commentContent}>{comment.content}</div>
              </div>
            ))}
          </div>

          <div className={style.commentActiveBox}>
            <div className={style.commentInput}>
              <input type='text' placeholder='댓글을 작성해보세요.' />
              <button
                className={style.commentBtn}
                onClick={() => console.log('댓글 등록')}
              >
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
