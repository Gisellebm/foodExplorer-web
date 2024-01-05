import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.4rem;
    gap: 1.5rem;
    position: relative;
    width: 30.4rem;
    height: 46.2rem;

    > svg {
        position: absolute;
        top: 1.6rem;
        right: 1.6rem;
    }

    > img {
        width: 17.6rem;
        height: 17.6rem;
    }

    > h3 {
        font-size: 2.4rem;
        line-height: 140%;
    }

    > p {
        font-size: 1.4rem;
        line-height: 160%;
        font-family: ${({ theme }) => theme.FONTS.SECONDARY};
        overflow: hidden; // Removendo barra de rolagem
        text-overflow: ellipsis; // Adicionando "..." ao final
        display: -webkit-box;
        -webkit-line-clamp: 2; // Quantidade de linhas
        -webkit-box-orient: vertical; 
    }

    > span {
        font-family: ${({ theme }) => theme.FONTS.SECONDARY};
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-size: 3.2rem;
        font-weight: 400;
        line-height: 160%;
    }

    > .buttons {
            display: flex;
            width: 100%;
            height: 4.8rem;
            gap: 1.6rem;
    
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
`