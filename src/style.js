import styled from "styled-components";

export const Button = styled.div`
  color: #122214;
  background-color: #9e917c;
  padding: 10px;
  cursor: pointer;
  margin: 0 auto;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  text-align: center;
`;

export const Card = styled.div`
  color: #122214;
  background-color: #9e917c;
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Container = styled.div`
  padding: 200px 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Paragraph = styled.p`
  color: #9e917c;
  font-size: 18px;
  text-align: center;
`;

export const ParagraphError = styled(Paragraph)`
  color: red;
  padding-bottom: 10px;
`;

export const Section = styled.div`
  width: 100%;
  background-color: #122214;
`;

export const Title = styled.p`
  text-align: center;
  color: #9e917c;
  font-size: 40px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 20px 0;
`;
