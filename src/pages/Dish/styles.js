import styled from "styled-components";

export const Container = styled.div`
    
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.4rem auto 7.7rem;
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
    gap: 4.78rem;

    margin-top: 4.2rem;

    > img {
        width: 100%;
        max-width: 39rem;
    }

    > section {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        > h1 {
            font-size: 4rem;
            font-weight: 500;
            line-height: 140%;
        }

        > p {
            font-size: 2.4rem;
            font-weight: 400;
            line-height: 140%;
        }


        .ingredients {
            display: flex;
            width: 100%;
            height: 3.2rem;
        }

        .buttons {
            display: flex;
            width: 100%;
            height: 4.8rem;
            gap: 3.3rem;
            margin-top: 2.4rem;
    
            > div {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1.4rem;

                font-size: 2rem;
                font-weight: 700;
                line-height: 160%;
                font-family: ${({ theme }) => theme.FONTS.SECONDARY};

                > svg {
                    width: 2.4rem;
                    height: 2.4rem;
                }
            }
        }
    }
    
    
`