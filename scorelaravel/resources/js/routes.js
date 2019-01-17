

import Register from './components/Register'
import LogIn from './components/LogIn'
import LogOut from './components/LogOut'
import App from './components/App'
import Home from './components/Home'


const routes = [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogOut
    },
    {
      path: '/app',
      name: 'app',
      component: App
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
  export default routes
