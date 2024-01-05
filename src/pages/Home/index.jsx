import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import imgHome from "../../assets/pngegg.png";
import { register } from 'swiper/element/bundle';

register();

export function Home({ isAdmin = true }) {

    const swiperElRef1 = useRef(null);
    const swiperElRef2 = useRef(null);
    const swiperElRef3 = useRef(null);


    useEffect(() => {
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5 // the value in percentage indicates at what visibility the callback should be called
        };
    
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // If the element is visible, start the Swiper autoplay if the ref is not null
              entry.target.swiper && entry.target.swiper.autoplay.start();
            } else {
              // If the element is not visible, stop the Swiper autoplay if the ref is not null
              entry.target.swiper && entry.target.swiper.autoplay.stop();
            }        
          });
        }, options);
    
        // Observe the visibility changes of elements containing Swiper
        observer.observe(swiperElRef1.current);
        observer.observe(swiperElRef2.current);
        observer.observe(swiperElRef3.current);
    
        return () => {
          observer.disconnect();
        }
    }, []);
      

    return (
        <Container>
            <Header />
            <main>
                <header>
                    <img src={imgHome} alt="Biscoitos e frutas" />
                    <div className="headerText">
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </header>

                <Content>
                    <Section title="Refeições" >
                        <swiper-container ref={swiperElRef1} slides-per-view="2" grabCursor="true">
                            <swiper-slide>
                                <Card isAdmin={isAdmin} />
                            </swiper-slide>

                        </swiper-container>
                    
                    </Section>

                    <Section title="Sobremesas" >
                        <swiper-container ref={swiperElRef2} slides-per-view="2" grabCursor="true" >
                            <swiper-slide>
                                <Card isAdmin={isAdmin} />
                            </swiper-slide>
                            <swiper-slide>
                                <Card isAdmin={isAdmin} />
                            </swiper-slide>
                            <swiper-slide>
                                <Card isAdmin={isAdmin} />
                            </swiper-slide>

                        </swiper-container>
                    
                    </Section>

                    <Section title="Bebidas" >
                        <swiper-container ref={swiperElRef3} slides-per-view="2"  grabCursor="true" >
                            <swiper-slide>
                                <Card isAdmin={isAdmin} />
                            </swiper-slide>
                        </swiper-container>
                    </Section>


                </Content>
            </main>
            <Footer />
        </Container>
    )
}

Home.propTypes = {
    isAdmin: PropTypes.bool
}