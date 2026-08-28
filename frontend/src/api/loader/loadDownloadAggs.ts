import APIClient from '../../functions/APIClient';

type DownloadAggsBucket = {
  key: string[];
  key_as_string: string;
  doc_count: number;
};

export type DownloadAggsType = {
  doc_count_error_upper_bound: number;
  sum_other_doc_count: number;
  buckets: DownloadAggsBucket[];
};

const loadDownloadAggs = async (
  showIgnored: boolean,
  published_gte: string | null,
  published_lte: string | null,
) => {
  const searchParams = new URLSearchParams();
  searchParams.append('filter', showIgnored ? 'ignore' : 'pending');
  if (published_gte) searchParams.append('published_gte', published_gte);
  if (published_lte) searchParams.append('published_lte', published_lte);
  return APIClient<DownloadAggsType>(
    `/api/download/aggs/${searchParams.toString() ? `?${searchParams.toString()}` : ''}`,
  );
};

export default loadDownloadAggs;
