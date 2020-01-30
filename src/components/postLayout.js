import React, { Component } from 'react'
import { graphql } from 'gatsby';

import Layout from './layout'



export default class postLayout extends Component {
    render() {
        return (
            <Layout>
            <h1>hi</h1>
            </Layout>
        )
    }
}

// Static Query can be used anywhere, but it does not accept variables and can't use context
// Page Query must be used on pages

export const query = graphql`
    query PostQuery {
        markdownRemark(frontmatter: {
            slug: {
                eq: "/third-post"
            }
            }) {
            html
            frontmatter {
                title
                date
                slug}
            }
        }
`