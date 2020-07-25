import React, { Component, Fragment } from 'react';
import { Box, Text, Flex, Heading } from "@primer/components";
import Card from './Card';
import ButtonSocial from "../styled/ButtonSocial"
import Cover from '../styled/Cover';
import RepoGithub from './RepoGithub';
import styled from 'styled-components';

// Link Image
import cover from "./img/bg-min.jpg";
import avatar from "./img/profile-min.jpeg"
// Aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../styled/Footer';

const Profil = styled.div`
    border-radius: 50%;
    height: 200px;
    width: 200px;
    background-image: url(${props => props.imageUrl});
    background-size: 200px 200px;
    border: 1px solid #839296;
`;

class Home extends Component {
    componentDidMount(){	
        document.title = "Maulana Kurnia";	
        AOS.init({	
          duration : 2000	
        })	
      }
    render() { 
        return (  
            <Fragment>
                <Cover imageUrl={cover}/>
                <Box>
                    <Flex flexWrap="nowrap" justifyContent="center" sx={{ marginTop: '-100px' }}>
                        <Profil imageUrl={avatar}/>
                    </Flex>
                    <div data-aos='fade-up' data-smooth-scroll-offset="180" data-aos-easing="ease" data-aos-duration="4000" data-aos-delay="0">
                        <Heading as={Flex} justifyContent="center" mt={1} fontSize={30} fontWeight="700" sx={{

                        }}>Maulana Kurnia</Heading>
                        <Text as={Flex} justifyContent="center" fontSize={15} color="grey" fontStyle="italic">IT Student at UPN "Veteran" Yogyakarta</Text>
                        <ButtonSocial/>
                        <Card/>
                        <RepoGithub/>
                        <Footer/>
                    </div>
                </Box>
            </Fragment>
        );
    }
}
 
export default Home;