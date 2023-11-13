import { useQuery } from "react-query";
import api from '../api'

export const useGetComments = ({ start = 0, limit = 10 }) =>
  useQuery(['getComments', { start, limit }], async () => {
    const { data } = await api.get(`/comments?_start=${start}&_limit=${limit}`);
    return data;
  },
  {
    keepPreviousData: true,
    retry: 3
  }
);

export const useGetDetailComment = (postId) =>
  useQuery(['getDetailComment', postId], async () => {
    const { data } = await api.get(`/comments?postId=${postId}`)
    return data[0];
  },
  {
    retry: 3
  }
);