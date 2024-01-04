import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
    
    
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    gap: 0.8rem;
    
    > input {
        width: 100%;     
        height: 4.8rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        display: flex;
        align-items: center;
        padding: 1.2rem 1.4rem;
        border: none;
        border-radius: .5rem;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`