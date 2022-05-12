import { chakra } from "@chakra-ui/react"
import { isValidMotionProp, motion } from "framer-motion"

const animationVariant = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, y: 100 }
}

const AnimatedBox = ({ children }) => {

    const Box = chakra(motion.div, {
        shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
    })

    return (
        <Box
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
            variants={animationVariant}
        >
            {children}
        </Box>
    )
}
export default AnimatedBox