import {action, makeObservable, observable} from 'mobx'
export class LoadingStore {
  constructor(){
    // 参数1：target，把谁变成响应式（可观察）
    // 参数2：指定哪些属性或者方法变成可观察
    makeObservable(this, {
       show: observable,
       loadingToggle: action,
     })
  }
  show = false
  loadingToggle(value){
    this.show = value 
  }
}
const loading = new LoadingStore()
export default loading