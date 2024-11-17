import { Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";

function Banner () {
    const resumeLink = 'https://drive.google.com/file/d/15bMXskUjUO0uoAxhUPtm99p8J_Ksr2gs/view?usp=sharing';
    const toRotate = ["Web Developer", "Associate Cloud Engineer", "Software Engineer"];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    const handleDownload = () => {
        window.open(resumeLink, '_blank');
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>
                            {`Hi, I'm Anas `}
                            <span className="wrap">{text}</span>
                        </h1>
                        <p>Looking for a challenging position in a reputed organization to utilize my skills and knowledge for the growth of the organization.</p>
                        <button onClick={handleDownload}>Download CV <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner