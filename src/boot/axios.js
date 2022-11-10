import { boot } from 'quasar/wrappers'
import axios from 'axios'

let api = ""
if (process.env.DEV) {
  api = axios.create({ baseURL: 'http://localhost:8000' })
}else{
  api = axios.create({ baseURL: '' })
}

export default boot(({ app }) => {

  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api

})

export { api }
