import { HStack, Icon, Link } from '@chakra-ui/react'

const ItemContacto = ({ icon, children, href = '/' }) => {
    return (
        <HStack
            align='center'
            spacing={1}
            fontSize={['sm', 'lg']}
        >
            <Icon fontSize={20} as={icon} />
            <Link href={href} isExternal>{children}</Link>
        </HStack>
    )
}
export default ItemContacto