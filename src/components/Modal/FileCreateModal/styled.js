import styled from 'styled-components';

export const Title = styled.div`
color: ${({ theme }) => theme.palette.WHITE};
text-align: center;
margin-left: 1%;
font-size: ${({ theme }) => theme.fontSize.LARGE};
grid-column: 1/13;
grid-row: 3/4;
`;

export const Description = styled.div`
color: ${({ theme }) => theme.palette.WHITE};
text-align: center;
margin-left: 1%;
font-size: 1rem;
grid-column: 1/13;
grid-row: 7/8;
`;
