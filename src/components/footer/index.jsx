import { Stack, Text } from '@chakra-ui/react'
import AnimatedBox from '../Box/AnimatedBox'
import ItemContacto from './Contacto/Contacto'
import {
    FaLinkedin,
    FaGithub,
    FaInstagram
} from 'react-icons/fa'

const Footer = () => {
    return (
        <AnimatedBox>
            <Text id="contacto" fontWeight='bold'>Contacto</Text>
            <Stack
                justify='space-between'
                align='center'
                spacing={[8, 12]}
                direction='row'
                padding={[2, 4, 6, 8]}
            >
                <ItemContacto isLink href='https://www.linkedin.com/in/mauro-erben-247911178/' icon={FaLinkedin}>LinkedIn</ItemContacto>
                <ItemContacto isLink href='https://github.com/MauroErben' icon={FaGithub}>GitHub</ItemContacto>
                <ItemContacto isLink href='https://www.instagram.com/mauro_erben/' icon={FaInstagram}>Instagram</ItemContacto>
            </Stack>
        </AnimatedBox>
    )
}
export default Footer