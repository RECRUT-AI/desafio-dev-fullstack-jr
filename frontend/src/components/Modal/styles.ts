import styled from "styled-components";

interface ContainerProps {
  show: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;

  .modal-main {
    position: relative;
    background: white;
    width: 30%;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
  }

  .btn-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border-radius: 50px;
    border: none;
    padding: 0.5rem 0.75rem;
    color: #616267;
    background: none;
    transition: all 0.3s ease-in-out;

    :hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  display: ${(props) => (props.show ? "block" : "none")};
`;
