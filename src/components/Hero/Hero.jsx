import "../Hero/assets/css/Hero.css"
import loc from "../Hero/assets/images/loc.svg"
export default function Hero(props) {
    return(
        <section>
            <div className="hero">
                <img className="hero--image" src={props.imageUrl} alt="" />
                <div className="hero--container">
                    <div className="hero--details">
                        <div><img src={loc} className="hero--locPoint"  alt="loc"/></div>
                        <div><p className="bold">{props.location}</p>  </div>
                        <div><p><a href={props.googleMapsUrl}>View on Google Maps</a></p></div>
                    </div>
                    <h1 className="hero--title bold">{props.title}</h1>
                    <p className="bold">{props.startDate} - {props.endDate}</p>
                    <p className="test">{props.description}</p>
                </div>
                </div>
        </section>
    )
}