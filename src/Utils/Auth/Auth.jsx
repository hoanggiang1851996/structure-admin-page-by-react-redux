const fakeAuth = {
  getToken() {
    return localStorage.getItem('TokenUser');
  }
}

export default fakeAuth;