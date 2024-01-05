import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > main {
        width: 100%;
        height: 10.4rem;
        max-width: calc(100% - 24.6rem);
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3.2rem;

        .receipt {
            svg {
                width: 3.2rem;
                height: 3.2rem;
            }
        }
    }
`

export const Brand = styled.div`
    width: 19.7rem;

    display: flex;
`

export const Search = styled.div`
    display: flex;
    flex-grow: 1;

    input {
        max-width: 30rem;
        border: none;
    }
`

export const Logout = styled.div`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        width: 32px;
        height: 32px;
    }
`