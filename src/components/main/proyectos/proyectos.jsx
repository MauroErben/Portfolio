import { VStack, Text } from "@chakra-ui/react"
import AnimatedBox from "../../box/animatedBox"
import ItemProyecto from "./proyectosItem"

const Proyectos = () => {
  return (
    <AnimatedBox>
      <Text id="proyectos" fontWeight='bold'>Proyectos</Text>
      <VStack
        spacing={[4, 4, 6, 8]}
        padding={[2, 4, 6, 8]}
      //marginTop={[2, 2, 4, 4]}
      >
        <ItemProyecto
          imageUrl='/images/huddle-landing.png'
          nombre='Huddle'
          fecha='02/08/2022'
          team='Proyecto personal'
          descripcion='Huddle es una landing page realizada como desafio de Frontend Mentor.'
          href='https://huddle-landing-page-lake.vercel.app/'
          repoRef='https://github.com/MauroErben/Huddle-landing-page'
        />

        <ItemProyecto
          imageUrl='/images/online-notes.png'
          nombre='Online Notes'
          fecha='03/06/2022'
          team='Proyecto personal'
          descripcion='Es una APIRest de notas online en donde podrás crearte una cuenta y administrar tus notas privadas, el backend utiliza Node.js, Express, JWT, Mongodb y el frontend utiliza React y Chakra UI'
          href='https://online-notes-eta.vercel.app/'
          repoRef='https://github.com/MauroErben/notes-frontend'
        />
        <ItemProyecto
          imageUrl='/images/movies.png'
          nombre='ME-Movies'
          fecha='08/04/2022'
          team='Proyecto personal'
          descripcion='Es una app que utiliza las apis de The Movie Database en donde podras ver información sobre películas, próximos estrenos, calificación y agregar tus favoritas a tu cuenta. Utiliza React, Redux y Chakra UI como principales tecnologías.'
          href='https://peliculas-three.vercel.app/'
          repoRef='https://github.com/MauroErben/Peliculas'
        />
        <ItemProyecto
          imageUrl='/images/somos_mas.png'
          nombre='Somos Más ONG'
          fecha='14/02/2022'
          team='Alkemy team'
          descripcion='Fue desarrollada para una ONG junto a un equipo de 8 desarrolladores en Alkemy. Cuenta con varias funcionalidades, entre ellas la posibilidad de realizar donaciones a través de Mercado Pago y utiliza React, Redux y Chakra UI como tecnologías principales.'
          href='https://github.com/alkemyTech/OT142-CLIENT'
          repoRef='https://github.com/alkemyTech/OT142-CLIENT'
        />
        <ItemProyecto
          imageUrl='/images/weather.png'
          nombre='Weather'
          fecha='29/12/2021'
          team='Proyecto personal'
          descripcion='Es una app para ver información meteorológica utilizando las apis de OpenWeatherMap y fue mi primera app desarrollada con React. Utiliza React y Style-Components como tecnologías principales.'
          href='https://weather-seven-beta.vercel.app/'
          repoRef='https://github.com/MauroErben/Weather'
        />
      </VStack>
    </AnimatedBox>
  )
}
export default Proyectos