import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  render() {
    // let users = this.props.users.map(user => <li>{user.username}</li>)

    return (
      <div>
        <ul>
          {this.props.userCount}
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length 
  }
}

export default connect(mapStateToProps)(Users)
