import styled from 'styled-components';

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.palette.BLACK};
  background-color: ${({ theme }) => theme.palette.WHITE};
  outline: none;
  border: none;
  border-radius: 3px;
  font-weight: bold;
`;

export const StyledHeaderSearchInput = styled(StyledInput)`
  border-radius: 3px 0 0 3px;
  grid-column: 1/14;
`;

export const StyledFileSelectInput = styled(StyledInput)`
  display: none;
`;
