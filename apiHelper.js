let baseApiUrl = 'https://wise-quarter-api-server.herokuapp.com';
let baseApiUrlLocal = 'http://localhost:3000';

module.exports.getAllUsers = (token) => {
  return new Promise((resolve, reject) => {
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      Authorization: `Bearer ${token}`,
    });

    var config = {
      method: 'get',
      url: baseApiUrl + '/user/all',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error.message);
      });
  });
};

module.exports.getUserById = (isAuthActive, token, id) => {
  return new Promise((resolve, reject) => {
    var axios = require('axios');
    var qs = require('qs');
    var data;
    if (isAuthActive) {
      data = qs.stringify({
        Authorization: `Bearer ${token}`,
      });
    } else {
      data = qs.stringify({});
    }

    var config = {
      method: 'get',
      url: baseApiUrl + '/user/' + id,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error.message);
      });
  });
};

module.exports.login = (email, password) => {
  return new Promise((resolve, reject) => {
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      email: email,
      password: password,
    });
    var config = {
      method: 'post',
      url: baseApiUrl + '/user/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        resolve(response.data.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

module.exports.addUser = (email, password, name, surName, age) => {
  return new Promise((resolve, reject) => {
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      email: email,
      password: password,
      name: name,
      surName: surName,
      age: age,
    });
    var config = {
      method: 'post',
      url: baseApiUrl + '/user',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

module.exports.updateUser = (email, name, surName, age, id, token) => {
  return new Promise((resolve, reject) => {
    var axios = require('axios');
    var qs = require('qs');
    var data = qs.stringify({
      email: email,
      name: name,
      surName: surName,
      age: '25',
    });
    var config = {
      method: 'put',
      url: baseApiUrl + '/user/' + id,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};

module.exports.deleteUser = (id, token) => {
  return new Promise((resolve, reject) => {
    var axios = require('axios');
    var qs = require('qs');
    var config = {
      method: 'delete',
      url: baseApiUrl + '/user/' + id,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    axios(config)
      .then(function (response) {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
