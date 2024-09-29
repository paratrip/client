import Header from '@components/layouts/Header';
import style from './Notification.module.css';
import Icon from '@components/ui/Icon';
import { useEffect, useState, useMemo } from 'react';
import { useFetch } from '@hooks/useFetch';
import { END_POINT } from '@utils/endpoint/endpoint';

interface Alarm {
  type: string;
  userId: string;
  title: string;
}

interface MappedAlarm {
  type: string;
  title: string;
  content: string;
}

const Notification = () => {
  const fetchNoti = useFetch();
  const memberSeq = localStorage.getItem('memberSeq');
  const [alarmList, setAlarmList] = useState<Alarm[]>([]);
  const getNotification = async () => {
    try {
      const response = await fetchNoti({
        url: `${END_POINT}/alarm?memberSeq=${memberSeq}`,
        method: 'get',
      });
      console.log(response);
      const { status, data } = response;
      if (status === 200 && Array.isArray(data)) {
        const lastestData = data.reverse();
        setAlarmList(lastestData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNotification();
  }, []);

  const mappingData = useMemo(() => {
    return alarmList.map((alarm): MappedAlarm => {
      let title: string;
      let content: string;

      switch (alarm.type) {
        case 'HEART':
          title = '게시글 좋아요';
          content = `${alarm.userId}님께서 "${alarm.title}"에 좋아요를 남겨주셨어요!`;
          break;
        case 'SCRAP':
          title = '게시글 스크랩';
          content = `${alarm.userId}님께서 "${alarm.title}"을 스크랩해 가셨어요!`;
          break;
        case 'COMMENT':
          title = '게시글 댓글';
          content = `${alarm.userId}님께서 "${alarm.title}"에 댓글을 달았어요!`;
          break;
        case 'POPULARITY':
          title = '인기 게시글 선정';
          content = `${alarm.userId}님, "${alarm.title}"이 이번 주 인기 게시글에 올라갔습니다!`;
          break;
        default:
          title = '알림';
          content = '새로운 알림이 있습니다.';
      }

      return {
        type: `noti${alarm.type}`,
        title,
        content,
      };
    });
  }, [alarmList]);

  return (
    <>
      <Header type='back' title='알림' />
      {mappingData.length === 0 ? (
        <div className={style.nonData}>알림이 없습니다.</div>
      ) : (
        <div className={style.notificationContainer}>
          {mappingData.map((data, index) => (
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
