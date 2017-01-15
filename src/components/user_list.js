import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class UserList extends Component {
  componentWillMount() {
    this.props.fetchHeader();

  }
  renderUser (user) {
    return (
      <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}
        </p>
        <a className="btn btn-primary" href={'http://www.' + user.website}>Website</a>
      </div>
    );
  }
  render() {
    return (
        <div className = "header">
          <h1 class="display-1">{this.props.header.header.title}</h1>
          <h1 class="display-4">{new Date().toLocaleDateString()}</h1>
          <p class="lead">{this.props.header.header.purpose}</p>
        </div>
    )
  }

}

function mapStateToProps(state) {
  return {header: state.header};
}

export default connect(mapStateToProps,actions)(UserList);
