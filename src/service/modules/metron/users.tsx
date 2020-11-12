import api from '../../api'

const metronAPI = api.create('metron')

const get = async ({ userId = '', ...params }) => {
  return await metronAPI.get(`/users/${userId}`, { params })
}

const post = async ({ ...user }) => {
  return await metronAPI.post('/users', { user })
}

const put = async ({ userId = '', ...user }) => {
  return await metronAPI.put(`/users/${userId}`, { user })
}

const destroy = async ({ userId = '' }) => {
  return await metronAPI.delete(`/users/${userId}`)
}

export default {
  get,
  post,
  put,
  destroy
}
