/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">ОТГОНТЭНГЭР коммершал:</h2>
              <br />
              <p className="description">
              Манай компани хамт олны эрүүл, бүтээлч уур амьсгалыг төлөвшүүлэхийн зэрэгцээ ажилтныхаа нэр төрийг эрхэмлэн дээдэлдэг, гэр бүлийнхээ өмнө хүлээсэн үүрэг хариуцлагыг нь ойлгон дэмждэг байх ёстой. Ажилтныхаа ажлыг шударгаар үнэлдэг, өрсөлдөхүйц цалин урамшуулал олгодог, амар тайван амьдралын баталгаа нь байх ёстой. Ажилтнууд маань үнэнч шударга, идэвх санаачлагатай, үргэлж урагш тэмүүлсэн, удирдлага нь ёс зүйтэй, шударга, мэргэжлийн байх нь хамгаас чухал.
              </p>
              <br />
             
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="nc-icon nc-time-alarm" />
                <i className="nc-icon nc-atom" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-watch-time" />
                <i className="nc-icon nc-key-25" />
                <i className="nc-icon nc-diamond" />
                <i className="nc-icon nc-user-run" />
                <i className="nc-icon nc-layout-11" />
                <i className="nc-icon nc-badge" />
                <i className="nc-icon nc-bulb-63" />
                <i className="nc-icon nc-favourite-28" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-tie-bow" />
                <i className="nc-icon nc-zoom-split" />
                <i className="nc-icon nc-cloud-download-93" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
