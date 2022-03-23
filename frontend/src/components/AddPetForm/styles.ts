import styled from "styled-components";

export const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 2rem;
  background: #ddd;
  border-radius: 5px;

  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-top: 1rem;

    font-weight: 200;
  }

  .type {
    line-height: 1;
  }

  input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 0.2rem 0.5rem;

    ::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }
  }

  select {
    margin-top: 1rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 0.2rem 1rem;
  }

  button {
    margin-top: 1rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 1);

    transition: all 0.3s ease-in-out;

    :hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`;
