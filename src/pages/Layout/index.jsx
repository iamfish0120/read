import React from 'react'
import { Outlet } from 'react-router-dom'
import Tabbar from '@/components/Tabbar'
import styles from './index.module.scss'
export default function index() {
  return (
    <div className={styles.layout}>
      <Outlet/>
      <Tabbar/>
    </div>
  )
}
