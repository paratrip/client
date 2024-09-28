import { useState, useCallback, useEffect } from 'react';
import { useKakaoLoader } from './useKaKaoLoader';

// 검색 결과 타입 정의
interface SearchResult {
  keyword: string;
  lat: string;
  lng: string;
}

// 커스텀 훅의 반환 타입 정의
interface UseKakaoMapSearchReturn {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  result: SearchResult | null;
  isLoading: boolean;
  error: string | null;
  searchPlace: (searchKeyword: string) => void;
}

export const useKakaoMapSearch = (
  initialKeyword: string = ''
): UseKakaoMapSearchReturn => {
  const [keyword, setKeyword] = useState<string>(initialKeyword);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { loading: isLoadingSDK, error: sdkError } = useKakaoLoader();

  const searchPlace = useCallback(
    (searchKeyword: string) => {
      if (!searchKeyword.trim() || isLoadingSDK) {
        return;
      }

      setIsLoading(true);
      setError(null);

      if (window.kakao && window.kakao.maps) {
        const ps = new window.kakao.maps.services.Places();
        ps.keywordSearch(
          searchKeyword,
          (data: any[], status: kakao.maps.services.Status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const firstPlace = data[0];
              setResult({
                keyword: searchKeyword,
                lat: firstPlace.y,
                lng: firstPlace.x,
              });
            } else if (
              status === window.kakao.maps.services.Status.ZERO_RESULT
            ) {
              setError('검색 결과가 존재하지 않습니다.');
            } else if (status === window.kakao.maps.services.Status.ERROR) {
              setError('검색 중 오류가 발생했습니다.');
            }
            setIsLoading(false);
          }
        );
      } else {
        setError('Kakao Maps SDK가 로드되지 않았습니다.');
        setIsLoading(false);
      }
    },
    [isLoadingSDK]
  );

  useEffect(() => {
    if (sdkError) {
      setError('Kakao Maps SDK 로딩 중 오류가 발생했습니다.');
    }
  }, [sdkError]);

  useEffect(() => {
    if (initialKeyword && !isLoadingSDK) {
      searchPlace(initialKeyword);
    }
  }, [initialKeyword, isLoadingSDK, searchPlace]);

  return {
    keyword,
    setKeyword,
    result,
    isLoading: isLoading || isLoadingSDK,
    error,
    searchPlace,
  };
};
