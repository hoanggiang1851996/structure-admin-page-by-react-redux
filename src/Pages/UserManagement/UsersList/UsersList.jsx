import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, fetchUsersFailure, fetchUsersSuccess } from '../../../Actions/UserActions';
import { Table } from 'antd/lib/index';
import {Link} from 'react-router-dom';

function UsersList(props) {
  const columns = [{
    title: 'No.',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: 'User ID',
    dataIndex: 'userID',
    key: 'userID',
  }, {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  }, {
    title: 'Last Name',
    key: 'lastName',
    dataIndex: 'lastName'
  }, {
    title: 'Role',
    key: 'role',
    dataIndex: 'role'
  }, {
    title: 'Status',
    key: 'status',
    dataIndex: 'status'
  }, {
    title: 'Created at',
    key: 'createdAt',
    dataIndex: 'createdAt'
  }, {
    title: 'Created by',
    key: 'createdBy',
    dataIndex: 'createdBy'
  }, {
    title: 'Approved at',
    key: 'approvedAt',
    dataIndex: 'approvedAt'
  }, {
    title: 'Approved by',
    key: 'approvedBy',
    dataIndex: 'approvedBy'
  }, {
    title: 'Updated at',
    key: 'updatedAt',
    dataIndex: 'updatedAt'
  }, {
    title: 'Updated by',
    key: 'updatedBy',
    dataIndex: 'updatedBy'
  }, {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: (action, user) => <Link to={`/user-management/edit-user/${user.id}`}>Edit</Link>
  }];

  useEffect(() => {
    props.fetchUsers();
    return () => {
      props.fetchUsers();
    }
  }, []);

  const users = props.users

  if (users.length === 0) {
    return (<div>Loading</div>)
  } else {
    return (
      <div>
        <Table columns={columns} dataSource={users} scroll={{ x: 1300 }} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.usersList.users, loading: state.usersList.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => {
      dispatch(fetchUsers()).then((response) => {
        !response.error ? dispatch(fetchUsersSuccess(response.payload.data)) :
          dispatch(fetchUsersFailure(response.payload.data));
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
