import { createStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { accountLogin, getUserInfo, IaccountLogin, getUserMenus } from '@/service/api/login'
import { setCache,getCache } from '@/utils/cache'
import router from '@/router'
export default createStore({
  state: {
    token: '',
    userinfo: {},
    menus: []
  },
  mutations: {
    setToken(state, token: string) {
      state.token = token
    },
    setUserInfo(state, userinfo: any) {
      state.userinfo = userinfo
    },
    setMenus(state, menus: any) {
      state.menus = menus
    }
  },
  actions: {
    async accountLogin({ commit }, payload: IaccountLogin) {
      //登录
      const res = await accountLogin(payload)
      const { id, token } = res.data
      commit('setToken', token)
      setCache('token', token)
      ElMessage({
        message: '登录成功',
        type: 'success'
      })
      //获取用户信息
      const userinfo = await getUserInfo(id)
      commit('setUserInfo', userinfo.data)
      setCache('userinfo', userinfo.data)

      //获取用户菜单
      const userMenus = await getUserMenus(userinfo.data.role.id)
      commit('setMenus', userMenus.data)
      setCache('menus', userMenus.data)
      //跳转到首页
      router.push('/home')
    },
    //保存stroe数据
    loadLocalLogin({ commit }) {
      const token = getCache('token')
      if(token){
        commit('setToken',token)
      }
      const userinfo = getCache('userinfo')
      if(userinfo){
        commit('setUserInfo',userinfo)
      }
      const menus = getCache('menus')
      if(menus){
        commit('setMenus',menus)
      }
    }
  },
  modules: {}
})
