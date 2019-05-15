import Dashboard from '../Pages/DashBoard/Dashboard';

import SystemSetting from '../Pages/SystemSetting/SystemSetting';
import UserManagement from '../Pages/UserManagement/UserManagement';
import RolePermission from '../Pages/RolePermission/RolePermission';
import CreateUser from '../Pages/UserManagement/CreateAndEditUser/CreateAndEditUser';

export default {
  Dashboard: {
    component: Dashboard,
    path: '/'
  },

  UserManagement: {
    component: UserManagement,
    path: '/user-management'
  },

  CreateUser: {
    component: CreateUser,
    path: '/user-management/create-user'
  },

  EditUser: {
    component: CreateUser,
    path: '/user-management/edit-user/:id'
  },

  RolePermission: {
    component: RolePermission,
    path: '/role-permission'
  },

  SystemSetting: {
    component: SystemSetting,
    path: '/system-setting'
  }
};
