import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 0.875rem;
  opacity: 0.8;
  color: ${props => props.theme.white};
`;

export const Input = styled.input`
  padding: 0.875rem;
  border: none;
  background: ${({theme}) => theme["gray-900"]};
  border-radius: 0.25rem;
  color: ${({theme}) => theme["gray-300"]};

  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

`;

export const Select = styled.select`
  padding: 0.875rem;
  border: none;
  background: ${({theme}) => theme["gray-900"]};
  border-radius: 0.25rem;
  color: ${({theme}) => theme["gray-300"]};

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding-right: 1rem;
`;

export const Button = styled.button`
  background: ${props => props.theme['pink-500']};
  border-radius: 6px;
  border: 0;
  color: ${props => props.theme.white};
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  margin-top: 20px;
`;