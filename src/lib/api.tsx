import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_APP_TOKEN}`,
  },
  timeout: 5000,
});

const fetchMovies = async (query: string) => {
  const res = await apiClient.get(`${query}`);
  return res.data;
};

const fetchMovieDetails = async (id: string) => {
  const res = await apiClient.get(`/movie/${id}`);
  return res.data;
};

const fetchSearchResults = async (query: string) => {
  const response = await apiClient.get(`/search/movie`, {
    params: { query },
  });
  return response.data;
};

export const useMovie = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id),
  });
};

export const useGetMovies = (query: string) => {
  return useQuery({
    queryKey: ["movies", query],
    queryFn: () => fetchMovies(query),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
};

export const useSearchMovies = (query: string) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => fetchSearchResults(query),
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });
};
