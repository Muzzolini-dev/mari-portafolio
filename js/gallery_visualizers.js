// Datos de los proyectos - cada proyecto contiene su propio conjunto de imágenes
const projects = [
  // Proyecto 1 - 4 Gatos
  {
    id: 1,
    title: "4 Gatos y tú",
    description: "Santuario para gatos",
    thumbnail: "images/4gatos/4g-portada.jpg",
    images: [
      { src: "images/4gatos/4g-portada.jpg", title: "4 Gatos y Tú Imagen 1", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-1.jpg", title: "4 Gatos y Tú Imagen 2", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-2.jpg", title: "4 Gatos y Tú Imagen 3", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-3.jpg", title: "4 Gatos y Tú Imagen 4", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-4.jpg", title: "4 Gatos y Tú Imagen 5", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-5.jpg", title: "4 Gatos y Tú Imagen 6", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-6.jpg", title: "4 Gatos y Tú Imagen 7", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-7.jpg", title: "4 Gatos y Tú Imagen 8", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-8.jpg", title: "4 Gatos y Tú Imagen 9", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-9.jpg", title: "4 Gatos y Tú Imagen 10", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-10.jpg", title: "4 Gatos y Tú Imagen 11", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-11.jpg", title: "4 Gatos y Tú Imagen 12", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-12.jpg", title: "4 Gatos y Tú Imagen 13", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-13.jpg", title: "4 Gatos y Tú Imagen 14", description: "Descripción de la imagen" },
      { src: "images/4gatos/4g-14.jpg", title: "4 Gatos y Tú Imagen 15", description: "Descripción de la imagen" },
    ]
  },
  // Proyecto 2
  {
    id: 2,
    title: "Atadi Teruel",
    description: "Fundación para personas discapacitadas",
    thumbnail: "images/atadi/at-portada.jpg",
    images: [
      { src: "images/atadi/at-portada.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-1.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-2.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-3.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-4.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-6.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-7.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-8.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-9.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-10.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-11.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-12.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-13.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-14.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      { src: "images/atadi/at-15.jpg", title: "Atadi Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 2" },
      
      
    ]
  },
  // Añade aquí el resto de proyectos...
  {
    id: 3,
    title: "Amigo Mio Teruel",
    description: "Rescate y protección de perros",
    thumbnail: "images/amigomio/am-portada.jpg",
    images: [
      { src: "images/amigomio/am-portada.jpg", title: "Amigo Mio Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 3" },
      { src: "images/amigomio/am-1.jpg", title: "Amigo Mio Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 3" },
      { src: "images/amigomio/am-2.jpg", title: "Amigo Mio Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 3" },
      { src: "images/amigomio/am-3.jpg", title: "Amigo Mio Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 3" },
      { src: "images/amigomio/am-4.jpg", title: "Amigo Mio Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 3" },
      { src: "images/amigomio/am-5.jpg", title: "Amigo Mio Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 3" },
      { src: "images/amigomio/am-6.jpg", title: "Amigo Mio Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 3" },
      { src: "images/amigomio/am-7.jpg", title: "Amigo Mio Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 3" },
      { src: "images/amigomio/am-8.jpg", title: "Amigo Mio Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 3" },
      { src: "images/amigomio/am-9.jpg", title: "Amigo Mio Teruel Imagen 1", description: "Descripción de la imagen 1 del proyecto 3" },

    ]
  },
  {
    id: 4,
    title: "Curso adiestramiento canino - APACHE INNOVACIÓN",
    description: "Formación para el entrenamiento canino",
    thumbnail: "images/perros/perros-portada.jpg",
    images: [
      { src: "images/perros/perros-portada.jpg", title: "Adiestramiento - Imagen 1", description: "Descripción de la imagen 1 del proyecto 4" },
      { src: "images/perros/perros-1.jpg", title: "Adiestramiento - Imagen 1", description: "Descripción de la imagen 1 del proyecto 4" },
      { src: "images/perros/perros-2.jpg", title: "Adiestramiento - Imagen 1", description: "Descripción de la imagen 1 del proyecto 4" },
      { src: "images/perros/perros-3.jpg", title: "Adiestramiento - Imagen 1", description: "Descripción de la imagen 1 del proyecto 4" },
      { src: "images/perros/perros-4.jpg", title: "Adiestramiento - Imagen 1", description: "Descripción de la imagen 1 del proyecto 4" },
      { src: "images/perros/perros-5.jpg", title: "Adiestramiento - Imagen 1", description: "Descripción de la imagen 1 del proyecto 4" },
      { src: "images/perros/perros-6.jpg", title: "Adiestramiento - Imagen 1", description: "Descripción de la imagen 1 del proyecto 4" },
      { src: "images/perros/perros-7.jpg", title: "Adiestramiento - Imagen 1", description: "Descripción de la imagen 1 del proyecto 4" },
      { src: "images/perros/perros-8.jpg", title: "Adiestramiento - Imagen 1", description: "Descripción de la imagen 1 del proyecto 4" },
      { src: "images/perros/perros-9.jpg", title: "Adiestramiento - Imagen 1", description: "Descripción de la imagen 1 del proyecto 4" },
      { src: "images/perros/perros-10.jpg", title: "Adiestramiento - Imagen 1", description: "Descripción de la imagen 1 del proyecto 4" },
      { src: "images/perros/perros-11.jpg", title: "Adiestramiento - Imagen 1", description: "Descripción de la imagen 1 del proyecto 4" },

    ]
  },
  {
    id: 5,
    title: "La Mecánica del Deporte",
    description: "Deportes en silla de ruedas",
    thumbnail: "images/deporte/dep-portada",
    images: [
      { src: "images/deporte/dep-portada.jpg", title: "Proyecto 5 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 5" },
      { src: "images/deporte/dep-1.jpg", title: "Proyecto 5 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 5" },
      { src: "images/deporte/dep-2.jpg", title: "Proyecto 5 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 5" },
      { src: "images/deporte/dep-3.jpg", title: "Proyecto 5 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 5" },
      { src: "images/deporte/dep-4.jpg", title: "Proyecto 5 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 5" },
      { src: "images/deporte/dep-5.jpg", title: "Proyecto 5 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 5" },
      { src: "images/deporte/dep-6.jpg", title: "Proyecto 5 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 5" },
      { src: "images/deporte/dep-7.jpg", title: "Proyecto 5 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 5" },
      { src: "images/deporte/dep-8.jpg", title: "Proyecto 5 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 5" },
      { src: "images/deporte/dep-9.jpg", title: "Proyecto 5 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 5" },
      { src: "images/deporte/dep-10.jpg", title: "Proyecto 5 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 5" },
      { src: "images/deporte/dep-11.jpg", title: "Proyecto 5 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 5" },
      { src: "images/deporte/dep-12.jpg", title: "Proyecto 5 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 5" },


    ]
  },
  {
    id: 6,
    title: "María José y Matilda",
    description: "El amor entre una señora y su perrita",
    thumbnail: "images/matilda/mjm-portada.jpg",
    images: [
      { src: "images/matilda/mjm-portada.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-1.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-2.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-3.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-4.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-5.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-6.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-7.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-8.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-9.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-10.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-11.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-12.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-13.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },
      { src: "images/matilda/mjm-14.jpg", title: "Proyecto 6 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 6" },

    ]
  },
  // Proyectos 7-12 (segundo contenedor)
  {
    id: 7,
    title: "Concurso CSA TROFEO BMW AUGUSTA ARAGON 2025",
    description: "Concurso de equitación en aragón",
    thumbnail: "images/concurso/con-portada.jpg",
    images: [
      { src: "images/concurso/con-portada.jpg", title: "Proyecto 7 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 7" },
      { src: "images/concurso/con-1.jpg", title: "Proyecto 7 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 7" },
      { src: "images/concurso/con-2.jpg", title: "Proyecto 7 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 7" },
      { src: "images/concurso/con-3.jpg", title: "Proyecto 7 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 7" },
      { src: "images/concurso/con-4.jpg", title: "Proyecto 7 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 7" },
      { src: "images/concurso/con-5.jpg", title: "Proyecto 7 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 7" },
      { src: "images/concurso/con-6.jpg", title: "Proyecto 7 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 7" },
      { src: "images/concurso/con-7.jpg", title: "Proyecto 7 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 7" },
      { src: "images/concurso/con-8.jpg", title: "Proyecto 7 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 7" },
    
    ]
  },
  {
    id: 8,
    title: "Street Photography",
    description: "Algunas fotografías representando la naturaleza de la ciudad",
    thumbnail: "images/paisaje/ter-portada.jpg",
    images: [
      { src: "images/paisaje/ter-portada.jpg", title: "Proyecto 8 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 8" },
      { src: "images/paisaje/ter-1.jpg", title: "Proyecto 8 - Imagen 2", description: "Descripción de la imagen 2 del proyecto 8" },
      { src: "images/paisaje/ter-2.jpg", title: "Proyecto 8 - Imagen 2", description: "Descripción de la imagen 2 del proyecto 8" },
      { src: "images/paisaje/ter-3.jpg", title: "Proyecto 8 - Imagen 2", description: "Descripción de la imagen 2 del proyecto 8" },
      { src: "images/paisaje/ter-4.jpg", title: "Proyecto 8 - Imagen 2", description: "Descripción de la imagen 2 del proyecto 8" },
      { src: "images/paisaje/ter-5.jpg", title: "Proyecto 8 - Imagen 2", description: "Descripción de la imagen 2 del proyecto 8" },
      { src: "images/paisaje/ter-6.jpg", title: "Proyecto 8 - Imagen 2", description: "Descripción de la imagen 2 del proyecto 8" },
      { src: "images/paisaje/ter-7.jpg", title: "Proyecto 8 - Imagen 2", description: "Descripción de la imagen 2 del proyecto 8" },
      { src: "images/paisaje/ter-8.jpg", title: "Proyecto 8 - Imagen 2", description: "Descripción de la imagen 2 del proyecto 8" },
      { src: "images/paisaje/ter-9.jpg", title: "Proyecto 8 - Imagen 2", description: "Descripción de la imagen 2 del proyecto 8" },
      { src: "images/paisaje/ter-10.jpg", title: "Proyecto 8 - Imagen 2", description: "Descripción de la imagen 2 del proyecto 8" },
      { src: "images/paisaje/ter-11.jpg", title: "Proyecto 8 - Imagen 2", description: "Descripción de la imagen 2 del proyecto 8" },
      { src: "images/paisaje/ter-12.jpg", title: "Proyecto 8 - Imagen 2", description: "Descripción de la imagen 2 del proyecto 8" },
      { src: "images/paisaje/ter-13.jpg", title: "Proyecto 8 - Imagen 2", description: "Descripción de la imagen 2 del proyecto 8" },

    ]
  },
  {
    id: 9,
    title: "Siete Vidas: Memorias de una Voluntaria",
    description: "La representación del vínculo entre una voluntaria y los gatitos del refugio en el que asiste",
    thumbnail: "images/7vidas/7v-portada.jpg",
    images: [
      { src: "images/7vidas/7v-portada.jpg", title: "Proyecto 9 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 9" },
      { src: "images/7vidas/7v-1.jpg", title: "Proyecto 9 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 9" },
      { src: "images/7vidas/7v-2.jpg", title: "Proyecto 9 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 9" },
      { src: "images/7vidas/7v-3.jpg", title: "Proyecto 9 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 9" },
      { src: "images/7vidas/7v-4.jpg", title: "Proyecto 9 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 9" },
      { src: "images/7vidas/7v-5.jpg", title: "Proyecto 9 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 9" },
      { src: "images/7vidas/7v-6.jpg", title: "Proyecto 9 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 9" },
      { src: "images/7vidas/7v-7.jpg", title: "Proyecto 9 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 9" },
      { src: "images/7vidas/7v-8.jpg", title: "Proyecto 9 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 9" },
      { src: "images/7vidas/7v-9.jpg", title: "Proyecto 9 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 9" },
      { src: "images/7vidas/7v-10.jpg", title: "Proyecto 9 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 9" },
      { src: "images/7vidas/7v-11.jpg", title: "Proyecto 9 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 9" },
      { src: "images/7vidas/7v-12.jpg", title: "Proyecto 9 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 9" },

    ]
  },
  {
    id: 10,
    title: "Curso de Cuidados y Manejos del Caballo - APACHE INNOVACIÓN",
    description: "Descripción del décimo proyecto",
    thumbnail: "images/caballos/cab-portada.jpg",
    images: [
      { src: "images/caballos/cab-portada.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-1.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-2.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-3.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-4.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-5.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-6.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-7.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-8.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-9.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-10.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-11.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-12.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-13.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-14.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-15.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-16.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-17.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-18.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-19.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },
      { src: "images/caballos/cab-20.jpg", title: "Proyecto 10 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 10" },

    ]
  },
  {
    id: 11,
    title: "Venezuela Unida por la Libertad a lo largo del Mundo",
    description: "Crónica de las protestas por la libertad de Venezuela en 2024",
    thumbnail: "images/venezuela/ven-portada.jpg",
    images: [
      { src: "images/venezuela/ven-portada.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-1.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-2.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-3.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-4.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-5.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-6.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-7.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-8.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-9.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-10.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-11.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-12.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-13.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-14.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-15.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },
      { src: "images/venezuela/ven-16.jpg", title: "Proyecto 11 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 11" },

    ]
  },
  {
    id: 12,
    title: "Proyecto Gato Teruel",
    description: "Una protectora para gatos y colonias felinas",
    thumbnail: "images/proyectogato/pg-portada.jpg",
    images: [
      { src: "images/proyectogato/pg-portada.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-1.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-2.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-3.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-4.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-5.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-6.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-7.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-8.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-9.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-10.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-11.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-12.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-13.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-14.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-15.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-16.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },
      { src: "images/proyectogato/pg-17.jpg", title: "Proyecto 12 - Imagen 1", description: "Descripción de la imagen 1 del proyecto 12" },

    ]
  }
];

// Asegúrate de que el DOM está cargado
document.addEventListener('DOMContentLoaded', function() {
  console.log("Documento cargado - Inicializando visualizador de galería");
  
  // Inicializar el visualizador
  init();
});

// Función de inicialización
function init() {
  // Obtener elementos del DOM para el modal
  const projectModal = document.getElementById('projectModal');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalThumbnails = document.getElementById('modalThumbnails');
  const modalImage = document.getElementById('modalImage');
  const modalClose = document.getElementById('modalClose');
  const modalPrev = document.getElementById('modalPrev');
  const modalNext = document.getElementById('modalNext');
  const imageTitle = document.getElementById('imageTitle');
  const imageDesc = document.getElementById('imageDesc');
  
  // Verificar que todos los elementos necesarios existen
  if (!projectModal || !modalProjectTitle || !modalThumbnails || !modalImage || 
      !modalClose || !modalPrev || !modalNext || !imageTitle || !imageDesc) {
    console.error("No se pudieron encontrar todos los elementos del modal");
    return; // Salir si faltan elementos
  }
  
  console.log("Elementos del modal encontrados");
  
  // Variable para rastrear el proyecto y la imagen actual
  let currentProject = null;
  let currentImageIndex = 0;
  
  // Buscar todas las cajas de imágenes que deben ser clicables
  const imgBoxes = document.querySelectorAll('.img-box.project-card');
  console.log(`Encontradas ${imgBoxes.length} cajas de imágenes con clase .img-box.project-card`);
  
  // Si no hay ninguna, intentar con todas las .img-box
  if (imgBoxes.length === 0) {
    const allImgBoxes = document.querySelectorAll('.gallery_section .img-box');
    console.log(`Intentando con todas las .img-box: ${allImgBoxes.length} encontradas`);
    
    allImgBoxes.forEach(imgBox => {
      // Solo añadir evento si no es para videos (tiene clase fx)
      if (!imgBox.classList.contains('fx')) {
        addClickEvent(imgBox);
      }
    });
  } else {
    // Añadir eventos de clic a las cajas encontradas
    imgBoxes.forEach(imgBox => {
      addClickEvent(imgBox);
    });
  }
  
  // Función para añadir evento de clic a un elemento
  function addClickEvent(element) {
    // Asegurarnos de que tiene el estilo de puntero
    element.style.cursor = 'pointer';
    
    // Añadir evento de clic
    element.addEventListener('click', function(e) {
      e.preventDefault();
      const projectId = parseInt(this.dataset.projectId);
      console.log(`Clic en proyecto ID: ${projectId}`);
      
      if (projectId) {
        openProject(projectId);
      } else {
        console.warn("Este elemento no tiene un ID de proyecto asignado");
      }
    });
    
    console.log(`Evento de clic añadido a elemento con ID de proyecto: ${element.dataset.projectId}`);
  }
  
  // Función para abrir un proyecto
  function openProject(projectId) {
    // Buscar el proyecto
    currentProject = projects.find(p => p.id === projectId);
    
    if (!currentProject) {
      console.error(`No se encontró ningún proyecto con ID: ${projectId}`);
      return;
    }
    
    console.log(`Abriendo proyecto: ${currentProject.title}`);
    
    // Actualizar título
    modalProjectTitle.textContent = currentProject.title;
    
    // Resetear índice de imagen
    currentImageIndex = 0;
    
    // Limpiar miniaturas
    modalThumbnails.innerHTML = '';
    
    // Crear miniaturas
    currentProject.images.forEach((image, index) => {
      const thumbnail = document.createElement('img');
      thumbnail.className = index === 0 ? 'modal-thumbnail active' : 'modal-thumbnail';
      thumbnail.src = image.src;
      thumbnail.alt = image.title;
      thumbnail.dataset.index = index;
      
      thumbnail.addEventListener('click', function() {
        // Actualizar miniaturas activas
        const thumbs = modalThumbnails.querySelectorAll('.modal-thumbnail');
        thumbs.forEach(thumb => thumb.classList.remove('active'));
        this.classList.add('active');
        
        // Actualizar imagen
        currentImageIndex = parseInt(this.dataset.index);
        updateModalImage();
      });
      
      modalThumbnails.appendChild(thumbnail);
    });
    
    // Mostrar primera imagen
    updateModalImage();
    
    // Mostrar modal
    projectModal.style.display = 'block';
    console.log("Modal mostrado");
  }
  
  // Función para actualizar la imagen mostrada
  function updateModalImage() {
    if (!currentProject || !currentProject.images.length) {
      console.error("No hay proyecto actual o no tiene imágenes");
      return;
    }
    
    const image = currentProject.images[currentImageIndex];
    console.log(`Mostrando imagen: ${image.title}`);
    
    modalImage.src = image.src;
    modalImage.alt = image.title;
    imageTitle.textContent = image.title;
    imageDesc.textContent = image.description;
    
    // Actualizar miniatura activa
    const thumbs = modalThumbnails.querySelectorAll('.modal-thumbnail');
    thumbs.forEach(thumb => {
      thumb.classList.remove('active');
      if (parseInt(thumb.dataset.index) === currentImageIndex) {
        thumb.classList.add('active');
        thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }
  
  // Evento para cerrar modal
  modalClose.addEventListener('click', function() {
    projectModal.style.display = 'none';
    console.log("Modal cerrado");
  });
  
  // Evento para ir a imagen anterior
  modalPrev.addEventListener('click', function() {
    if (!currentProject || !currentProject.images.length) return;
    
    currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
    updateModalImage();
    console.log("Navegación: imagen anterior");
  });
  
  // Evento para ir a imagen siguiente
  modalNext.addEventListener('click', function() {
    if (!currentProject || !currentProject.images.length) return;
    
    currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
    updateModalImage();
    console.log("Navegación: imagen siguiente");
  });
  
  // Cerrar modal al hacer clic fuera del contenido
  projectModal.addEventListener('click', function(e) {
    if (e.target === projectModal) {
      projectModal.style.display = 'none';
      console.log("Modal cerrado por clic fuera");
    }
  });
  
  // Navegación con teclado
  document.addEventListener('keydown', function(e) {
    if (projectModal.style.display === 'block') {
      if (e.key === 'ArrowLeft') {
        modalPrev.click();
      } else if (e.key === 'ArrowRight') {
        modalNext.click();
      } else if (e.key === 'Escape') {
        projectModal.style.display = 'none';
        console.log("Modal cerrado por tecla Escape");
      }
    }
  });
  
  console.log("Visualizador inicializado correctamente");
}