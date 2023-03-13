import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React,{useState} from "react";

import "./listItem.scss";

const ListItem = ({index}) => {
  const [isHovered, setIsHovered] = useState(false)

  const trailer =
  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";


  return (
    <div className="listItem" style={{left: isHovered && index * 225 + index * 2.5 }} onMouseEnter={()=> setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}>
      <img
        src="https://image.airtel.tv/HUNGAMA/HUNGAMA_MOVIE_66792219/LANDSCAPE_169/66792219_1280x720.jpg"
        alt="CardImage"
      />
      {isHovered && (<>
      <video src={trailer} autoPlay={true} loop/>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownAltOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>2008</span>
        </div>
        <div className="desc">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. 
        </div>
        <div className="genre">Action</div>
      </div>
      </>
      )}
    </div>
  );
};

export default ListItem;
