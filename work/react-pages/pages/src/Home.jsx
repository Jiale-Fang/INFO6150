import Turtle1 from './static/images/turtle1.jpeg'
import Turtle2 from './static/images/turtle2.jpeg'
import Turtle3 from './static/images/turtle3.jpeg'
import Turtle4 from './static/images/turtle4.jpeg'
import Turtle5 from './static/images/turtle5.jpeg'
import Turtle6 from './static/images/turtle6.jpeg'
import './static/css/Home.css'

function Home({ onNav }) {
    return (
        <div class="home">
            <div class="card">
                <h2 class="card__title">Turtle in the sea</h2>
                <img class="card__pic" src={Turtle1} alt="turtle in the sea" />
                <div class="card__text">Click here link to <a href='/about.html' onClick={onNav} >about.html</a></div>
            </div>
            <div class="card">
                <h2 class="card__title">Turtle on the land</h2>
                <img class="card__pic" src={Turtle2} alt="turtle on the land" />
                <div class="card__text">Click here link to <a href='/turtles.html' onClick={onNav} >turtles.html</a></div>
            </div>
            <div class="card">
                <h2 class="card__title">Turtle on land near the sea</h2>
                <img class="card__pic" src={Turtle3} alt="turtle on land near the sea" />
                <div class="card__text">Lorem ipsum dolor sit amet consectetur, at commodi nobis est magnam. Maiores aliquid deserunt magni.</div>
            </div>
            <div class="card">
                <h2 class="card__title">Turtle in the sea</h2>
                <img class="card__pic" src={Turtle4} alt="turtle in the sea" />
                <div class="card__text">Lorem ipsum, dolor sit amet consectetur ta doloribus sint, odio, laboriosam a debitis, atque iusto animi voluptas!</div>
            </div>
            <div class="card">
                <h2 class="card__title">Turtle on the land</h2>
                <img class="card__pic" src={Turtle5} alt="turtle on the land" />
                <div class="card__text">Lorem ipsum dolor sit, amet consectetur adipis uuntur cumque dolorum, optio reprehenderit delectus, veniam totam odit temporibus quidem voluptate veritatis saepe.</div>
            </div>
            <div class="card">
                <h2 class="card__title">Turtle on land near the sea</h2>
                <img class="card__pic" src={Turtle6} alt="turtle on land near the sea" />
                <div class="card__text">Lorem ipsum dolor sit amet consectetur, adipisicintium provident est magnam. Maiores aliquid deserunt magni.</div>
            </div>
        </div>
    );
}

export default Home;