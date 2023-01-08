import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const AboutPage = () => {
    return (
     /*   <main>
            <h1>About Me</h1>
            <Link to="/">Torna al Home</Link>
            <p>Hi there! Io sono il creatore di questo sito, costruito con Gatsby</p>
        </main>*/

        <Layout pageTitle="About Me">
            <p>Hi there! Io sono il creatore di questo sito, costruito con Gatsby</p>
        </Layout>

    )
}
export const Head = () => <title>About Me</title>
export default AboutPage