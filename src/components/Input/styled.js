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
  ::-webkit-input-placeholder {
    font-size: ${({ theme }) => theme.fontSize.XSMALL};
    padding-left: 20px;
  }
`;

export const StyledFileSelectInput = styled(StyledInput)`
  display: none;
`;

export const StyledTimeRangeInput = styled.input`
  -webkit-appearance: none;
  background-color: transparent;
  height: 64%;
  border-radius: 3px;
  outline: none;
  grid-column: 1/${({ column }) => column};

  &::-webkit-slider-thumb {
     -webkit-appearance: none;
     width: 20px;
     height: 50px;
     border-radius: 3px;
     border: ${({ theme }) => `1px solid ${theme.palette.GRAY}`};
     background-color: ${({ theme }) => theme.palette.ALMOND};
  }
`;

export const StyledTimeArrowInput = styled.input`
  background-color: ${({ theme }) => theme.palette.WHITE};
  outline: none;
  border: none;
  height: 80%;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  border-radius: 3px;
  grid-column: 10/12;
  grid-row: ${({ startTime }) => startTime ? '4/5' : '8/9'};

  &
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    height: 30px;
    opacity: 1;
  }
`;
