import './ReviewItem.css'
import {RiStarSFill} from 'react-icons/ri'
const ReviewItem = ({name,date,image,comment}) =>{
    return(
        <div className="rvItem">
            <img  className="rvImgCont" src={`./${image}`} alt={`${image}`}/>
            <div className="rvStars"><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></div>
            <span className="rvName"> {name}</span>
            <span className="rvDate">{date}</span>
            <p className="rvComment">{comment}</p>
        </div>


    )
}

export default ReviewItem;