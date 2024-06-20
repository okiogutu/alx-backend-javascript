function getTokenFromApi(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      return resolve({ data: 'Successful response from the API' });
    } else {
      reject();
    }
  });
}

module.exports = getTokenFromApi;
