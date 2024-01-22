import { createContext, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import LoadingStatus from '@/store/LoadingStatus';
import router from '@/router'
import { Toast } from 'antd-mobile';

Toast.config({
  duration: 2000, // 持续时间（单位：秒）
  position: 'bottom', // 弹出位置（可选值：top、middle、bottom）
});
export const AppContext = createContext()
function App() {
  return (
    <>
      <AppContext.Provider value={LoadingStatus}>
        <RouterProvider router={router}/>
      </AppContext.Provider>
    </>
  )
}

export default App
