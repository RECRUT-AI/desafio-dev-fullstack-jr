import styled from 'styled-components'

export const Container = styled.div`

`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  h1 {
      font-size: 1rem;
      color: ${({ theme }) => theme['pink-500']};
      display: flex;
      gap: 6px;
      font-weight: bold;

      span {
        color: ${({ theme }) => theme['gray-400']};
      }
    }
`

export const Content = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 700px) {
    justify-content: center;
  }
`

export const Button = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme['pink-500']};
  color: ${({ theme }) => theme['gray-100']};
  border-radius: 6px;
  width: 100%;
  max-width: 200px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  border: none;
  padding: 8px 16px;
  margin-right: 10px;

  &:hover {
    background: ${({ theme }) => theme['pink-300']};
    color: ${({ theme }) => theme['gray-100']};
  }
`;