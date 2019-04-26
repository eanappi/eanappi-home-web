const Home = {
  view() {
    return m(Layout, [
      m(BlockParallaxText, {
        id: "#parallax-container-header",
        image: "img/bg-abstract-web.jpg",
        title: "Alejandro Nappi",
        description: "Web & Creative Developer for the world"   
      }),
      m(BlockContentText, {
        id: "#block-content-text-about",
        title: " HELLO EVERYONE",
        description: "Hi, I'm Alejandro, a multidisciplinary web developer based in the beautiful city of Buenos Aires and I develop beautiful and functional websites. My developments use a modern web development architecture based on JavaScript on the client side, reusable APIs and precompiled markup.",
        email: "eanappi@gmail.com"
      })
    ])
  }
}