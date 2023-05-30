import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  
  flex: 1;
  min-width: 350px;
  max-width: 350px;
  border: 1px solid ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #121214;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
`

export const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${({ theme }) => theme['pink-500']};

  span {
    color: ${({ theme }) => theme['gray-300']};  
    font-weight: normal;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  gap: 12px;
`

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`

export const EditButton = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme['gray-400']};
  transition: ease-in-out 0.2s;
  :hover {
    color: ${({ theme }) => theme['gray-300']};
  }
`

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme['gray-400']};
  transition: ease-in-out 0.2s;
  :hover {
    color: ${({ theme }) => theme['red-700']};
  }
`