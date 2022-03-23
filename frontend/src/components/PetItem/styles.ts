import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1rem;

  .title {
    font-weight: 600;
  }
`;

export const ContentRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  gap: 0.5rem;

  button {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
    text-decoration: none;
    color: #616267;
    background: none;
    border: 1px solid #aaa;
    border-radius: 10px;

    margin-bottom: 0.2rem;

    transition: all 0.2s ease-in-out;
  }

  .edit:hover {
    background: rgba(0, 0, 0, 0.2);
  }

  .delete:hover {
    background: rgba(255, 30, 30, 0.2);
  }

  .details:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
