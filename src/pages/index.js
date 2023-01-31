import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/card'


const IndexPage = () => {
  return (
    <React.Fragment>
       <Layout pageTitle="FrameworkJS">
       <Card>
       </Card>
      </Layout>   
    </React.Fragment>
   
  )
}



//export const Head = () => <Seo title="Home" />
export const Head = () => <title>FrameworkJS</title>
export default IndexPage
