import axiosClient from "./Client";
export const FileApi = {
  UploadNewPicture: (body) => {
    const url = `/files`;
    console.log(body)
    return axiosClient.post(url,body);
  },

};
