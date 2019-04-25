const BlockContentText = {
  view(vnode) {
    return m(`div${vnode.attrs.id}`,
      m('.row.container', 
        m('.col.s12', 
          m('h6', 
            m('i.material-icons', 'mode_comment'),
            ' HELLO EVERYONE'
          )
        ),
        m('.col.s12', 
          m('h4', 'Hi! I am Felicity, a multi-disciplinary designer based out of the beautiful New York City and I design beautiful and functional websites and mobile applications.')
        ),
        m('.col.s12',
          m('address',
            m('a[href="mailto:eanappi@gmail.com"]', 'eanappi@gmail.com')
          )
        ),
      )
    )
  }
}