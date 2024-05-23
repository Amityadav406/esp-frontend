import axios from 'axios';

const responseFormatter = (status, data, error) => {
  return { status, data, error };
};

export const getReq = async (route_url) => {
  return await axios
    .get(route_url, {
      headers: {
        Accept: 'application/json',
      },
    })
    .then((response) => {
      return responseFormatter(true, response.data, null);
    })
    .catch((e) => {
      if (e) {
        return responseFormatter(false, null, e?.response?.data || null);
      } else {
        return responseFormatter(false, null, e?.response?.data || null);
      }
    });
};
