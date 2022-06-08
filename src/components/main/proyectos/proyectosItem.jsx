import {
    Box,
    Image,
    Heading,
    Text,
    Button,
    VStack,
    Link
} from "@chakra-ui/react"
import AnimatedBox from "../../box/animatedBox"
import { FaGithub } from 'react-icons/fa'

const ItemProyecto = ({ imageUrl, nombre, fecha, team, descripcion, href, repoRef }) => {
    return (
        <AnimatedBox>
            <Box
                boxShadow='2xl'
            >
                <Image src={imageUrl} />
                <VStack
                    spacing={4}
                    padding={[2, 4, 6, 8]}
                >
                    <Heading fontSize='xl'>{nombre}</Heading>
                    <Text fontSize='sm'>{fecha}</Text>
                    <Text fontSize='sm'>{team}</Text>
                    <Text fontSize={['sm', 'md', 'lg']}>{descripcion}</Text>
                    <Link href={href} isExternal>
                        <Button colorScheme='blue' variant='outline'>¡Quiero verlo!</Button>
                    </Link>
                    <Link href={repoRef} isExternal>
                        <Button size='sm' leftIcon={<FaGithub />} colorScheme='blue' variant='outline'>Repositorio</Button>
                    </Link>
                </VStack>
            </Box>
        </AnimatedBox>
    )
}
export default ItemProyecto