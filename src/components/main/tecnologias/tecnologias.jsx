import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import Item from './items'
import {
    SiReact,
    SiRedux,
    SiChakraui,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMysql,
    SiMongodb
} from 'react-icons/si'

import AnimatedBox from '../../box/animatedBox'

const Tecnologias = () => {
    return (
        <AnimatedBox>
            <Text id="tecnologias" fontWeight='bold'>Tecnologías</Text>
            <Box
                padding={[4, 4, 6, 8]}
            >
                <SimpleGrid columns={[3, 4, 5]} spacing={10}>
                    <Item icon={SiReact} color='#5ed9fb' name='React' />
                    <Item icon={SiRedux} color='#793eb8' name='Redux' />
                    <Item icon={SiNodedotjs} color='#7fc728' name='Node' />
                    <Item icon={SiExpress} color='#7fc728' name='Express' />
                    <Item icon={SiMongodb} color='#419342' name='MongoDB' />
                    <Item icon={SiMysql} color='#005e87' name='SQL' />
                    <Item icon={SiChakraui} color='#60caca' name='Chakra UI' />
                    <Item icon={SiTailwindcss} color='#38bdf8' name='Tailwind' />
                </SimpleGrid>
            </Box>
        </AnimatedBox>
    )
}
export default Tecnologias