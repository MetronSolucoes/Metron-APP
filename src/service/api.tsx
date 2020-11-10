import axios from 'axios';
import qs from 'qs';
import { getBaseUrl } from './env';
import * as service from './index';

export const create = (projectTag: any, treatError = true) => {
	let api = axios.create({ baseURL: getBaseUrl(projectTag) })

	api.interceptors.request.use((reqConfig) => {
   
		const authToken = service.metron.auth.getToken()
    
		if (authToken) {
			reqConfig.headers.Authorization = `${authToken}`
		}

		reqConfig.headers.crossDomain = true

    reqConfig.paramsSerializer = (params) => {
      return qs.stringify(params, {
        arrayFormat: 'brackets',
        encode: false,
      })
    }

    return reqConfig
  })

  api.interceptors.response.use(
    (resp) => resp,
    (error) => {
      return Promise.reject(error)
    },
  )

  return api
}

export default { create }