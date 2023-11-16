import axios from 'axios';
import React from 'react'

const url = 'http://todo.test/api/auth/login';
interface authProps {
    email: string,
    password: string,
}
const authRequest = ({email, password}: authProps) => {
  return axios.post(url, {
    email: email,
    password: password,
  });
}

export default authRequest