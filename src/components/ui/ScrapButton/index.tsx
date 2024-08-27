import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const ScrapButton = () => {
  const [isScraped, setIsScraped] = useState(false);

  const handleScrap = () => {
    setIsScraped(!isScraped);
  };

  return (
    <IconButton onClick={handleScrap} style={{ padding: '0' }}>
      {isScraped ? <BookmarkIcon /> : <BookmarkBorderIcon />}
    </IconButton>
  );
};

export default ScrapButton;
