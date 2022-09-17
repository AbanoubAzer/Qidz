import {storeUserSession} from '../Utils/StorageManager';

const users = [{username: 'ivaldi', password: 'testtest'}];

export const loginUser = async (username, password) => {
  const credentials = {
    username: username,
    password: password,
  };
  var userCredentialsCorrect = users.some(user => {
    return JSON.stringify(credentials) === JSON.stringify(user);
  });

  return await new Promise((resolve, reject) => {
    console.log(userCredentialsCorrect);
    if (userCredentialsCorrect == true) {
      const userSession = {
        username: username,
        token: 'the_users_access_token',
        refreshToken: 'the_users_refresh_token',
      };
      saveUser(userSession);
      resolve('success');
    } else {
      reject('Invalid Credentials');
    }
  });
};

const saveUser = async userSession => {
  await storeUserSession(userSession);
};
