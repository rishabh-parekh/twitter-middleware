import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class TweetList extends Component {
  componentWillMount() {
    this.props.fetchTweets();
  }
  renderTweet (tweet) {
    return (
      <div className="card card-block">
        <div>
          <img src={tweet.profile_image_url} class="img-fluid" alt="Responsive image"/>
        </div>
        <h4 className="card-title">{tweet.username}</h4>
        <p className="card-text">{tweet.text}
        </p>
      </div>
    );
  }
  render() {
    const { tweets } = this.props.tweets;
    return (
      <div className = "tweet-list">
        {tweets.map(this.renderTweet)}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {tweets: state.tweets};
}

export default connect(mapStateToProps,actions)(TweetList);
