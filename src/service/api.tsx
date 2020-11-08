import axios from 'axios';
import humps from 'humps';
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
    reqConfig.data = humps.decamelizeKeys(reqConfig.data)
    reqConfig.params = humps.decamelizeKeys(reqConfig.params)

    reqConfig.paramsSerializer = (params) => {
      return qs.stringify(params, {
        arrayFormat: 'brackets',
        encode: false,
      })
    }

    return reqConfig
  })

  return api
}

export default { create }