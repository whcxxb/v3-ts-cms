//保存stroe数据
import store from '@/store'
export default function setupStroe() {
  store.dispatch('loadLocalLogin')
}
