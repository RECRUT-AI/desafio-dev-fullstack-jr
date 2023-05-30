import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme["gray-300"]};
  font-weight: 700;
  align-self: flex-start;
  margin-bottom: 10px;

`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme["gray-300"]};
  border-radius: 6px;
  background: transparent;
  padding: 8px;
  background: transparent;
  width: 300px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme["gray-100"]};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Select = styled.select`
  border: 1px solid ${({ theme }) => theme["gray-300"]};
  border-radius: 6px;
  background: transparent;
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme["gray-100"]};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 1rem;
`;


export const Button = styled.button`
  padding: 8px 12px;
  height: 40px;
  cursor: pointer;
  background: ${({ theme }) => theme["pink-500"]};
  color: ${({ theme }) => theme["gray-100"]};
  border: none;
  border-radius: 6px;
  width: 300px;
  margin-top: 40px;

  :hover {
    background: ${({ theme }) => theme["pink-300"]};
  }
`