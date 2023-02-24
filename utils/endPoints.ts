import { POPULAR } from "./urls";
import { BASE_URL, MOVIE, MATCH_API_KEY, API_KEY } from "@/utils/urls";

export const fetchListUrl = () => {
  return `${BASE_URL}${MOVIE}${POPULAR}${MATCH_API_KEY}${API_KEY}`;
};

export const fetchSingleMovieDetailsUrl = (movieId: string) => {
  return `${BASE_URL}${MOVIE}/${movieId}${MATCH_API_KEY}${API_KEY}`;
};
