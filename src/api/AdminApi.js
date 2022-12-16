import axiosClient from "./Client";
export const AdminApi = {
  ListUser: () => {
    const url = `users`;
    return axiosClient.get(url);
  },
  DeleteUser:(body)=>{
    const url = 'users'
    return axiosClient.delete(url,body)
  }
};
