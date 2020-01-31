import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'


const POST_ARCHIVE_QUERY = graphql`
                                    query BlogPostArchive {
                                        allMarkdownRemark(limit: 5, sort: {
                                            order: DESC,
                                            fields: [frontmatter___slug]
                                          }) {
                                        edges{
                                            node {
                                            frontmatter {
                                                title
                                                slug
                                            }
                                            
                                            }
                                        }
                                        }
  }`

const Archive = () => {
    
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
      <>
    <aside>
        <h1>Archive</h1>
        {data.allMarkdownRemark.edges.map(edge => (
            <ArchiveList>
            <li key={edge.node.frontmatter.title}>
               <Link to={edge.node.frontmatter.slug}>{edge.node.frontmatter.title} </Link> 
            </li>
            </ArchiveList>
        ))}
    </aside>
    </>
  )
}


export default Archive

const ArchiveList = styled.ul`
        padding: 0;
        margin: 0;
        list-style: none;
        a {
            font-size: 1rem;
            text-decoration: underline;
            color: #524763;
        }
`;