import Header from '@components/layouts/Header';
import style from './MyPageScrapPost.module.css';
import CustomPost from '@components/Community/Post';

const MyPageScrapPost = () => {
  const postMineData = [
    // {
    //   userName: '나무의자1',
    //   userImg: '',
    //   postImg: '',
    //   postTitle:
    //     '1이 풍경 보세요!! 정말 좋은 경험을 간직해보세요11이 풍경 보세요!! 정말 좋은 경험을 간직해보세요11이 풍경 보세요!! 정말 좋은 경험을 간직해보세요11이 풍경 보세요!! 정말 좋은 경험을 간직해보세요1',
    //   postDate: '1일 전',
    //   location: '지역1',
    //   postStatus: {
    //     comment: 1,
    //     heart: 2,
    //     scrap: 3,
    //   },
    // },
    // {
    //   userName: '나무의자2',
    //   userImg: '',
    //   postImg: '',
    //   postTitle: '2이 풍경 보세요!! 정말 좋은 경험을 간직해보세요2',
    //   postDate: '2일 전',
    //   location: '지역2',
    //   postStatus: {
    //     comment: 1,
    //     heart: 2,
    //     scrap: 3,
    //   },
    // },
  ];
  return (
    <>
      <Header type='back' title='스크랩 게시글' />
      <div className={style.postContainer}>
        <CustomPost data={postMineData} postType={'MY'} />
      </div>
    </>
  );
};

export default MyPageScrapPost;
