import { VStack, Heading, Text, chakra } from "@chakra-ui/react"
import Footer from "../footer"
import Proyectos from "./proyectos/proyectos"
import Tecnologias from "./tecnologias/tecnologias"

const Main = () => {
    return (
        <VStack
            height='100vh'
            padding={[2, 4, 6, 8]}
            justify='start'
            marginTop={[2, 2, 4, 4]}
            textAlign='center'
            fontSize={['sm', 'md', 'lg', 'xl']}
            spacing={6}
        >
            <Heading><chakra.span color='blue.300'>¡Hola!</chakra.span> Soy Mauro Erben, desarrollador frontend junior con experiencia en React.js y en busca de nuevos conocimientos</Heading>
            <Text>Tengo 22 años, soy de Mendoza, Argentina. Me apasiona el desarrollo web, día a día voy mejorando mis habilidades y adquiriendo nuevas para ir sumando experiencia como desarrollador.</Text>
            <Tecnologias />
            <Proyectos />
            <Footer />
        </VStack>
    )
}
export default Main