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
};
