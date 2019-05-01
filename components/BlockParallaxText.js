const BlockParallaxText = {
  view(vnode) {
    return m(`div.scrollspy.parallax-container.white-text.valign-wrapper${vnode.attrs.id}`, 
      m("div.parallax", 
        m(`img[src="${vnode.attrs.image}"]`)
      ),
      m(".row.center",
        m(".col.s12",
          m("h1", vnode.attrs.title),
        ),
        m(".col.s12",
          m("h5", vnode.attrs.description)
        )
      ),
    )
  }
}