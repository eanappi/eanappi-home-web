const BlockHome = {
  view(vnode) {
    return m('div.parallax-container.white-text.valign-wrapper#parallax-container-header', 
      m('div.parallax', 
        m('img[src="img/bg-abstract.jpg"]')
      ),
      m('.row.center',
        m('.s12',
          m('h1', vnode.attrs.title),
        ),
        m('.s12',
          m('h5', vnode.attrs.description)
        )
      ),
    )
  }
}