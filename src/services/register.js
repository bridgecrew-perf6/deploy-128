import { httpConstants } from "../constants";
import { httpService } from "../utility/httpService";

export default {
  addUser,
  loginUser
};
// function getHeaders() {
//   return {
//     "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON,
//     skip: true,
//     "Access-Control-Allow-Origin": "*",
//     'x-api-key': process.env.REACT_APP_API_KEY
//   };
// }

async function addUser(requestData) {
  let url =
    "https://ml-authentication.herokuapp.com/api/users/v0/auth/register";
    {console.log(url,"-----")}
  return httpService(
    httpConstants.METHOD_TYPE.POST,
    { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
    requestData,
    url
  )
    .then((response) => {
      if (
        !response.success ||
        response.responseCode !== 200 ||
        !response.responseData ||
        response.responseData.length === 0
      )
        return Promise.reject(response);
      return Promise.resolve(response.responseData);
    })
    .catch(function (err) {
      return Promise.reject(err);
    });
}

async function loginUser(requestData) {
    let url =
      "https://ml-authentication.herokuapp.com/api/users/v0/auth/login";
      {console.log(url,"-----")}
    return httpService(
      httpConstants.METHOD_TYPE.POST,
      { "Content-Type": httpConstants.CONTENT_TYPE.APPLICATION_JSON },
      requestData,
      url
    )
      .then((response) => {
        if (
          !response.success ||
          response.responseCode !== 200 ||
          !response.responseData ||
          response.responseData.length === 0
        )
          return Promise.reject(response);
        return Promise.resolve(response.responseData);
      })
      .catch(function (err) {
        return Promise.reject(err);
      });
  }

