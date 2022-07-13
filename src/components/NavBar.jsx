import React, { useState } from "react";
import './NavBar.css'
import { Box, Link, Text, Stack, Flex, Icon, Image } from "@chakra-ui/react";
import { MdClose, MdMenu } from "react-icons/md";
import logo from '../assets/logoColor.png'
// import { useContext } from "react";
// import { Shop } from "../Context/ShopContext";
import CartWidget from "./CartWidget";





const Logo = () => {
  return (
    <Box>
      <Image justifyItems={'center'} boxSize={'100px'} src={logo} color='inherit' alt='Logo inmobliiaria'/>
    </Box>
  );
};

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <Icon as={MdClose} /> : <Icon as={MdMenu} />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {

  
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack className="links"
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end"]}
        direction={["column", "row"]}
        paddingTop={[4, 4, 0]}
      >
        <MenuItem to="/">Inicio</MenuItem>
        <MenuItem to="/category/electronics">electronics</MenuItem>
        <MenuItem to="/category/jewelery">jewelery</MenuItem>
        <MenuItem to="/category/men's clothing">men's clothing</MenuItem>

      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justifyContent={'space-between'}
      wrap="wrap"
      width="100%"
      padding={8}
      bg={"transparent"}
      color={"gray.600"}
    >
      {children}
    </Flex>
  );
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);



  return (
    <NavBarContainer>
      <Logo/>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <CartWidget/>
    </NavBarContainer>
  );
}

export default NavBar;
