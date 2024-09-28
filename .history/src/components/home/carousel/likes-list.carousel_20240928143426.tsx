import type { ResponseParagliding } from './types';

import { useGet } from '@hooks/useGet';
import { END_POINT_API_PARAGLIDING } from '@utils/endpoint/endpoint';
import CardCarousel from './card.carousel';

export default function LikesList() {
  const { data, isLoading, isError, error } = useGet<ResponseParagliding[]>({
    queryKey: ['region'],
    url: END_POINT_API_PARAGLIDING + '/region',
  });

  return (
    <CardCarousel
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
}
