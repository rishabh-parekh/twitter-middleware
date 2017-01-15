import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


import {
  ListGroupItem,
  ListGroup,
  Container
} from 'reactstrap';

class CommentList extends Component {
  componentWillMount() {
    this.props.fetchComments();
  }
  renderComment (comment) {
    return (
        <ListGroupItem key={comment.id}>{comment.body}</ListGroupItem>
    );
  }
  render() {
    const { comments } = this.props.comments;

    return (
        <Container>
          <ListGroup>
            {comments.map(this.renderComment)}
          </ListGroup>
      </Container>
    )
  }

}

function mapStateToProps(state) {
  return {comments: state.comments};
}

export default connect(mapStateToProps,actions)(CommentList);
