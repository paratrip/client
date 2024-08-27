import Icon from '@components/ui/Icon';
import style from './Post.module.css';
import { TITLE } from '@constants/texts';
import { useNavigate } from 'react-router-dom';

type PostProps = {
  postType: string;
  data: Array<{
    userName: string;
    userImg: string;
    postImg: string;
    postTitle: string;
    postDate: string;
    location: string;
    postStatus: {
      comment: number;
      heart: number;
      scrap: number;
    };
  }>;
};

const CustomPost = (props: PostProps) => {
  const { postType, data } = props;
  const navigate = useNavigate();

  const handleEdit = () => {
    console.log('수정');
  };
  const handleDelete = () => {
    console.log('삭제');
  };

  const handleWritePost = () => {
    console.log('글쓰기');
    navigate('/community/write');
  };

  const handleOnTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div style={{ minHeight: '450px' }}>
      {data.length === 0 ? (
        <div className={style.noData}>
          {postType === 'ALL'
            ? TITLE.COMMUNITY.NODATA.ALL
            : TITLE.COMMUNITY.NODATA.ALL}
        </div>
      ) : (
        data.map((post, index) => (
          <div key={index} className={style.postBox}>
            <div className={style.post}>
              <div className={style.postInfo}>
                <div className={style.textInfo}>
                  <div className={style.userInfo}>
                    <img
                      className={style.userImg}
                      src={post.userImg}
                      alt='userImg'
                    />
                    <div className={style.userTextBox}>
                      <p className={style.userName}>{post.userName} 님</p>
                      <p className={style.postDate}>{post.postDate}</p>
                    </div>
                  </div>
                  <h1 className={style.postTitle}>{post.postTitle}</h1>
                  <p className={style.postLocation}>{post.location}</p>
                  {postType === 'MY' && (
                    <div className={style.postStatusContainer}>
                      <div className={style.postStatus}>
                        <Icon iconType='comment' />
                        <p className={style.buttonText}>
                          {post.postStatus.comment}
                        </p>
                      </div>
                      <div className={style.postStatus}>
                        <Icon iconType='heart' />
                        <p className={style.buttonText}>
                          {post.postStatus.heart}
                        </p>
                      </div>
                      <div className={style.postStatus}>
                        <Icon iconType='scrap' />
                        <p className={style.buttonText}>
                          {post.postStatus.scrap}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                {post.postImg && (
                  <img
                    className={postType === 'MY' ? style.myPostImg : ''}
                    src={post.postImg}
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
                        {post.postStatus.comment}
                      </p>
                    </button>
                    <button className={style.button}>
                      <Icon iconType='heart' />
                      <p className={style.buttonText}>
                        {post.postStatus.heart}
                      </p>
                    </button>
                    <button className={style.button}>
                      <Icon iconType='scrap' />
                      <p className={style.buttonText}>
                        {post.postStatus.scrap}
                      </p>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className={`${style.button} ${style.myPostBtn}`}
                      onClick={handleEdit}
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
        <button onClick={handleOnTop}>
          <Icon iconType='topArrow'></Icon>
        </button>
      </div>
    </div>
  );
};

export default CustomPost;
