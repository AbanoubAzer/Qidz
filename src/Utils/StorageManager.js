import EncryptedStorage from 'react-native-encrypted-storage';

export const storeUserSession = async userSession => {
  try {
    await EncryptedStorage.setItem('user_session', JSON.stringify(userSession));
  } catch (error) {
    console.log(error);
  }
};

export const retrieveUserSession = async () => {
  try {
    const session = await EncryptedStorage.getItem('user_session');

    if (session !== undefined) {
      return session;
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeUserSession = async () => {
  try {
    await EncryptedStorage.removeItem('user_session');
    return true;
  } catch (error) {
    console.log(error);
  }
};
