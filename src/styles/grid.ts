import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (max-width: 1200px) {
    max-width: 1024px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 768px;
  }
  @media screen and (max-width: 768px) {
    max-width: 480px;
  }
`;
