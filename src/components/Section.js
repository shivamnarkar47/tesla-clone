import React from "react";
import styled from "styled-components";

function Section(props) {
    console.log(props)
  return (
    <Container bgImage={props.bgImg}>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </ItemText>
      <ButtonGroup>
        <LeftButton>{props.leftbtnText}</LeftButton>
        <RightButton>{props.rightbtnText}</RightButton>
      </ButtonGroup>
      <DownArrow src="https://img.icons8.com/material/64/ffffff/expand-arrow--v1.png"></DownArrow>
    </Container>
  );
}

export default Section;

const Container = styled.div`
  background-color: blue;
  width: 100%;
  height: 100vh;
  background-image: ${props => `url('${props.bgImage}')`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom:50px;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  flex-grow:1;

`;

const ButtonGroup = styled.div`
display:flex;
margin-bottom: 30px;
font-weight:500;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 250px;
  border-radius: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  opacity: 0.85;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.img`
height:40px;
animation: animateDown infinite 1.5s;
`