import axiosClient from "./Client";
export const UserApi = {
  DetailUser: (id) => {
      const url = `users/${id}`;
      return axiosClient.get(url).catch((err)=> err);
    
  },
};
