import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > main {
        width: 100%;
        height: 9.6rem;
        max-width: calc(100% - 24.6rem);
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3.2rem;
    }
`

export const Brand = styled.div`
    width: 19.7rem;
    display: flex;

    > img {
        width: 100%;
    }
`