const Home = {
  view() {
    return m(Layout, [
      m(BlockParallaxText, {
        id: '#parallax-container-header',
        image: 'img/bg-abstract.jpg',
        title: 'Ernesto Alejandro Nappi',
        description: 'Web & Creative Developer for the world'   
      }),
      m(BlockContentText, {
        id: '#block-content-text-about'
      })
    ])
  }
}