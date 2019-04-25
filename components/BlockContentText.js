const BlockContentText = {
  view(vnode) {
    return m(`div${vnode.attrs.id}`,
      m('.row.container', 
        m('.col.s12', 
          m('h6', 
            m('i.material-icons', 'mode_comment'),
            `${vnode.attrs.title}`
          )
        ),
        m('.col.s12', 
          m('h4', `${vnode.attrs.description}`)
        ),
        m('.col.s12',
          m('address',
            m(`a[href="mailto:${vnode.attrs.email}"]`, 
              `${vnode.attrs.email}`)
          )
        ),
      )
    )
  }
}