import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    gap: .8rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.4rem;
    padding: 1.2rem 2.4rem;
    border-radius: 0.5rem;
`