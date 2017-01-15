import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import {
  ListGroupItem,
  ListGroup,
  Container
} from 'reactstrap';

class PostList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPost (post) {
    return (
      <ListGroupItem key={post.id}>
        <a href="#" class="list-group-item-action active">
          <h5 class="list-group-item-heading">{post.title}</h5>
        </a>
        <p class="list-group-item-text">{post.body}</p>
        <p class="list-group-item-text">{post.source}</p>
      </ListGroupItem>
    );
  }

  render() {
    const { posts } = this.props.posts;

    return (
      <Container>
        <ListGroup>
          {posts.map(this.renderPost)}
        </ListGroup>
      </Container>
    )
  }

}

function mapStateToProps(state) {
  return {posts: state.posts};
}

export default connect(mapStateToProps,actions)(PostList);
