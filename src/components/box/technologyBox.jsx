import { chakra } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

const animatedVariant = {
    rest: {
        scale: 1.0,
        transition: {
            duration: 2,
            type: "tween",
            ease: 'easeIn'
        }
    },
    hover: {
        scale: 1.2,
        transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
        }
    }
}
const TechnologyBox = ({ children }) => {
    const Box = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
    })

    return (
        <Box
            initial='rest'
            whileHover='hover'
            variants={animatedVariant}
        >
            {children}
        </Box>
    )
}
export default TechnologyBox