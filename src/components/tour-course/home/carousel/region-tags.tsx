import type { ResponseParaglidingRegion } from './types';

import { useGet } from '@hooks/useGet';
import { END_POINT_API_PARAGLIDING } from '@utils/endpoint/endpoint';
import RegionTagsCarousel from './region-tags.carousel';

export default function RegionTags() {
  const { data, isLoading, isError, error } = useGet<
    ResponseParaglidingRegion[]
  >({
    queryKey: ['region'],
    url: END_POINT_API_PARAGLIDING + '/region',
  });

  return (
    <RegionTagsCarousel
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
    />
  );
}
