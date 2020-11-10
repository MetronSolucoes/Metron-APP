import api from '../../api'

const metronAPI = api.create('metron')

const get = async ({ customerId = '', ...params }) => {
  return await metronAPI.get(`/customers/${customerId}`, { params })
}

export default {
  get
}
