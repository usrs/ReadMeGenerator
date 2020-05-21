const api = {
  getUser(username) {
    axios.get('https://api.github.com/users/username', {
      headers: {
        'Authorization': 'PERSONAL_ACCESS_TOKEN'
      }
    })
  }
};

module.exports = api;

// somthing is new!