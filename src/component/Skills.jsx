import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from '../assets/img/react.png';
import java from '../assets/img/java.png';
import py from '../assets/img/py.png';


export default function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div>
      <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>Skills</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore accusantium officia, provident quam fugiat sed fuga accusamus quia ab, cumque, suscipit molestiae soluta facilis? Ut possimus illo autem quibusdam nemo?</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={react} alt="Img" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Img" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={py} alt="Img" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Img" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        {/* <img src={colorSharp} alt="" className="background-image-left" /> */}
      </section>
    </div>
  )
}
