// locationUtils.ts

// 지역 코드와 한글 이름을 매핑하는 타입
type LocationMap = {
  [key: string]: string;
};

// 지역 데이터 아이템의 타입
interface LocationItem {
  region: string;
}

// 지역 코드와 한글 이름 매핑
const locationMap: LocationMap = {
  YI: '용인',
  PC: '평창',
  BR: '보령',
  DY: '단양',
  GOKS: '곡성',
  YY: '영월',
  GUNS: '군산',
  HC: '합천',
  NH: '남해',
  YS: '여수',
};

/**
 * 지역 코드를 한글 이름으로 변환하는 함수
 * @param code 지역 코드
 * @returns 한글 지역 이름 또는 원래 코드
 */
export const getLocationName = (code: string): string => {
  return locationMap[code] || code;
};

/**
 * LocationItem 배열의 region 값을 한글 이름으로 변환하는 함수
 * @param items LocationItem 배열
 * @returns 변환된 LocationItem 배열
 */
export const convertLocationItems = (items: LocationItem[]): LocationItem[] => {
  return items.map(item => ({
    ...item,
    region: getLocationName(item.region),
  }));
};

/**
 * 단일 LocationItem의 region 값을 한글 이름으로 변환하는 함수
 * @param item LocationItem
 * @returns 변환된 LocationItem
 */
export const convertLocationItem = (item: LocationItem): LocationItem => {
  return {
    ...item,
    region: getLocationName(item.region),
  };
};
