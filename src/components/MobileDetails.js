import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  buyMobile,
  sellMobile,
  getAllUsers,
  getSingleUser,
  addUser,
  editUser,
  deleteUser,
} from '../redux/actions/mobile-action';

function MobileDetails({
  buyMobile,
  sellMobile,
  noOfMobiles,
  users,
  getAllUsers,
  getSingleUser,
  addUser,
  editUser,
  user,
  deleteUser,
}) {
  const styles = {
    btn: {
      padding: 30,
      margin: 10,
      borderRadius: 10,
      border: 0,
      cursor: 'pointer',
    },
  };
  return (
    <div>
      <h1>
        Number of Mobiles {noOfMobiles} and Users {users.length} and Details {user.name}
      </h1>
      <button style={styles.btn} onClick={() => buyMobile()}>
        Buy Mobile
      </button>
      <button style={styles.btn} onClick={() => sellMobile()}>
        Sell Mobile
      </button>
      <button style={styles.btn} onClick={() => addUser()}>
        Add User
      </button>
      <button style={styles.btn} onClick={() => getAllUsers()}>
        Get All Users
      </button>
      <button style={styles.btn} onClick={() => getSingleUser(2)}>
        Get Single User
      </button>
      <button style={styles.btn} onClick={() => editUser({name: 'Venkatesh'}, 1)}>
        Edit User
      </button>
      <button style={styles.btn} onClick={() => deleteUser(1)}>
        Delete User
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.users);
  return {
    noOfMobiles: state.noOfMobiles,
    users: state.users,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buyMobile,
      sellMobile,
      getAllUsers,
      getSingleUser,
      addUser,
      editUser,
      deleteUser,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileDetails);
