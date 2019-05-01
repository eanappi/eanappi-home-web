const BlockContentText = {
  view(vnode) {
    return m(`div.scrollspy.block-content-text${vnode.attrs.id ? vnode.attrs.id : ""}`, 
      m(".row.container", 
        vnode.attrs.title ? m(".col.s12", 
          m("h6", 
            m("i.material-icons", "mode_comment"),
            vnode.attrs.title
          )
        ) : "",
        m(".col.s12", 
          m("h4", vnode.attrs.description)
        ),
        vnode.attrs.email ? m(".col.s12",
          m("address",
            m(`a[href="mailto:${vnode.attrs.email}"]`, 
              vnode.attrs.email
            )
          )
        ) : "",
      )
    )
  }
}