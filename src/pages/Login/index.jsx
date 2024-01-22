import React, { useEffect, useRef, useState } from 'react'
import { Toast } from 'antd-mobile'
import styles from './index.module.scss'
import iconPath from '@/assets/img/path.png'
import iconEye from '@/assets/img/eye.png'
import rightArrow from '@/assets/img/right_arrow.png'
import { http } from '@/request'

export default function Login() {
  const [active,setActive] = useState(0)
  const tabClick = (val) => {
    setActive(val)
    setName('')
    setEmail('')
    setPassword('')
  }
  const [pwdType,setPwdType] = useState('password')
  const pwdInput = useRef(null)
  const showPwd = () => {
    setPwdType(pre => {
      return pre == 'password' ? 'text' : 'password'
    })
    pwdInput.current.focus()
  }
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const submit = () => {
    let flag = validate()
  }
  const validate = () => {
    if(name == '') {
      Toast.show('用户名不能为空')
      return false
    }
    if(active == 0 && email == '') {
      Toast.show('邮箱不能为空')
      return false
    }
    if(password == '') {
      Toast.show('密码不能为空')
      return false
    }
    if(active == 0 && !(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)) {
      Toast.show('请输入有效的邮箱地址')
      return false
    }
    return true
  }
  useEffect(() => {
    http.get('/ll_activity/gift_game/index.php',{
      login_Key: 'test-flamingo-login-key-abc',
      uin: 6097, //   绑定手机的 4478 4391 4366  没绑 330  ~335
      productID: 136, //66 136 果盘109
      platformType: 102,
      uuid: 'abc',
      version: '5.8.0'
    })
  },[])
  return (
    <div className={styles.login_container}>
      <div className={styles.login_tab}>
        <img className={styles.tab_img} src={iconPath} alt="" />
        <div className={`${styles.tab_item} ${active==0? styles.active:''}`} onClick={() => tabClick(0)}>Registration</div>
        <div className={`${styles.tab_item} ${active==1? styles.active:''}`} onClick={() => tabClick(1)}>Login</div>
      </div>
      <div className={styles.form}>
        <div className={styles.form_item}>Full name</div>
        <input className={styles.input} type="text" value={name} onChange={(event) => setName(event.target.value.trim())} placeholder='JohnWick'/>

        {
          active == 0 &&
          <>
            <div className={styles.form_item}>Your e-mail</div>
            <input className={styles.input} type="text" value={email} onChange={(event) => setEmail(event.target.value.trim())} placeholder='johnwick@gmail.com'/>
          </>
        }

        <div className={styles.form_item}>Password</div>
        <div className={styles.input_container}>
          <input
            value={password}
            type={pwdType}
            ref={pwdInput}
            placeholder='#######'
            className={`${styles.input} ${styles.input_pwd}`}
            onChange={(event) => setPassword(event.target.value.trim())}
          />
          {
            pwdType == 'password' ? 
            <div className={`${styles.show_password} ${styles.mask}`} onClick={showPwd}></div> :
            <img className={styles.show_password} src={iconEye} alt=""  onClick={showPwd}/> 
          }
        </div>

        <div className={styles.btn} onClick={submit}>
          <span>{ active == 0 ? 'Register now' : 'Login' }</span>
          <img className='test' src={rightArrow} alt="" />
        </div>
        <div className={styles.tips}>
          {
            active == 0 ? 'Already have an account? ' : 'Not a user? '
          }
          <span onClick={() =>tabClick(active == 0 ? 1 : 0)}>{active == 0 ? 'Login' : 'Register now'}</span>
        </div>
      </div>
    </div>
  )
}
