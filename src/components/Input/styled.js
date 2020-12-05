import styled from 'styled-components';

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.palette.black};
  background-color: ${({ theme }) => theme.palette.white};
  outline: none;
  border: none;
  border-radius: 3px;
  font-weight: bold;
`;

export const StyledHeaderSearchInput = styled(StyledInput)`
  border-radius: 2px 0 0 2px;
  grid-column: 1/7;
`;

export const StyledFileUploadInput = styled(StyledInput)`
  display: none;
`;
