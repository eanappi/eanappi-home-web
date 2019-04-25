const Home = {
  view() {
    return m(Layout, [
      m(BlockParallaxText, {
        id: '#parallax-container-header',
        image: 'img/bg-abstract.jpg',
        title: 'Alejandro Nappi',
        description: 'Web & Creative Developer for the world'   
      }),
      m(BlockContentText, {
        id: '#block-content-text-about',
        title: ' HELLO EVERYONE',
        description: 'Hi! I am Felicity, a multi-disciplinary designer based out of the beautiful New York City and I design beautiful and functional websites and mobile applications.',
        email: 'eanappi@gmail.com'
      })
    ])
  }
}