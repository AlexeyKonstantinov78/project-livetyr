/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
import { URL } from './const';
import axios from 'axios';

export async function data(path) {
  try {
    const res = await axios.get(URL + path);
    return res.data;
  } catch (e) {
    console.log(e.message + ' ' + path);
  }
}

export async function dataPost(path, obj) {
  try {
    const data = await axios.post(URL + path, obj);
    return data;
  } catch (error) {
    return error;
  }
}

export async function deleteDataId(id, path = 'cart') {
  try {
    const data = await axios.delete(URL + `${path}/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}
