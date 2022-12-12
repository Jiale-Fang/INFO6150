import Comment from './Comment'
import '../static/css/BlogDetail.css'

function AlgorithmLearningDetail({ darkModeClass, isLogin, user, loginFormRef }) {
    return (
        <div className={`blog-detail ${darkModeClass}`}>
            <div className={`detail-container ${darkModeClass}`}>
                <div className='detail-title' aria-label='Blog detail title'>
                    Least Frequently Used (LFU)
                </div>
                <div className='detail-content' aria-label='Blog detail content'>
                    <dl>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                                Least Frequently Used (LFU) is a caching algorithm in which the least frequently used cache block is removed whenever the cache is overflowed. In LFU we check the old page as well as the frequency of that page and if the frequency of the page is larger than the old page we cannot remove it and if all the old pages are having same frequency then take last i.e FIFO method for that and remove that page.
                            </blockquote>
                        </dd>
                        <dd>Min-heap data structure is a good option to implement this algorithm, as it handles insertion, deletion, and update in logarithmic time complexity. A tie can be resolved by removing the least recently used cache block. The following two containers have been used to solve the problem:
                            <br></br><br></br>
                            A vector of integer pairs has been used to represent the cache, where each pair consists of the block number and the number of times it has been used. The vector is ordered in the form of a min-heap, which allows us to access the least frequently used block in constant time.
                            <br></br><br></br>
                            A hashmap has been used to store the indices of the cache blocks which allows searching in constant time.</dd>
                    </dl>
                </div>
                <br></br><br></br>
            </div>
            <Comment darkModeClass={darkModeClass} isLogin={isLogin} user={user} loginFormRef={loginFormRef} ></Comment>
        </div>
    );
}

export default AlgorithmLearningDetail;