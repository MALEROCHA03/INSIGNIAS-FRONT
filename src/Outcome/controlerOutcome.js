////link para post
const API_URLP = "http://localhost:3005/api/agora";



export const listOutcomes = async (id) => {
  return await fetch(`${API_URLP}/get-outcome/${id}`);
}; 

export const evaluate = async (id,array) => {
  return await fetch(`${API_URLP}/update-outcome/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "result": String(array).trim(),
    })
  });
};

// export const pruebaone = async (id) => {
//   return await fetch(API_URL2, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       "id": String(id.id).trim(),
//     })
//   });
// };
