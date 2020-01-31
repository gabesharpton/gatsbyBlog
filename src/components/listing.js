import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'


const LISTING_QUERY = graphql`
    query BlogPostListing {
        allMarkdownRemark(limit: 10, sort: {order: DESC, fields: [frontmatter___slug]}) {
        edges {
            node {
            excerpt
            frontmatter {
                title
                slug
                date(formatString: "MMMM Do, YYYY")
            }
            }
        }
        }
    }`


    const Post = styled.article`
        box-shadow: 0px 3px 10px rgba(25,16,34,0.05);
        padding: 1rem;
        border-radius: 4px;
        margin-bottom: 1rem;
        a {
            color: black;
            text-decoration: none;
        }
        p {
            font-size: 0.8rem;
        }
        h2 {
            margin-bottom: 0;
            color: cornflowerblue;
        }
        .read-more {
            font-size: 1rem;
            text-decoration: underline;
            color: #524763;
        }
    `


const Listing = () => (
 <StaticQuery 
 query={LISTING_QUERY}
 render={({allMarkdownRemark}) => (
     allMarkdownRemark.edges.map(edge => (
         <Post key={edge.node.frontmatter.slug}>
             <Link to={edge.node.frontmatter.slug}><h2>{edge.node.frontmatter.title}</h2></Link>
             <p>{edge.node.frontmatter.date}</p>
             <p>{edge.node.excerpt}</p>
             <Link to={edge.node.frontmatter.slug } className='read-more'>Read more</Link>
         </ Post>
     ))
 )} />
)

export default Listing