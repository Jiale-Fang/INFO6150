import '../static/css/BlogDetail.css'
import Comment from './Comment';
import ReactRenderImg from '../static/images/react-render.jpg';
import ES6Img from '../static/images/es6-class.jpg'
function RectLearningDetail({ darkModeClass, isLogin, user, loginFormRef }) {
    return (
        <div className={`blog-detail ${darkModeClass}`}>
            <div className={`detail-container ${darkModeClass}`}>
                <div className='detail-title' aria-label='Blog detail title'>
                    React
                </div>
                <div className='detail-content' aria-label='Blog detail content'>
                    <dl>
                        <dt><strong>Rendering Elements:</strong></dt>
                        <dd>Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.</dd>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                                <dt><strong>Note:</strong></dt>
                                One might confuse elements with a more widely known concept of “components”. We will introduce components in the next section. Elements are what components are “made of”, and we encourage you to read this section before jumping ahead.
                            </blockquote>
                        </dd>

                        <dt><strong>Updating the Rendered Element:</strong></dt>

                        <dd>React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
                            <br /><br />
                            With our knowledge so far, the only way to update the UI is to create a new element, and pass it to root.render().</dd>
                    </dl>
                    <img className='detail-img' src={ReactRenderImg} alt="React Render example" />

                    <dl>
                        <dt><strong>Components and Props:</strong></dt>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.</blockquote>
                        </dd>
                        <dd>You can also use an ES6 class to define a component:</dd>
                    </dl>
                    <img className='detail-img' src={ES6Img} alt="React component example" />
                    <dl>
                        <dd>Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.</dd>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                                <dt><strong>Note: Always start component names with a capital letter.</strong></dt>
                                React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but 'Welcome' represents a component and requires Welcome to be in scope.
                            </blockquote>
                        </dd>
                    </dl>
            
                    <br/><br/>
                </div>
            </div>
            <Comment darkModeClass={darkModeClass} isLogin={isLogin} user={user} loginFormRef={loginFormRef} ></Comment>
        </div>
    );
}

export default RectLearningDetail;