import styled from "styled-components";

export const Container = styled.div`
  max-width: 640px;
  padding: 1rem;
  background: #fff;
  border-radius: 5px;
  margin: 0 auto;
  padding: 2rem 3rem;
  font-weight: 400;
  font-size: 1.2rem;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 2rem;
    font-family: "Playfair Display";
    text-align: left;
  }

  .title {
    font-weight: 200;
  }
`;

export const ContentItem = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1rem;
`;

export const ContentRow = styled.div``;
