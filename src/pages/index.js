import * as React from "react"
import { graphql } from "gatsby"




// markup
const IndexPage = ({data}) => {
  return (
    <main >
      <title>Home Page</title>
      <h1>
        Gatsby. LET'S GOOOOOOOO!!!!!!!!       
      </h1>
     
     
     
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
             
            >
              {node.frontmatter.title}{" "}
              <span
              
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}

    </main>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
