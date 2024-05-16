import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from 'react-bootstrap-icons'
import head from '../assets/img/head.png';


export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["REACT", "DSA", "EXPRESS"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() *100);

    useEffect(() =>{
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let x = loopNum % toRotate.length;
        let fullText = toRotate[x];
        let updateText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);
        setText(updateText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta/2) 
        }

        if(!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(!isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    } 

  return (
    <div>
      <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">
                        Welcome to my portfolio. 
                    </span>
                    <h1>{`Hi I'm Manas Das`}
                    <span className='wrap'>{text}</span>
                    </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime expedita ducimus numquam ea autem aliquam, sunt hic beatae! Totam, voluptatibus perferendis. Laudantium ullam eos cumque, minima ratione qui nostrum ut.</p>
                    <button onCanPlay={() => console.log("Click")}>Let's connect <ArrowRightCircle size={25}/>
                    </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={head} alt="" />
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}
