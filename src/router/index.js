import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Retornos from '@/components/Retorno/Retornos'
import CreateRetorno from '@/components/Retorno/CreateRetorno'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home', //Essa propriedade name é opcional
      component: Home
    },
    {
      path: '/retornos',
      name: 'Retornos', //Essa propriedade name é opcional
      component: Retornos
    },
    {
      path: '/retornos/novo',
      name: 'Criar Novo Retorno', //Essa propriedade name é opcional
      component: CreateRetorno
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Registrar',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Sign In',
      component: Signin
    }
  ],
  mode: 'history'
})
