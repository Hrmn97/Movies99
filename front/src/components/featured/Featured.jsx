import React from 'react'

import {InfoOutlined,PlayArrow} from "@material-ui/icons";

const Featured = () => {
  return (
    <div className='featured'>
    <img  src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="featuredImage"/>
    
        <div className='info'>
        <img
          src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
          alt="infoImage"
        />
        <span className='desc'>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
        </span>
        <div className='buttons'>
            <button className='play'><PlayArrow /><span>Play</span></button>
            <button className='more'><InfoOutlined /><span>Info</span></button>
        </div>
        </div>
    </div>
  )
}

export default Featured