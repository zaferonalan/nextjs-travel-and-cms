import Footer from '@/components/sections/footer/Footer'
import Header from '@/components/sections/header/Header'
import React from 'react'

interface RouteLayoutProp{
    children: React.ReactNode
}

const RouteLayout = ({children}: RouteLayoutProp) => {
  return (
    <div>
        <Header/>
        <div className='min-h-screen'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default RouteLayout