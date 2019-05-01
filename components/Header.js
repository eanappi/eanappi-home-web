const Header = {
  view() {
    return m(".navbar-fixed", 
      m('nav.white', 
        m('div.nav-wrapper.container',
          [
            m('a.brand-logo[href="#"]', 
              'EANAPPI'
            ),
            m('ul.table-of-contents.right.hide-on-med-and-down[id="nav-mobile"]',
              [
                m('li', 
                  m('a[href="#parallax-container-header"]', 
                    'Yo'
                  )
                ),
                m('li', 
                  m('a[href="#parallax-container-works"]', 
                    'Trabajos'
                  )
                ),
                m('li', 
                  m('a[href="#block-content-text-experience"]', 
                    'Experiencia'
                  )
                ),
                m('li', 
                  m('a[href="#block-content-text-contact"]', 
                    'Contacto'
                  )
                ),
              ]
            )
          ]
        )
      )
    )
  }
}