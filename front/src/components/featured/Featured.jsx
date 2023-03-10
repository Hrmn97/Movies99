import React from 'react'

import "./featured.scss"

import {InfoOutlined,PlayArrow} from "@material-ui/icons";

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === "movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="https://wallpaperaccess.com/full/2005064.jpg" alt="featuredImage"/>
    
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