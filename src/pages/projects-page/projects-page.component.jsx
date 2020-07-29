import React from 'react';

import { Row, Container, Col } from 'react-bootstrap';
import NavbarComponent from '../../components/navbar/navbar.component';
import ProjectCollection from '../../components/project-collection/project-collection.component';

import './project-page.styles.scss'

const ProjectPage = () => (
    <div className="project-page">
        <Container fluid>
            <Row className="min-vh-100 flex-column flex-md-row">
                <NavbarComponent/>
                <Col className="bg-faded p-0 flex-grow-1">
                    <div className="project-data">
                        <h2 className="heading">PROJECTS</h2>
                        <p className="text">I have worked on the below mentioned projects which were made using react.js,
                        node.js, javaScript with the use of many other tools and databases inluding firebase, mongoDB,
                        redux, redux-sagas and many more. Below is the details of the said projects.</p>
                    </div>
                    <ProjectCollection/>
                </Col>
            </Row>
        </Container>
    </div>
);

export default ProjectPage;