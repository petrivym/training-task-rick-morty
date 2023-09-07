import axios, { AxiosInstance, AxiosRequestConfig, isAxiosError } from "axios";


export const rickAndMortyApi = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    Accept: "application/json"
  },
  timeout: 5000
})

export const makeRequest = async<D, C = AxiosRequestConfig> (
  method: string,
  api: AxiosInstance,
  url: string,
  data?:C
) => {
  try{
    const response = await api<D>({method, url, ...data});

    return response.data
  }catch(error){
    if(isAxiosError(error)){
      throw(error)
    } 

    throw new Error("Unknown Error")
  }
}






































// import axios, { AxiosInstance, AxiosRequestConfig, isAxiosError} from "axios";

// export const rickAndMortyApi: AxiosInstance = axios.create({
//   baseURL: "https://rickandmortyapi.com/api",
//   headers: {
//     Accept: "application/json"
//   },
//   timeout:5000
// });

// export const makeRequest = async <T, R = AxiosRequestConfig>(
//   api: AxiosInstance,
//   method: string,
//   url: string,
//   data?: R
// ): Promise<T | undefined> => {
//   try {
//     const response = await api<T>({ url, method, ...data });

//     return response.data;
//   } catch (error: unknown) {
//     if (isAxiosError<{ error?: { message: string } }>(error)) {
//       throw error;
//     }

//     throw new Error("unknown error");
//   }
// };
