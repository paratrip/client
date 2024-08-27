import Header from '@components/layouts/Header';
import style from './Notification.module.css';
import Icon from '@components/ui/Icon';

const Notification = () => {
  const dummyData: { type: string; title: string; content: string }[] = [
    {
      type: 'notiHeart',
      title: '게시글 좋아요',
      content: '[타인 ID] 님께서 “[내 게시글 제목]”에 좋아요를 남겨주셨어요!',
    },
    {
      type: 'notiScrap',
      title: '게시글 스크랩',
      content: '[타인 ID] 님께서 “[내 게시글 제목]”을 스크랩해 가셨어요!',
    },
    {
      type: 'notiComment',
      title: '게시글 댓글',
      content: '[타인 ID] 님께서 “[내 게시글 제목]”에 댓글을 달았어요!',
    },
    {
      type: 'notiStar',
      title: '인기 게시글 선정',
      content:
        '[본인 ID] 님, “[내 게시글 제목]”이 이번 주 인기 게시글에 올라갔습니다!',
    },
  ];
  return (
    <>
      <Header type='back' title='알림' />
      {dummyData.length === 0 ? (
        <div className={style.nonData}>알림이 없습니다.</div>
      ) : (
        <div className={style.notificationContainer}>
          {dummyData.map((data, index) => (
            <div key={index} className={style.notificationBox}>
              <Icon iconType={data.type} />
              <div className={style.notificationTextBox}>
                <div className={style.notificationTitle}>{data.title}</div>
                <div className={style.notificationContent}>{data.content}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Notification;
