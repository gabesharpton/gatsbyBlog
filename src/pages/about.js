import React from 'react'
import { Link } from "gatsby"

import Layout from "../components/layout"


const About = () => (
    <Layout>
    <div>
        <h1>About us</h1>
        <p>This is about us text</p>
        <Link to="/">Back</Link>
    </div>
    </Layout>
)
export default About