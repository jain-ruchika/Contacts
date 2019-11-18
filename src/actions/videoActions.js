import {FETCH_VIDEOS, API_KEY} from './types';
import YTSearch from "youtube-api-search";

export const fetchVideos =() => dispatch => {
    YTSearch({ key: API_KEY, term: "sachin" }, videos => {
        dispatch({
            type: FETCH_VIDEOS,
            payload: videos
          })
      });
}