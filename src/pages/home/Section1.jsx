import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_x5">Only</h4>
                  <h4 className="h3_x5">$8.23</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col ld={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Burger</h1>
              <h2 className="text-white">With Onion</h2>
              <p className="text-white pt-2 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                ducimus eaque repellat culpa magni corrupti illo, fugiat iure
                quisquam aspernatur. Itaque facere nisi eius nemo vel id
                mollitia quas placeat beatae temporibus dolores, magni ratione
                excepturi consectetur natus accusamus corrupti impedit? Qui modi
                harum facere earum inventore dolorum eos quas?
              </p>
              <a className="btn order_now">
                Order Now
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
