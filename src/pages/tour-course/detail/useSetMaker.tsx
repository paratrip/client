import { useEffect, useState } from 'react';

export const useSetMaker = (
  keyWord: string,
  onLat: React.Dispatch<React.SetStateAction<number>>,
  onLng: React.Dispatch<React.SetStateAction<number>>
) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    if (isLoading) return;

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keyWord, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        onLat(Number(data[0].y));
        onLng(Number(data[0].x));
      }
    });
  }, [keyWord, isLoading]);

  return;
};
