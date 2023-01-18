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
            <p>Hi there 👋👋👋! Io sono il creatore di questo sito👩‍🔬</p>
            <p>Questo sito è nato da una domanda che mi è sorta durante gli studi di programmazione web, ovvero quanti librerie-framework di Javascript ci sono?</p>
            <p>Esplorerò quelli più popolari e quelli che sono pochi diffusi (magari possono servire per qualche project side🚀)</p>
            <p>Sarà anche un modo per approcciarmi all'utilizzo del framework Gasbty ( framework che permette di creare siti statici)</p>
        </Layout>

    )
}
export const Head = () => <title>About Me</title>
export default AboutPage