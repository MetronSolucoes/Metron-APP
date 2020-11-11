import api from '../../api'

const metronAPI = api.create('metron')

const get = async ({ customerId = '', ...params }) => {
  return await metronAPI.get(`/customers/${customerId}`, { params })
}

const post = async ({ ...customer }) => {
  return await metronAPI.post('/customers', { customer })
}

const destroy = async ({ customerId = '' }) => {
  return await metronAPI.delete(`/customers/${customerId}`)
}

export default {
  get,
  post,
  destroy
}
