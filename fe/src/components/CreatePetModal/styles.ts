import styled from "styled-components";

export const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  position: absolute;
  position: absolute;
  top: 13px;
  right: 17px;
  margin: -10px;
`

export const ModalContent = styled.div`
  background: ${props => props.theme['gray-700']};
  width: 480px;
  border-radius: 0.5rem;
  padding: 2rem;
  position: relative;
`;

