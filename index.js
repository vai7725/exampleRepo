const axios = require('axios');

const getURL = 'http://reqres.in/api/users?page=2';
const getData = async (url) => {
  const res = await axios.get(url);
  console.log(res.data);
  console.log('Data Fetched');
};

const postURL = 'https://reqres.in/api/users';
const postData = async (url) => {
  try {
    const res = await axios.post(url, {
      name: 'Vaibhav Prajapat',
      role: 'Web Developer',
    });
    console.log(res.data);
    console.log('Data saved to DB');
  } catch (error) {
    console.log(error);
  }
};

postData(postURL);
