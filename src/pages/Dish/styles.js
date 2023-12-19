import styled from "styled-components";

export const Container = styled.div`
    
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 9.6rem auto 7.7rem;
    grid-template-areas:
        "header"
        "content"
        "footer"
    ;

    > main {
        grid-area: content;
        width: 100%;
        max-width: calc(100% - 24.6rem);
        margin: 0 auto;
        padding: 2.4rem 0 17.9rem;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    gap: 4.74rem;
`