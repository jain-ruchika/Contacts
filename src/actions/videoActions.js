import {FETCH_VIDEOS, SELECTED_VIDEO, API_KEY} from './types';
import YTSearch from "youtube-api-search";

export const fetchVideos =() => dispatch => {
    YTSearch({ key: API_KEY, term: "sachin" }, videos => {
        dispatch({
            type: FETCH_VIDEOS,
            payload: videos
          })
        // this.setState({ videos: video });
        // tslint:disable-next-line:no-console
        console.log("====================================");
        // tslint:disable-next-line:no-console
        console.log(videos);
        // tslint:disable-next-line:no-console
        console.log("====================================");
      });
}