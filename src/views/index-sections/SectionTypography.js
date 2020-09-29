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
import { Container, Row, Col } from "reactstrap";

// core components

function SectionTypography() {
  return (
    <>
      <Container className="tim-container">
        <div className="title">
          <h3></h3>
        </div>
        <div id="typography">
          <Row>
           
            <div className="typography-line">
              <span className="note"></span>
              <blockquote className="blockquote">
                <p className="mb-0">
                "Манай компани нь ашиг, сонирхлыг чухалчлахыг бус хэрэглэгчдийнхээ хүсэлт шаардлагад нийцсэн бараа бүтээгдэхүүнийг чанартай, хямд үнээр түргэн шуурхай хүргэхийг илүүд үздэг. Үүний үр дүнд өдрөөс өдөрт манай худалдааны төвүүдээр үйлчлүүлэгчдийн тоо өсөж байгаа нь бидний бахархал юм."
                </p>
                <br />
               
              </blockquote>
            </div>
           
          </Row>
        </div>
        <br />
        <div id="images">
          
        </div>
      </Container>
    </>
  );
}

export default SectionTypography;
