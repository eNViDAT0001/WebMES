import axiosClient from "./Client";
export const Admin = {
  ListUser: () => {
    const url = `users`;
    return axiosClient.get(url);
  },
  
};
