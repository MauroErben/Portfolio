import { Box, Container, Stack, Text } from '@chakra-ui/react'
import AnimatedBox from '../box/animatedBox'
import ItemContacto from './contacto/contacto'
import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaPhoneAlt
} from 'react-icons/fa'
import { MdEmail, MdLocationPin } from 'react-icons/md'

const Footer = () => {
    return (
        <Container
            maxWidth='container.md'
        >
            <AnimatedBox>
                <Text id="contacto" fontWeight='bold'>Contacto</Text>
                <Stack
                    justify='space-around'
                    align='center'
                    spacing={[4, 8, 12]}
                    direction={['column', 'column', 'row']}
                    padding={[2, 4, 6, 8]}
                    marginTop={[2, 2, 4, 4]}
                    boxShadow='2xl'
                >
                    <Box>
                        <Text fontWeight='bold'>Redes</Text>
                        <ItemContacto isLink href='https://www.linkedin.com/in/mauro-erben-247911178/' icon={FaLinkedin}>LinkedIn</ItemContacto>
                        <ItemContacto isLink href='https://github.com/MauroErben' icon={FaGithub}>GitHub</ItemContacto>
                        <ItemContacto isLink href='https://www.instagram.com/mauro_erben/' icon={FaInstagram}>Instagram</ItemContacto>
                    </Box>

                    <Box>
                        <Text fontWeight='bold'>Otros</Text>
                        <ItemContacto icon={MdEmail}>xmauro07x@gmail.com</ItemContacto>
                        <ItemContacto icon={FaPhoneAlt}>+54 261-672-1833</ItemContacto>
                        <ItemContacto icon={MdLocationPin}>Mendoza, Argentina</ItemContacto>
                    </Box>
                </Stack>
            </AnimatedBox>
        </Container>
    )
}
export default Footer