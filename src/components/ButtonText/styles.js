import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    gap: .8rem;

    font-size: 2.4rem;
    font-weight: 700;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    background: none;
    border: none;
`