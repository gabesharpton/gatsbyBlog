import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Archive = () => {
    
  const data = useStaticQuery(graphql`
  query BlogPostArchive {
    allMarkdownRemark {
      edges{
        node {
          frontmatter {
            title
            path
          }
        
        }
      }
    }
  }
  `)

  return (
      <>
    <aside>
        {data.allMarkdownRemark.edges.map(edge => (
            <li>
                {edge.node.frontmatter.title}
            </li>
        ))}
    </aside>
    </>
  )
}


export default Archive
