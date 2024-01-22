import axios from "axios";

// 创建http请求的实例对象
const httpProto = axios.create({
  // timeout: 5000,
  // withCredentials: false,
  // headers: {
  //   'Content-Type': 'application/json;charset=UTF-8',
  //   'Access-Control-Allow-Origin': '*',
  // }
});

// 添加请求拦截器
httpProto.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error)
});

// 添加响应拦截器
httpProto.interceptors.response.use(
  (response) => {
    // 统一处理响应结果
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject(data);
    }
  },
  (error) => {
    // 统一处理错误信息
    return Promise.reject(error);
  }
);

const http =  {
  get(url,params) {
    return httpProto.get(url, {
			params
		})
  },
  post(url,params) {
    return httpProto.post(url, {params})
  }
}


export { http };
