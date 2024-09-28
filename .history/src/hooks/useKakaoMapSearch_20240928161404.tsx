import { useState, useEffect, useCallback } from 'react';

export const useKakaoMapSearch = (initialKeyword = '') => {
  const [keyword, setKeyword] = useState(initialKeyword);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_MAPS_APP_KEY&libraries=services&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        // Kakao Maps API가 로드되었습니다.
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const searchPlace = useCallback(searchKeyword => {
    if (!searchKeyword.trim()) {
      setError('키워드를 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setError(null);

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
  }, []);

  useEffect(() => {
    if (keyword) {
      searchPlace(keyword);
    }
  }, [keyword, searchPlace]);

  return {
    keyword,
    setKeyword,
    result,
    isLoading,
    error,
    searchPlace,
  };
};
