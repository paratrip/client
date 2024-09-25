export const transformPrice = (price: number) => {
  return new Intl.NumberFormat('ko-KR', {
    currency: 'KRW',
  }).format(price);
};
