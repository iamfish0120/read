import { json } from 'react-router-dom'
import LoadingStatus from '@/store/LoadingStatus';
export const beforeEnter = async ({params,request}) => {
  !request.url.includes('/login') && LoadingStatus.loadingToggle(true)
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(0)
    },1200)
  })
  
  return json({data:'something'},{status:200})
  // throw json(
  //   { message: "email is required" },
  //   { status: 400 },
  // )
}