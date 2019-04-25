const Home = {
  view() {
    return m(Layout, [
      m(BlockHome,
        {
          title: 'Ernesto Alejandro Nappi',
          description: 'Web & Creative Developer for the world'   
        }
      )
    ])
  }
}