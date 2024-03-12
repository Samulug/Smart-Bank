import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";
import List from "../List";

const StyledContainer = styled.div`
  background-color: ${({theme}) => theme.body};
  min-height: 90vh;
  padding: 0px 15vw;
  @media (max-width: 800px) {
  flex-direction: column;
}
`
const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Container = () => {
  return (
    <StyledContainer className="container">
      <Title>Smart Bank</Title>
      <StyledContent className="content">
        <Account />
        <List/>
      </StyledContent>
    </StyledContainer>
  );
};

export default Container;