import { useState, useCallback } from 'react';

type SearchResult = {
  keyword: string;
  lat: string;
  lng: string;
};

type UseKaKaoMapSearchReturn = {
  keyword: string;
};
