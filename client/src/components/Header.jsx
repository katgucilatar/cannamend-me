// CONTAINS LANDING, LOGIN, REGISTER, ERROR, ABOUT US
// LOGIN AND REGISTER UNDER ACCOUNT LOGO DROPDOWN 


import { Dropdown, Navbar } from 'flowbite-react';

export default function NavbarWithDropdown() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="./assets/mainlogo.png" className="mr-3 h-6 sm:h-9" alt="Main Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="./assets/accountlogo.png" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">My Account</span>
          </Dropdown.Header>
          <Dropdown.Item>Login</Dropdown.Item>
          <Dropdown.Item>Create an Account</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}