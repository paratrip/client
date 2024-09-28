export const transformPrice = (price: number | string) => {
  return new Intl.NumberFormat('ko-KR', {
    currency: 'KRW',
  }).format(Number(price));
};
