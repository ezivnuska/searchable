import React from 'react'
// import withSession from 'hoc/withSession'
import {
  Footer,
  Header,
  // Navbar,
  Page
} from './mainlayout'

import './MainLayout.scss'

const MainLayout = ({ children, ...props }) => (
  <div id='main'>
    
    <Header />
    
    {/*<Navbar />*/}

    <div className='container main'>

      <Page {...props}>
        {children}
      </Page>
      
    </div>

    <Footer />

  </div>
)

export default MainLayout
// export default withSession(MainLayout)
