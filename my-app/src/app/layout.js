import Header from './header'

const Layout = ({Children}) => (
  <>
  <Header/>

  <main>{Children}</main>
  </>
)

export default Layout