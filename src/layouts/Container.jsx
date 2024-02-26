import { Outlet } from 'react-router-dom'
import Header from './Headers'

export default function Container(){
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}