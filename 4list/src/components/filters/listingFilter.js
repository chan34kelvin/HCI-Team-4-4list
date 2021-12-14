import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import { Form, Container, Row, Col } from "react-bootstrap";
import Select from 'react-dropdown-select';
// import 'react-pro-sidebar/dist/css/styles.css';
import './custom.scss';

const ListingFilter  = () => {
    return (
        // <div>
            <div className="sidebar" style={{height: '',position: ''}}>
            <ProSidebar style={{position: '', position:''}}>
                <SidebarHeader>
                </SidebarHeader>

                <SidebarContent>
                     <Container>
                         <Form>
                             <Form.Label>Filter 1</Form.Label>
                             <Form.Group className="mb-4">
                                <Select 

                                />
                             </Form.Group>

                             <Form.Label>Filter 2</Form.Label>
                             <Form.Group className="mb-4">
                                <Select 

                                />
                             </Form.Group>

                             <Row >
                                <Form.Label>Filter 3</Form.Label>
                                <Form.Group as={Col} className="mb-4">
                                    <div style={{width: '115px'}}><Select/></div>
                                </Form.Group>
                                to
                                <Form.Group as={Col}>
                                <div style={{width: '115px'}}><Select/></div>
                                </Form.Group>
                             </Row>

                             <Row >
                                <Form.Label>Filter 4</Form.Label>
                                <Form.Group as={Col} className="mb-5">
                                    <div style={{width: '115px'}}><Select/></div>
                                </Form.Group>
                                to
                                <Form.Group as={Col}>
                                <div style={{width: '115px'}}><Select/></div>
                                </Form.Group>
                             </Row>

                             <button type="submit" disabled style={{
                                 backgroundColor: '#EA840D', color: 'white',
                                 borderRadius: '9px', fontSize: '18px',
                                 margin:'4px 9px', padding: '6px', border:'15px'
                             }} className="mb-3">Search</button>
                         </Form>
                     </Container>

                </SidebarContent>

                <SidebarFooter>
                </SidebarFooter>
            </ProSidebar>
            </div>
    );
};  

export default ListingFilter;