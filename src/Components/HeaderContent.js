import React from 'react';
import { Container, Row, Col, Alert, Badge, Button, Breadcrumb } from 'react-bootstrap';

class HeaderContent extends React.Component {
    render(){
        return(
            <div>
                <Container className="mt-3">
                    <Row>
                        <Col md={3}>
                        <Alert variant="primary">
                            Welcome React Bootstrap
                        </Alert>
                        </Col>
                        <Col md={7} className="text-right">
                            <Button variant="primary">
                                Profile <Badge variant="light">9</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>
                            <Button variant="primary">
                                Profile <Badge variant="light">9</Badge>
                                <span className="sr-only">unread messages</span>
                            </Button>                            
                        </Col>
                        <Col md={2}>
                            <h5>
                                <img
                                    width={32}
                                    height={32}
                                    src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
                                    alt="Generic placeholder"
                                    className="ml-3 mr-3"
                                /> 
                                Andreas
                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>

                        </Col>
                        <Col md={4} className="text-right">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                        Library
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                                </Breadcrumb>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default HeaderContent;