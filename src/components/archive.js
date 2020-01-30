import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"


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
            <li key={edge.node.frontmatter.title}>
               <Link to={`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title} </Link> 
            </li>
        ))}
    </aside>
    </>
  )
}


export default Archive
