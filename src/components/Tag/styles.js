import styled from "styled-components";

export const Container = styled.span`
    display: flex;
    align-items: center;
    padding: 0.4rem 0.8rem;
    gap: 0.8rem;

    > .simpleTag {
        background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border-radius: 0.5rem;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem;
    }

    > .iconTag {
        background-color: ${({ theme }) => theme.COLORS.LIGHT_600};
        border-radius: 0.8rem;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;
    }
`