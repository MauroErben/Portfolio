import { HStack, Icon, Link, Text } from '@chakra-ui/react'
import AnimatedBox from "../../box/animatedBox"

const ItemContacto = ({ icon, children, isLink = false, href = '/' }) => {
    return (
        <AnimatedBox>
            <HStack
                justify='start'
                align='center'
                padding={2}
                spacing={1}
                fontSize='md'
            >
                <Icon fontSize={20} as={icon} />
                {isLink ? <Link href={href} isExternal>{children}</Link>
                    : <Text>{children}</Text>}
            </HStack>
        </AnimatedBox>
    )
}
export default ItemContacto