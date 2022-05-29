import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import Item from './items'
import {
    SiReact,
    SiRedux,
    SiChakraui,
    SiMysql,
} from 'react-icons/si'

import AnimatedBox from '../../box/animatedBox'

const Tecnologias = () => {
    return (
        <AnimatedBox>
            <Text id="tecnologias" fontWeight='bold'>Tecnologías</Text>
            <Box
                padding={[4, 4, 6, 8]}
            >
                <SimpleGrid columns={[2, 4]} spacing={10}>
                    <Item icon={SiReact} color='#5ed9fb' name='React' />
                    <Item icon={SiRedux} color='#793eb8' name='Redux' />
                    <Item icon={SiChakraui} color='#60caca' name='Chakra UI' />
                    <Item icon={SiMysql} color='#5d9ab4' name='MySQL' />
                </SimpleGrid>
            </Box>
        </AnimatedBox>
    )
}
export default Tecnologias