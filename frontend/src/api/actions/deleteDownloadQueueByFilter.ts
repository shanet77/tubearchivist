import APIClient from '../../functions/APIClient';

type FilterType = 'ignore' | 'pending';

const deleteDownloadQueueByFilter = async (
  filter: FilterType,
  channel: string | null,
  vid_type: string | null,
  published_gte: string | null,
  published_lte: string | null,
) => {
  const searchParams = new URLSearchParams();
  if (filter) searchParams.append('filter', filter);
  if (channel) searchParams.append('channel', channel);
  if (vid_type) searchParams.append('vid_type', vid_type);
  if (published_gte) searchParams.append('published_gte', published_gte);
  if (published_lte) searchParams.append('published_lte', published_lte);

  return APIClient(`/api/download/?${searchParams.toString()}`, {
    method: 'DELETE',
  });
};

export default deleteDownloadQueueByFilter;
