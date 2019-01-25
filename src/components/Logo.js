import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

function Logo() {
  return (
    <StaticQuery
      query={logoQuery}
      render={data => {
        return (
          <div>
            <Image fixed={data.logo.childImageSharp.fixed} />
          </div>
        )
      }}
    />
  )
}

const logoQuery = graphql`
  query LogoQuery {
    logo: file(absolutePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fixed(width: 530, height: 305) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Logo
