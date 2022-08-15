import { SimpleGrid, Text } from "@chakra-ui/react"
import AnimatedBox from "../../Box/AnimatedBox"
import ItemProyecto from "./ProyectosItem"

const Proyectos = () => {
  return (
    <AnimatedBox>
      <Text id="proyectos" fontWeight='bold'>Proyectos</Text>
      <SimpleGrid
        columns={[1, 3]}
        spacing={6}
        p={[2, 4, 6, 8]}
      >
        <ItemProyecto
          imageUrl='/images/huddle-landing.png'
          nombre='Huddle'
          href='https://huddle-landing-page-lake.vercel.app/'
          repoRef='https://github.com/MauroErben/Huddle-landing-page'
        />

        <ItemProyecto
          imageUrl='/images/online-notes.png'
          nombre='Online Notes'
          href='https://online-notes-eta.vercel.app/'
          repoRef='https://github.com/MauroErben/notes-frontend'
        />
        <ItemProyecto
          imageUrl='/images/movies.png'
          nombre='ME-Movies'
          href='https://peliculas-three.vercel.app/'
          repoRef='https://github.com/MauroErben/Peliculas'
        />
        <ItemProyecto
          imageUrl='/images/somos_mas.png'
          nombre='Somos Más ONG'
          href='https://github.com/alkemyTech/OT142-CLIENT'
          repoRef='https://github.com/alkemyTech/OT142-CLIENT'
        />
        <ItemProyecto
          imageUrl='/images/weather.png'
          nombre='Weather'
          href='https://weather-seven-beta.vercel.app/'
          repoRef='https://github.com/MauroErben/Weather'
        />
      </SimpleGrid>
    </AnimatedBox>
  )
}
export default Proyectos