import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import "./Banner.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assets/img/IMG_1363.JPG";
import { useEffect, useState } from "react";

export const Banner = () => {
  //index for which word displayed on screen
  const [loopNum, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developemer",
    "Student Researcher",
    "Software Designer",
  ];

  const [text, setText] = useState("");

  //time passing between each letter typed out
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1500;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.1);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNum + 1);
      setDelta(period);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my site!</span>
            <h1>
              {`Hi, I'm Sasha Krigel, `}
              <span className="wrap">{text}</span>
            </h1>
            <p>About me!</p>
            <button onClick={() => console.log("Contact banner")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img
              src={"../assets/img/IMG_1363.JPG"}
              className="profile"
              alt="Profile img"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
