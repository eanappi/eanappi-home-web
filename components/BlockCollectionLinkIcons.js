const BlockCollectionLinkIcons = {
  view(vnode)  {
    return m(`div.scrollspy.block-collection-link-icons${vnode.attrs.id ? vnode.attrs.id : ""}`,
      m(".row.container",
        m(".col.s12",
          vnode.attrs.list.map((item) => {
            return m(`a[href="${item.link}"][target="_blank"]`, 
              m(`i.fab.fa-3x.${item.icon}`)
            )
          })     
        )
      )
    )
  }
}