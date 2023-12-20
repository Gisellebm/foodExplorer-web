import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    border-radius: .5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    padding: 1.2rem 1.4rem;
    height: 4.8rem;

    > input {
        width: 100%;
        background: transparent;      

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`