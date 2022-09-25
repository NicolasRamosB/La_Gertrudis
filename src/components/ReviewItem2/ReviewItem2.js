import './ReviewItem2.css'
import {RiStarSFill} from 'react-icons/ri'

const ReviewItem2 = ({name,date,image,comment}) =>{
    return(
        <div className="rvItem2">
            <img  className="rvImgCont" src={`./${image}`} alt={`${image}`}/>
            <div className="rvStars2"><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/><RiStarSFill/></div>
            <span className="rvName2"> {name}</span>
            <span className="rvDate2">{date}</span>
            <p className="rvComment2">{comment}</p>
        </div>


    )
}

export default ReviewItem2;