import Header from './header'
import Home from './home.js'
import { SpeedInsights } from "@vercel/speed-insights/next"


const Layout = ({Children}) => (
  <>
  <SpeedInsights/>
  <Header/>
  <Home />

  <main>{Children}</main>
  </>
)

export default Layout
