const Home = {
  oncreate() {
    let elParallax = document.querySelectorAll('.parallax')
    let instancesParallax = M.Parallax.init(elParallax)
    
    var elScrollspy = document.querySelectorAll('.scrollspy');
    var instancesScrollspy = M.ScrollSpy.init(elScrollspy);
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