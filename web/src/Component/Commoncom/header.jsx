import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Dropdown from 'react-bootstrap/Dropdown' 
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import { Row } from 'react-bootstrap'


const Header = () => {
  return (
<>   <Container>
    <Row>
        <div className='d-flex me-auto col-lg-8 col-md-12 col-sm-12'>
        <h6>Free shipping on US orders $100+ & Free exchanges</h6>
        </div>
        <div className='col-lg-2 text-end col-md-12 col-sm-12 d-flex gap-3 fs-5 text-align-end'> 
            <Dropdown className=''>
            <DropdownToggle className='btn btn-light'>
                English
            </DropdownToggle>
            <DropdownMenu className='dropdown-menu-end'>
                <DropdownItem className='border-none'>French</DropdownItem>
                <DropdownItem>German</DropdownItem>
                <DropdownItem>Spanish</DropdownItem> 
            </DropdownMenu>
            </Dropdown>
            <Dropdown >
            <DropdownToggle className='btn btn-light'>
                USD
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>EURO</DropdownItem>
                <DropdownItem>AUDO</DropdownItem>
                 
            </DropdownMenu>
            </Dropdown>
            </div>
            
    </Row>
    </Container>
</>
  )
}

export default Header