import Api from '@/services/Api'

export default {
    register (credentials) {
      return Api().post('register', credentials)
    },
    login (credentials) {
      return Api().post('login', credentials)
    },
    option (optionChoices) {
      return Api().post('options', optionChoices)
    },
    product () {
      return Api().get('products')
    }
  }