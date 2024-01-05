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
        padding: 16.4rem 0 4.6rem;

        > header {
            position: relative;

            width: 100%;
            height: 26rem;
    
            border-radius: .8rem;
            background: ${({ theme }) => theme.COLORS.GRADIENTS_200};
            margin-bottom: 2.9rem;

            img {
                width: 63.2rem;
                height: 40.6rem;

                position: absolute;
                bottom: 0;
                left: -6rem;
            }

            > .headerText {
                display: flex;
                flex-direction: column;
                gap: 0.8rem;
                position: absolute;
                bottom: 9.2rem;
                right: 10rem;
    
                h1 {
                    font-size: 4rem;
                    font-weight: 500;
                    line-height: 140%;
                }
    
                p {
                    font-weight: 400;
                    line-height: 100%;
                    font-family: ${({ theme }) => theme.FONTS.SECONDARY};
                }
            }
        }

    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8rem;

    > swipers-container {
        height: 46.2rem;
    }

    > swiper-slide {
        max-width: 30.4rem;
    }
`