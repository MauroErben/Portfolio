import { Stack, Text } from '@chakra-ui/react'
import Item from './items'
import {
    SiReact,
    SiRedux,
    SiChakraui
} from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'

import AnimatedBox from '../../box/animatedBox'

const Tecnologias = () => {
    return (
        <AnimatedBox>
            <Text id="tecnologias" fontWeight='bold'>Tecnologías</Text>
                <Stack
                    spacing={[6, 8, 10]}
                    padding={[2, 4, 6, 8]}
                    direction='row'
                >
                    <Item icon={SiReact} color='#5ed9fb' name='React' />
                    <Item icon={SiRedux} color='#793eb8' name='Redux' />
                    <Item icon={FaDatabase} color='#656565' name='SQL' />
                </Stack>
        </AnimatedBox>
    )
}
export default Tecnologias