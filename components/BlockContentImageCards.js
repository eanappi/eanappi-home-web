const BlockGalleryImageCards = {
  view(vnode) {
    return m(`div.scrollspy.block-content-card${vnode.attrs.id ? vnode.attrs.id : ""}`, 
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
          m(".card.small",
            m(".card-image", 
              m("img[src='https://placeimg.com/640/480/animals/grayscale']"),
              m("span.card-title", "LOLOL")
            )
          )
        )
      )
    )
  }
}