import {
    Box,
    Image,
    Heading,
    Link
} from "@chakra-ui/react"

const ItemProyecto = (props) => {
    return (
        <Link href={props.href} target="_blank">
            <Box maxW='250px'>
                <Image boxSize='full' src={props.imageUrl} alt='Project' />
                <Heading fontWeight='bold' mt={2} size='sm'>{props.nombre}</Heading>
            </Box>
        </Link>
    )
}
export default ItemProyecto