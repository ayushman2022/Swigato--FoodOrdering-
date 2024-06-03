import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For Better Experience Download<br/> Swigato App</p>
        <div className="appdownloadplatforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
