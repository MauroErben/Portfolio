import { Stack, Text } from '@chakra-ui/react'
import Item from './items'
import {
    SiJavascript,
    SiReact,
    SiHtml5,
    SiCss3,
    SiRedux,
    SiChakraui
} from 'react-icons/si'
import AnimatedBox from '../../box/animatedBox'

const Tecnologias = () => {
    return (
        <AnimatedBox>
             <Text id="tecnologias" fontWeight='bold'>Tecnologías</Text>
            <Stack
                padding={[1, 2, 3, 4]}
                marginTop={[2, 2, 4, 4]}
                direction='row'
            >
                <Item icon={SiHtml5} color='#dd5d26' />
                <Item icon={SiCss3} color='#27a4d9' />
                <Item icon={SiJavascript} color='#efd81d' />
                <Item icon={SiReact} color='#5ed9fb' />
                <Item icon={SiRedux} color='#793eb8' />
                <Item icon={SiChakraui} color='#2cb9ae' />
            </Stack>
        </AnimatedBox>
    )
}
export default Tecnologias