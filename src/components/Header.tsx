import * as React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  margin-top: 20px;
  height: 100%;
  justify-content: center;
  display: flex;
`

const Menu = styled.a`
  font-weight: bold;
  font-size: 25px;
  padding-right: 10px;
  text-decoration: none;
  color: black;
`
class Header extends React.Component {

  public render() {
    return (
      <StyledHeader>
        <Menu href="/">Home</Menu>
        <Menu href="about">About</Menu>
        <Menu href="works">Works</Menu>
        <Menu href="contact">Contact</Menu>
      </StyledHeader>
    )
  }
};

export default Header;