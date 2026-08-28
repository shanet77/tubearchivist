import APIClient from '../../functions/APIClient';
import { DownloadResponseType } from '../../pages/Download';

const loadDownloadQueue = async (
  page: number,
  channelId: string | null,
  vid_type: string | null,
  errorFilterFromUrl: string | null,
  showIgnored: boolean,
  search: string,
  published_gte: string | null,
  published_lte: string | null,
) => {
  const searchParams = new URLSearchParams();

  if (page) searchParams.append('page', page.toString());
  if (channelId) searchParams.append('channel', channelId);
  if (vid_type) searchParams.append('vid_type', vid_type);
  if (search) searchParams.append('q', encodeURIComponent(search));
  if (errorFilterFromUrl !== null) searchParams.append('error', errorFilterFromUrl);
  if (published_gte) searchParams.append('published_gte', published_gte);
  if (published_lte) searchParams.append('published_lte', published_lte);
  searchParams.append('filter', showIgnored ? 'ignore' : 'pending');

  const endpoint = `/api/download/${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;

  return APIClient<DownloadResponseType>(endpoint);
};

export default loadDownloadQueue;
