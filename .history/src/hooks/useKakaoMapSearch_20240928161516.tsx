import { useState, useCallback } from 'react';
import { useKakaoLoader } from './useKakaoLoader'; // 사용자가 정의한 useKakaoLoader 임포트

export const useKakaoMapSearch = (initialKeyword = '') => {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Kakao Maps SDK 로드
  useKakaoLoader();

  const searchPlace = useCallback(searchKeyword => {
    if (!searchKeyword.trim()) {
      setError('키워드를 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setError(null);

    // Kakao Maps SDK가 로드되었는지 확인
    if (window.kakao && window.kakao.maps) {
      const ps = new window.kakao.maps.services.Places();
      ps.keywordSearch(searchKeyword, (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const firstPlace = data[0];
          setResult({
            keyword: searchKeyword,
            lat: firstPlace.y,
            lng: firstPlace.x,
          });
        } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
          setError('검색 결과가 존재하지 않습니다.');
        } else if (status === window.kakao.maps.services.Status.ERROR) {
          setError('검색 중 오류가 발생했습니다.');
        }
        setIsLoading(false);
      });
    } else {
      setError('Kakao Maps SDK가 로드되지 않았습니다.');
      setIsLoading(false);
    }
  }, []);

  return {
    keyword,
    setKeyword,
    result,
    isLoading,
    error,
    searchPlace,
  };
};
