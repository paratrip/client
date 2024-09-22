import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useFetch } from '@hooks/useFetch';
import { END_POINT } from '@utils/endpoint/endpoint';
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

const ScrapButton = ({ data }: { data: PostData | null }) => {
  const [isScraped, setIsScraped] = useState(false);

  const memberSeq = localStorage.getItem('memberSeq');
  const boardSeq = location.pathname.split('/:').pop();

  const fetchScrap = useFetch();

  const handleScrapState = () => {
    setIsScraped(!isScraped);
    handleScrap();
  };

  useEffect(() => {
    if (data?.countInfo?.scrap === true) {
      setIsScraped(true);
      console.log('스크랩되어있음');
    }
  }, []);

  // [ ] 스크랩 핸들러
  const handleScrap = async () => {
    try {
      if (isScraped === false) {
        const response = await fetchScrap({
          url: `${END_POINT}/board-scrap`,
          method: 'post',
          data: {
            memberSeq: memberSeq,
            boardSeq: boardSeq,
          },
        });
        console.log(response);
        return;
      } else {
        const response = await fetchScrap({
          url: `${END_POINT}/board-scrap`,
          method: 'delete',
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
    <IconButton onClick={handleScrapState} style={{ padding: '0' }}>
      {isScraped ? <BookmarkIcon /> : <BookmarkBorderIcon />}
    </IconButton>
  );
};

export default ScrapButton;
