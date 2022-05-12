import { Box, Image } from "@chakra-ui/react"

const Logo = () => {
    return (
        <Box
            marginEnd={4}
        >
            <Image
                src="/images/yo.jpeg"
                boxSize='50px'
                borderRadius='full'
            />
        </Box>
    )
}
export default Logo