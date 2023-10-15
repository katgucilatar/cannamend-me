/* CONTAINS HOME, PERSONAL LIST, AND SAVED LOCATIONS IN HEADER */

import { Navbar } from 'flowbite-react';

export default function DefaultNavbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img src="./assets/mainlogo.png" className="mr-3 h-6 sm:h-9" alt="Main Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">My List</Navbar.Link>
        <Navbar.Link href="#">My Locations</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}