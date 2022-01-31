import HTTP from "./http";
import * as apiTypes from "./api";
import { headers } from "./headers";

export default {
  //registration api
  registration: (body: apiTypes.RegisterBody) => {
    return new Promise(async (resolve, reject) => {
      await HTTP.post("api/register", body)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //login api
  login: (body: apiTypes.LoginBody) => {
    return new Promise(async (resolve, reject) => {
      await HTTP.post("api/login", body)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //logout api
  logout: () => {
    return new Promise(async (reslove, reject) => {
      await HTTP.post("api/logout", { headers })
        .then((res) => {
          reslove(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  //edit user api
  editUser: (body: apiTypes.EditUserBody) => {
    return new Promise(async (resolve, reject) => {
      await HTTP.put("api/editUser", body, { headers })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
};
