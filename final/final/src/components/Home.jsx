import ReactCover from '../static/images/react.jpeg'
import AlgorithmCover from '../static/images/algorithm.jpeg'
import JavaCover from '../static/images/java-code2.png'
import '../static/css/Home.css'
import Accordion from './Accordion'

const items = [
    {
        header: 'Email',
        body: '📩 fang.jial@northeastern.edu',
    },
    {
        header: 'My Info',
        body: '👨🏻‍🎓 A graduate student from Software Engineering Systems',
    }
];

function Home({ changePage, darkModeClass }) {
    return (
        <div className={`home ${darkModeClass}`}>
            <div className='blog-card-left fade-in' onClick={(e) => { changePage('/reactLearning.html') }} aria-label='Blog intro card'>
                <img className='blog-cover-left' src={ReactCover} alt="React Cover" aria-label='The cover of this blog' />
                <div className='blog-wrapper'>
                    <div className={`blog-title ${darkModeClass}`}>
                        React Learning notes
                    </div>
                    <div className='blog-info'>
                        <h4>12-1-2022 | React | ES6</h4>
                    </div>
                    <div className='blog-content'>
                        React makes it painless to create interactive UIs. Design simple views for each state in your application...
                    </div>
                </div>
            </div>
            <div className='blog-card-right fade-in' onClick={(e) => { changePage('/algorithmLearning.html') }} aria-label='Blog intro card'>
                <img className='blog-cover-right' src={AlgorithmCover} alt="Algorithm Cover" aria-label='The cover of this blog' />
                <div className='blog-wrapper'>
                    <div className={`blog-title ${darkModeClass}`}>
                        LFU Cache
                    </div>
                    <div className='blog-info'>
                        <h4>12-2-2022 | Algorithms</h4>
                    </div>
                    <div className='blog-content'>
                        Least Frequently Used algorithm
                    </div>
                </div>
            </div>
            <div className='blog-card-left fade-in' onClick={(e) => { changePage('/javaLearning.html') }} aria-label='Blog intro card'>
                <img className='blog-cover-left' src={JavaCover} alt="Java Cover" aria-label='The cover of this blog'/>
                <div className='blog-wrapper'>
                    <div className={`blog-title ${darkModeClass}`}>
                        Java Learning notes
                    </div>
                    <div className='blog-info'>
                        <h4>12-4-2022 | Java | Spring Cloud</h4>
                    </div>
                    <div className='blog-content'>
                        Spring Cloud Alibaba provides a one-stop solution for distributed application development. It contains all the components ...
                    </div>
                </div>
            </div>
            <div className="blog-divider"></div>
            <div className='blog-accordion'>
                <Accordion darkModeClass={darkModeClass} items={items}></Accordion>
            </div>
        </div>
    );
}

export default Home;