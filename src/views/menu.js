import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import MenuS1 from "../components/menu-s1";
import MenuS2 from "../components/menu-s2";
import MenuS3 from "../components/menu-s3";
import MenuS4 from "../components/menu-s4";

class Menu extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <MenuS1/>
                <MenuS2/>
                <MenuS3/>
                <MenuS4/>
            </Container>    
        );
    }
}

export default Menu;
