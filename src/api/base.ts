import axios, { AxiosRequestHeaders } from 'axios';

class Http {
  baseURL: string | undefined;
  token: string | undefined;

  /* constructor */
  constructor(baseURL: string | undefined, token?: string | undefined) {
    this.baseURL = baseURL;
    if (token) {
      this.token = token;
    }
  }

  /* axiosinstance */
  private createAxios(headerOption: AxiosRequestHeaders | undefined) {
    const axiosApiInstance = axios.create({
      baseURL: `${this.baseURL}`,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headerOption,
      },
    });

    axiosApiInstance.interceptors.request.use(
      async (config) => {
        if (!this.token) {
          return config;
        } else {
          config.headers = {
            Authorization: `Basic ${!this.token}`,
          };
          return config;
        }
      },
      (error) => {
        console.error(error);
        throw new Error(error);
      },
    );
    return axiosApiInstance;
  }

  /* handler */
  protected handleResponse = (response: any) => {
    return response.data;
  };

  protected handleError = (error: any) => {
    console.error(error);
    throw new Error(error);
  };

  /* method */
  protected async get(url: string, formData: any, headerOption?: AxiosRequestHeaders | undefined) {
    console.log(formData);
    const axios = this.createAxios(headerOption);
    return await axios.get(url, { params: formData });
  }

  protected async post(url: string, data: any, headerOption?: AxiosRequestHeaders | undefined) {
    const axios = this.createAxios(headerOption);
    return await axios.post(url, data);
  }

  protected async put(url: string, data: any, headerOption?: AxiosRequestHeaders | undefined) {
    const axios = this.createAxios(headerOption);
    return await axios.put(url, data);
  }

  protected async delete(url: string, data: any, headerOption?: AxiosRequestHeaders | undefined) {
    const axios = this.createAxios(headerOption);
    return await axios.delete(url, { data });
  }
}
export default Http;
