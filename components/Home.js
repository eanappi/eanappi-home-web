const Home = {
  oncreate() {
    let elems = document.querySelectorAll('.parallax')
    let instances = M.Parallax.init(elems)
  },
  view() {
    return m(Layout, [
      m(BlockParallaxText, Db.row1),
      m(BlockContentText, Db.row2),
      m(BlockParallaxText, Db.row3),
      m(BlockContentText, Db.row4),
      m(BlockCollectionAvatarContent, Db.row5),
      m(BlockContentText, Db.row6),
      m(BlockCollectionLinkIcons, Db.row7)
    ])
  }
}