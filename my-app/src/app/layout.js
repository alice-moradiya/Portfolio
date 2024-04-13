import Header from './header'
import Home from './home.js'


const Layout = ({Children}) => (
  <>
  <Header/>
  <Home />

  <main>{Children}</main>
  </>
)

export default Layout
