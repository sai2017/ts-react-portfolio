import * as React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  margin-top: 20px;
  height: 100%;
  justify-content: center;
  display: flex;
`

class Footer extends React.Component {

  public render() {
    return (
      <StyledFooter>
        © sai 2019
      </StyledFooter>
    )
  }
};

export default Footer;