import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import gatsbyLogo from "../images/new-logo.png"
import styled from 'styled-components'
// import Img from 'gatsby-image'

const HeaderWrapper = styled.div`
  background: rgb(80,33,180);
  margin-bottom: 1.45rem;
  img {
    margin-bottom: 0;
  }

`;
const HeaderContainer = styled.div`
        margin: 0 auto;
        max-width: 960;
        padding: 0.5rem`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* <Img fluid={data.fileName.childImageSharp.fluid} /> */}
          <img src={gatsbyLogo} alt="Logo" ></img>
        </Link>
      </h1>
    
    </HeaderContainer>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
