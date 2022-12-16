import '../static/css/Album.css'
import Carousel from "./Carousel";
import LandScape1 from '../static/images/landscape.jpg'
import LandScape2 from '../static/images/landscape2.jpeg'
import LandScape3 from '../static/images/landscape3.jpeg'
import LandScape4 from '../static/images/landscape4.jpeg'
import LandScape5 from '../static/images/landscape5.jpeg'
import LandScape6 from '../static/images/landscape6.jpeg'
function Album({ darkModeClass }) {
    return (
        <div className={`album ${darkModeClass}`}>
            <div className='album-title' aria-label='Album title'>
                Album Carousel
            </div>
            <Carousel></Carousel>
            <div className='album-container'>
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape1} />
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape6} />
            </div>
            <div className='album-container'>
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape3} />
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape4} />
            </div>
            <div className='album-container'>
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape5} />
                <img className='album-container-img' alt='Landscape item of the album' src={LandScape2} />
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Album;