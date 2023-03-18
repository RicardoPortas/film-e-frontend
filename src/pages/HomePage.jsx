import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import the Link component

const LandingPage = () => {
  return (
    <Container className="landing">
      <Row className="header">
        <Col>
          <h1>MVP FILM-E </h1>
          <p>Blockchain para prestação de contas de produções Audiovisuais</p>
        </Col>
      </Row>
      <Row className="features">
        <Col md={4}>
          <h2>Cadastros de Colaboradores</h2>
          <p>Crie o cadastro de produtores, equipe e investidores</p>
        </Col>
        <Col md={4}>
          <h2>Registros de Filmes</h2>
          <p>Registre seus filmes para investidores e entusiastas</p>
        </Col>
        <Col md={4}>
          <h2>Prestação de contas com Blockchain</h2>
          <p>Acompanhe a prestação de contas com notas fiscais criptografadas</p>
        </Col>
      </Row>
      <Row className="cta">
        <Col>
          <h2>Vamos começar hoje mesmo!</h2>
          <Link to="/sign-up"> 
            <Button className="btn">Sign up now</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;