import React, { Component } from 'react'
import YTSearch from "youtube-api-search";
import Video from '../../components/Video/Video';
import Aux from '../../hoc/Auxi';
import { connect } from 'react-redux';
import {fetchVideos} from "../../actions/videoActions";

 class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }

  API_KEY = "AIzaSyAxA0l-th2-kKHQhso7ohzX3HkuMwh-fNs";
  componentDidMount() {
    this.props.fetchVideos();
    // YTSearch({ key: this.API_KEY, term: "sachin" }, video => {
    //   this.setState({ videos: video });
    //   // tslint:disable-next-line:no-console
    //   console.log("====================================");
    //   // tslint:disable-next-line:no-console
    //   console.log(video);
    //   // tslint:disable-next-line:no-console
    //   console.log("====================================");
    // });
  }

  render() {
    let videos = null;

    if(this.state.videos) {
      videos = this.props.videos.map((video, index) => {
        return <Video title={video.snippet.title} description={video.snippet.description}/>;
      });
    }
    return(
      <Aux>
        {videos}
      </Aux>
    )
}
}
const mapStateToProps = state => ({
  videos: state.videos.items,
});

export default connect(mapStateToProps, {fetchVideos})(Videos);
