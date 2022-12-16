import JavaCode1 from '../static/images/java-code1.jpg'
import Comment from './Comment'
import SpringCloudPomImg from '../static/images/spring-cloud-pom.jpg'
import '../static/css/BlogDetail.css'

function JavaLearningDetail({ darkModeClass, isLogin, user, loginFormRef }) {
    return (
        <div className={`blog-detail ${darkModeClass}`}>
            <div className={`detail-container ${darkModeClass}`}>
                <div className='detail-title' aria-label='Blog detail title'>
                    Spring Cloud Alibaba
                </div>
                <div className='detail-content' aria-label='Blog detail content'>
                    <dl>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                                <dt><strong>Overview:</strong></dt>
                                Spring Cloud Alibaba provides a one-stop solution for distributed application development. It contains all the components required to develop distributed applications, making it easy for you to develop your applications using Spring Cloud.
                                <br></br>
                                With Spring Cloud Alibaba, you only need to add some annotations and a small amount of configurations to connect Spring Cloud applications to the distributed solutions of Alibaba, and build a distributed application system with Alibaba middleware.
                            </blockquote>
                        </dd>
                        <dt><strong>Features:</strong></dt>
                        <dd>
                            - Flow control and service degradation：flow control, circuit breaking and system adaptive protection with Alibaba Sentinel
                            <br />
                            - Service registration and discovery：instances can be registered with Alibaba Nacos and clients can discover the instances using Spring-managed beans. Supports Ribbon, the client side load-balancer via Spring Cloud Netflix
                            <br />
                            - Distributed Configuration：using Alibaba Nacos as a data store
                            <br />
                            - Event-driven：building highly scalable event-driven microservices connected with Spring Cloud Stream RocketMQ Binder
                            <br />
                            - Message Bus: link nodes of a distributed system with Spring Cloud Bus RocketMQ
                            <br />
                            - Distributed Transaction：support for distributed transaction solution with high performance and ease of use with Seata
                            <br />
                            - Dubbo RPC：extend the communication protocols of Spring Cloud service-to-service calls by Apache Dubbo RPC
                        </dd>
                        <br />
                        <dt><strong>Getting Started:</strong></dt>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                                The easiest way to get started is by including the Spring Cloud BOM and then adding spring-cloud-alibaba-dependencies to your application’s classpath. If you don’t want to include all of the Spring Cloud Alibaba features you can add individual starters for the features you would like.
                                The spring-cloud-alibaba-dependencies dependency in pom:
                            </blockquote>
                        </dd>
                    </dl>
                    <img className='detail-img' src={SpringCloudPomImg} alt="Import spring cloud in pom.xml" />
                    <br />

                    <dl>
                        <dt><strong>Run your Spring Boot/Cloud applications on Alibaba Cloud:</strong></dt>
                        <dd>
                            <blockquote>Enterprise Distributed Application Service (EDAS) is a platform as a service (PaaS) service for application hosting and microservice management, providing full-stack solutions such as application development, deployment, monitoring, and O&M. It supports Apache Dubbo, Spring Cloud, and other microservice runtime environments, helping you easily migrate applications to Alibaba Cloud.</blockquote>
                        </dd>

                    </dl>
                    <img className='detail-img' src={JavaCode1} alt="Login Filter" />
                    <br /><br />
                </div>
            </div>
            <Comment darkModeClass={darkModeClass} isLogin={isLogin} user={user} loginFormRef={loginFormRef} ></Comment>
        </div>
    );
}

export default JavaLearningDetail;