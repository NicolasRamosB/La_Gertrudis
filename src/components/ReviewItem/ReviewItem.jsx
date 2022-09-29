import './ReviewItem.css'
import { RiStarSFill } from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ReviewItem = ({ name, date, image, comment }) => {
    AOS.init();


    return (<>
        <div data-aos="flip-left"  data-aos-duration="1000"
        data-aos-delay="50"
    data-aos-easing="ease"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
            <span className="quotesRight"><img src="../assets/“.png" alt="comillas" /></span>

            <div className="rvItem" >
                <img className="rvImgCont" src={`./${image}`} alt={`${image}`} />
                <div className="rvStars"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></div>
                <span className="rvName"> {name}</span>
                <span className="rvDate">{date}</span>
                <p className="rvComment">{comment}</p>
            </div>
        </div>
    </>



    )
}

export default ReviewItem;