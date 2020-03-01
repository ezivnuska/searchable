import {
  Home,
  Quote,
} from 'components'
import api from 'api'

const routes =  [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
  },
  // {
  //   name: 'Quote',
  //   path: '/quote',
  //   exact: true,
  //   component: Quote,
  //   loadData: () => api.getQuote(),
  // },
]

export default routes