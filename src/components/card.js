import './card.css'
import image from './image-qr-code.png'

const Card =() =>{
    return(
        <div className="container">
            <img src={image}  alt='Qr code to front-end mentor'/> 
            <h3 className="above">Improve your front-end <br/> skills by building projects</h3>
            <p>Scan the QR code to visit Frontend Mentor and take your coding to the next level!</p>
        </div>
    )
}
export default Card;