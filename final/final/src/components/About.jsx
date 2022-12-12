import '../static/css/About.css'
import '../static/css/css-gg.css'
import LandScape from '../static/images/landscape.jpg'
function About({darkModeClass}) {
    return (
        <div className="about">
            <div className={`about-img-container ${darkModeClass}`}>
                <div className={`about-img-card ${darkModeClass}`}>
                    <img src={LandScape} alt="Scenery of sea" className="about-img" aria-label='Main pic of about page' />
                </div>
            </div>
            <div className="about-intro-container">
                <div className={`about-intro-header-card ${darkModeClass}`}>
                    <div className="about-intro-header-text" aria-label='The title of about page'>About Me</div>
                </div>
                <div className={`about-intro-main-card ${darkModeClass}`} aria-label='The intro of about page' >
                    <p className={`about-intro-main-text ${darkModeClass}`}>
                        I am an ordinary student🧑‍🎓 at school has a desire to learn new technologies. I hope to make progress with you.
                        <br />
                        I love programming 🧑‍💻 and looking up at the sky 🌉. I hope this site can record my learning experience</p>
                </div>
                <div className={`about-intro-tag-card ${darkModeClass}`} aria-label='The intro tags of about page'>
                    <div className="about-intro-tag-label">React</div>
                    <div className="about-intro-tag-label">Vue</div>
                    <div className="about-intro-tag-label">Java</div>
                    <div className="about-intro-tag-label">RabbitMQ</div>
                    <div className="about-intro-tag-label">Mysql</div>
                    <div className="about-intro-tag-label">Redis</div>
                </div>
                <div className={`about-intro-icon-card ${darkModeClass}`} aria-label='The github repository of author'>
                    <a href="https://github.com/asiL-tcefreP?tab=repositories" data-position="bottom center"><i className="gg-smile-mouth-open"></i></a>
                </div>

                <div className="ui wechat-qr flowing popup transition hidden">
                    {/* <img src="https://r.photo.store.qq.com/psc?/V53KcXfb1umonn4HbITu3rINxs43TczD/45NBuzDIW489QBoVep5mcaapv*CZPLor9HYeVrOOiVLnyRm8OUpwb6xeJ6lITPL.CQBAMN*ufWnqF4BJBqO4o0iDboC.V.GwA1i2AehYs7g!/r" alt="" className="ui rounded image" style="width: 110px"/> */}
                </div>
            </div>
        </div>
    );
}

export default About;