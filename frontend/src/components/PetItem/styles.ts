import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;

  .title {
    font-weight: 600;
  }
`;

export const ContentItem = styled.div`
  width: 100%;
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
    border: none;
    border-radius: 10px;

    margin-bottom: 0.2rem;

    transition: all 0.2s ease-in-out;

    box-shadow: 2px 1px 1px 1px rgba(0, 0, 0, 0.3);
  }

  .delete {
    background: rgba(255, 100, 100, 0.8);
    color: #fff;
  }

  .edit:hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  .delete:hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  .details:hover {
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;
