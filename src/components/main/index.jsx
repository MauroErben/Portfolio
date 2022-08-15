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
            spacing={12}
        >
            <Heading size='2xl'><chakra.span color='#0049ae'>¡Hola!</chakra.span>👋 Soy Mauro Erben, desarrollador frontend junior</Heading>
            <Text>Tengo 22 años, soy de Mendoza, Argentina. Me apasiona el desarrollo web, día a día voy mejorando mis habilidades y adquiriendo nuevas para ir sumando experiencia como desarrollador y poder encontrar mi primer empleo en el mundo IT.</Text>
            <Tecnologias />
            <Proyectos />
            <Footer />
        </VStack>
    )
}
export default Main