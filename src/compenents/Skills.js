import React from "react"
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { Form } from "react-router-dom";
import Carousel from "react-multi-carousel";

export default function Skills(){
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
    return(
        <section className="skill" id="skills">
            <Container className="skills">
                
                <Row>
                    <Col>
                    
                    <div className="skill-bx">
                    <h1>
                            Skills
                        </h1>
                        <p>Web development is the building and maintenance of websites; it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider" >
                            <div className="item">
                                <img src="./images/web-icon.png" alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src="./images/ux-icone.png" alt="Image" />
                                <h5>UX Design</h5>
                            </div>
                            <div className="item">
                                <img src="./images/design-think.png" alt="Image"  />
                                <h5>Design thinking</h5>
                            </div>
                            <div className="item">
                                <img src="./images/desktop-icon.png" alt="Image" />
                                <h5>Desktop Development (JavaFX)</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}