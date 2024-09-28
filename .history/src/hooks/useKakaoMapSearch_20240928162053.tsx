import { useState, useCallback } from 'react';

type SearchResult = {
  keyword: string;
  lat: string;
  lng: string;
};

type UseKaKaoMapSearchReturn = {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  result: SearchResult | null;
  isLoading: boolean;
  error: string | null;
  searchPlace: (searchKeyword: string) => void;
};

export const useKakaoMapSearch = (
  initialKeyword: string
): UseKaKaoMapSearchReturn => {
  const [keyword, setKeyword] = useState<string>(initialKeyword);
  const [result, setResult] = useState<SearchResult>();

  return;
};
