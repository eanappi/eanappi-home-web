const BlockCollectionAvatarContent = {
  view(vnode) {
    return m(`div.scrollspy.block-collection-avatar-content${vnode.attrs.id ? vnode.attrs.id : ""}`, 
      m(".row.container", 
        vnode.attrs.title ? m(".col.s12", 
          m("h6", 
            m("i.material-icons", "mode_comment"),
            vnode.attrs.title
          )
        ) : "",
      ),
      m(".row.container",
        m(".col.s12",
          m("ul.collection", vnode.attrs.list.map( (item) => {
            return m("li.collection-item.avatar.valign-wrapper",
              [
                m(`i.fab.fa-5x.${item.icon}`),
                m("h6.title", 
                  item.title
                )
              ]
            )
          }))
        )
      )
    )
  }
}