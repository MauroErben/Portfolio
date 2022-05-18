import { Box, Image } from "@chakra-ui/react"

const Logo = () => {
    return (
        <Box
            marginEnd={4}
        >
            <Image
                src="/images/yo.jpg"
                boxSize='60px'
                borderRadius='full'
                fit='cover'
            />
        </Box>
    )
}
export default Logo