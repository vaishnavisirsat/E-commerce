import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Infoblock from '../components/Reuseable/Infoblock'
import DualInfoblock from '../components/Reuseable/DualInfoblock'
import { StaticImage } from "gatsby-plugin-image"
import Datacart from '../components/Cart/Datacart'

const IndexPage = ({data}) => {
  return (
   <Layout>
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
        }}
        Layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={3 / 2}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={
          "../images/heromain.png"
        }
        formats={["auto", "webp", "avif"]}
      />
      <div
      
        style={{
          // By using the same grid area for both, they are stacked on top of each other
         
         //minHeight:"100 vh",
         gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          color:"white",
          display:'grid',
          }}
        
      >
        <h1>text here</h1>
       </div>
    </div>
    <Infoblock heading="About Us"/>
    <Datacart courses={data.courses}/>
    <DualInfoblock heading="Our Team"/>
    </Layout>
  )
}
export const query = graphql`
{
  courses: allContentfulCources {
    edges {
      node {
        id
        title
        price
        category
        description {
          description
        }
        image {
          gatsbyImageData(height: 210, width: 300)
            
          
        }
      }
    }
  }
}

`
export default IndexPage