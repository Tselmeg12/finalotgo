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
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionDownload() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Хэрэглэгчийн сэтгэгдэл #1</h2>
              <p className="description">
              Надад тухайн үед автомашины онцын хэрэгцээ байгаагүй. Нива бол миний хувьд хүүхэд наснаас л хэзээний танил, мэддэг юм шиг хирнээ яг эдэлж, хэрэглэж байгаагүй, мэдэхгүй техник байсан. Тиймээс яг хэрэглээд үзэхийг хүссэн. Би өөрөө техникт их дуртай, сонирхолтой, тэр маань бас Ниваг сонгоход нөлөөлсөн байх. Яагаад ч юм Нива их онцгой автомашин, бүр сонирхол татаад байсан л даа.
              </p>
            </Col>
            <Col className="ml-auto mr-auto download-area" md="5">
           
            </Col>
          </Row>
          <Row className="text-center upgrade-pro">
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="title">Хэрэглэгчийн сэтгэгдэл #2</h2>
              <p className="description">
              Дулаан баригч бүтээгдэхүүний ачаар 2 портер нүүрсээр өвөлждөг байсан бол энэ өвөл 1 портер нүүрсээр өвлийг өнтэй давсан. Өмнө нь 3 цаг болоод гал унтардаг байсан бол одоо 5-6 цаг болж байгаа. Түлшинд хэмнэлттэй сайхан бүтээгдэхүүн байна. Тоос шороо утаа униар ч багассан. Биднээс өөр бусад айл өрхөд энэхүү бүтээгдэхүүн маш их тус нэмэр болно гэж бодож байна. Тиймээс олон олон айл өрхөд бүтээгдэхүүнээ тарааж өгөөсэй гэж хүсч байна. Түлшний хэмнэлт гарган дулаан сайхан өвөлжих боломжийг олгосон дулаан баригчдаа баярлалаа. 
              </p>
            </Col>
            <Col className="ml-auto mr-auto" sm="5">
              
            </Col>
          </Row>
          
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;
