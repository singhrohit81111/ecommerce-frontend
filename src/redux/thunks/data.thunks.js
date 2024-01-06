import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../slices/data.slice';
import {axios} from '@Axios';

export const fetchData = (category) => async (dispatch) => {
  try {
    dispatch(fetchDataStart());

    let apiUrl = '/products';
    if (category) {
      apiUrl += `/?category=${category}`;
    }

    const response = await axios.get(apiUrl);
    const data = await response.data;

    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};
