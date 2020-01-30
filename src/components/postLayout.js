import React, { Component } from 'react'
import { graphql } from 'gatsby';

import Layout from './layout'



export default class postLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data
        return (
            <Layout>
            <h1>{ markdownRemark.frontmatter.title }</h1>
            <div dangerouslySetInnerHTML={{
                __html: markdownRemark.html
            }} />
            <h4>Date: {markdownRemark.frontmatter.date}</h4>
            </Layout>
        )
    }
}

// Static Query can be used anywhere, but it does not accept variables and can't use context
// Page Query must be used on pages

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(frontmatter: {
            slug: {
                eq: $slug
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