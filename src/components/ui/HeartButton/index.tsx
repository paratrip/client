import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { END_POINT } from '@utils/endpoint/endpoint';
import { useFetch } from '@hooks/useFetch';

interface HeartButtonProps {
  initialHeartState: boolean;
  onHeartChange: (newState: boolean) => void;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  initialHeartState,
  onHeartChange,
}) => {
  const [isHeart, setIsHeart] = useState(initialHeartState);

  const memberSeq = localStorage.getItem('memberSeq');
  const boardSeq = location.pathname.split('/:').pop();

  const fetchHeart = useFetch();

  useEffect(() => {
    setIsHeart(initialHeartState);
  }, [initialHeartState]);

  const handleHeartState = () => {
    const newState = !isHeart;
    setIsHeart(newState);
    onHeartChange(newState);
    handleHeart(newState);
  };

  // [ ] 좋아요 핸들러
  const handleHeart = async (newState: boolean) => {
    try {
      if (newState === true) {
        const response = await fetchHeart({
          url: `${END_POINT}/board-hearts/increase`,
          method: 'post',
          data: {
            memberSeq: memberSeq,
            boardSeq: boardSeq,
          },
        });
        console.log('증가', response);
      } else {
        const response = await fetchHeart({
          url: `${END_POINT}/board-hearts/decrease`,
          method: 'post',
          data: {
            memberSeq: memberSeq,
            boardSeq: boardSeq,
          },
        });
        console.log('감소', response);
      }
    } catch (error) {
      console.log(newState);
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
