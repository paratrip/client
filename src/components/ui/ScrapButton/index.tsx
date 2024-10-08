import { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useFetch } from '@hooks/useFetch';
import { END_POINT } from '@utils/endpoint/endpoint';

interface ScrapButtonProps {
  initialScrapState: boolean;
  onScrapChange: (newState: boolean) => void;
  onScrapSuccess: () => void;
}

const ScrapButton: React.FC<ScrapButtonProps> = ({
  initialScrapState,
  onScrapChange,
  onScrapSuccess,
}) => {
  const [isScraped, setIsScraped] = useState(initialScrapState);

  const memberSeq = localStorage.getItem('memberSeq');
  const boardSeq = location.pathname.split('/:').pop();

  const fetchScrap = useFetch();

  useEffect(() => {
    setIsScraped(initialScrapState);
  }, [initialScrapState]);

  const handleScrapState = async () => {
    const newState = !isScraped;
    setIsScraped(newState);
    onScrapChange(newState);
    await handleScrap(newState);
  };

  // [ ] 스크랩 핸들러
  const handleScrap = async (newState: boolean) => {
    try {
      if (newState === true) {
        const response = await fetchScrap({
          url: `${END_POINT}/board-scrap`,
          method: 'post',
          data: {
            memberSeq,
            boardSeq,
          },
        });
        console.log(response);
      } else {
        const response = await fetchScrap({
          url: `${END_POINT}/board-scrap`,
          method: 'delete',
          data: {
            memberSeq,
            boardSeq,
          },
        });
        console.log(response);
      }
      onScrapSuccess(); // API 통신 성공 후 콜백 함수 호출
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