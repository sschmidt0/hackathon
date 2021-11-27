export const getCountries = (setCountries) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("https://countriesnow.space/api/v0.1/countries/positions", requestOptions)
    .then(response => response.json())
    .then(result => setCountries(result.data))
    .catch(error => console.log('error', error));
};
