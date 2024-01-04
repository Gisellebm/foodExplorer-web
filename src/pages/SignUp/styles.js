import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 9rem 10.8rem;

    display: flex;
    align-items: start;
    gap: 30.6rem;

    > img {
        width: 32.4rem;
        height: 4.8rem;
        margin-top: 25.1rem;
        margin-left: 4.5rem;
    }

    
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 47.6rem;

    padding: 6.4rem;
    gap: 3.2rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    border-radius: 1.6rem;

    > h1 {
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;
        text-align: center;
    }

    > .createAccount {
        width: 100%;
    }

    > .haveAccount {
       display: flex;
       align-items: center;
       justify-content: center;
       font-size: 1.4rem;
       font-weight: 500;
       line-height: 2.4rem;
       color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`
