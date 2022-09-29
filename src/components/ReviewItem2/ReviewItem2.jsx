import './ReviewItem2.css'
import { RiStarSFill } from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';
const ReviewItem2 = ({ name, date, image, comment }) => {
    AOS.init();

    return (<>
        <div data-aos="flip-right"  data-aos-duration="1000"
        data-aos-delay="50"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
            <span className="quotesRight"><img src="../assets/“.png" alt="comillas" /></span>

            <div className="rvItem2">

                <img className="rvImgCont" src={`./${image}`} alt={`${image}`} />
                <div className="rvStars2"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></div>
                <span className="rvName2"> {name}</span>
                <span className="rvDate2">{date}</span>
                <p className="rvComment2">{comment}</p>
            </div>
        </div>

    </>



    )
}

export default ReviewItem2;