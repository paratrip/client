import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { END_POINT } from '@utils/endpoint/endpoint';
import { useFetch } from '@hooks/useFetch';
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

const HeartButton = ({ data }: { data: PostData | null }) => {
  const [isHeart, setIsHeart] = useState(false);

  const memberSeq = localStorage.getItem('memberSeq');
  const boardSeq = location.pathname.split('/:').pop();

  const fetchHeart = useFetch();

  const handleHeartState = () => {
    setIsHeart(!isHeart);
    handleHeart();
  };

  useEffect(() => {
    if (data?.countInfo?.heart === true) {
      setIsHeart(true);
      console.log('좋아요되어있음');
    }
  }, []);

  const handleHeart = async () => {
    try {
      if (isHeart === false) {
        const response = await fetchHeart({
          url: `${END_POINT}/board-hearts/increase`,
          method: 'post',
          data: {
            memberSeq: memberSeq,
            boardSeq: boardSeq,
          },
        });

        console.log(response);
        return;
      } else {
        const response = await fetchHeart({
          url: `${END_POINT}/board-hearts/decrease`,
          method: 'post',
          data: {
            memberSeq: memberSeq,
            boardSeq: boardSeq,
          },
        });

        console.log(response);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <IconButton onClick={handleHeartState} style={{ padding: '0' }}>
      {isHeart ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};

export default HeartButton;
