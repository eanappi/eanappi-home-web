const Home = {
  view() {
    return m(Layout, [
      m(BlockParallaxText, {
        id: "#parallax-container-header",
        image: "img/bg-abstract-web.jpg",
        title: "Alejandro Nappi",
        description: "Desarrollador web y creativo para el mundo."   
      }),
      m(BlockContentText, {
        id: "#block-content-text-about",
        title: " HOLA A TODOS",
        description: "Hola, soy Alejandro, un desarrollador web multidisciplinario con sede en la bella ciudad de Buenos Aires y desarrollo sitios web hermosos y funcionales. Mis desarrollos utilizan una arquitectura moderna para desarrollo web basada en JavaScript en el lado del cliente, API reutilizables y markup precompilado.",
        email: "eanappi@gmail.com"
      }),
      m(BlockGalleryImage),
      m(BlockContentText, {
        id: "#block-content-text-experience",
        title: " EXPERIENCIA LABORAL",
        description: "Tengo más de 15 años de experiencia y tuve el placer de trabajar con algunas de las mejores empresas de todo el mundo.",
      }),
      m(BlockContentText, {
        id: "#block-content-text-contact",
        title: " ESTAR EN CONTACTO",
        description: "Me encanta escuchar y estoy ansioso por hablar con usted sobre su proyecto. Póngase en contacto si tiene alguna consulta y le responderé lo antes posible.",
      }),
    ])
  }
}