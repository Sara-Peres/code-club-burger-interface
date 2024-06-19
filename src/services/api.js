import axios from 'axios'

const apiCoderBurger = axios.create({
  baseURL: 'https://code-club-burger-production.up.railway.app/'
})

apiCoderBurger.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiCoderBurger
