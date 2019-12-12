import useFetch from '../lib/utils/useFetch';

function getData(data) {
  if (!data || data.errors) return null;
  return data.data;
}

function getErrorMessage(error, data) {
  if (error) return error.message;
  if (data && data.errors) {
    return data.errors[0].message;
  }
  return null;
}

// eslint-disable-next-line import/prefer-default-export
export const useUserBasicInfo = (id) => {
  const query = `query findUserByID($id: ID!) {
    findUserByID(id: $id ){
      _id
      username
      email
      firstName
      lastName
      avatar
    }
  }`;
  const { data, error } = useFetch(process.env.MP_FAUNADB_API_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.MP_FAUNADB_SECRET_KEY}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { id },
    }),
  });

  return {
    data: getData(data),
    errorMessage: getErrorMessage(error, data),
    error,
  };
};
