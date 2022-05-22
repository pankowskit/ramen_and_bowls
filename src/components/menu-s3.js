import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Table from "../../node_modules/react-bootstrap/Table";

class MenuS3 extends Component{
    render(){
        return(    
            <Container fluid className="menu-s3 d-flex minh-50vh bg-light align-items-center py-5">
                <Row className="mx-0 w-100">
                    <Col xs={12} md={6} className="minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-start">
                            <h2 className="dispaly-6 fw-bold text-secondary">
                                Lorem ipsum dolor
                            </h2>
                            <p className="text-muted">
                                Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                            <Table hover striped>
                                <thead>
                                    <tr className="text-secondary">
                                        <th className="w-25">Name</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MenuS3;
