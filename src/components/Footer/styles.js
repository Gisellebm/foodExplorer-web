import styled from "styled-components";

export const Container = styled.footer`
    grid-area: footer;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > footer {
        width: 100%;
        height: 7.7rem;
        max-width: calc(100% - 24.6rem);
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.8rem;

        p {
            font-size: 1.4rem;  
            line-height: 160%;
            font-family: ${({ theme }) => theme.FONTS.SECONDARY};
            color: ${({ theme }) => theme.COLORS.LIGHT_200};
            font-weight: 400;
        }
    }
`

export const Brand = styled.div`
    width: 18.6rem;
    display: flex;

    > img {
        width: 100%;
    }
`