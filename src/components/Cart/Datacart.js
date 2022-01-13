import React, { Component } from 'react'
import Heading from '../Reuseable/Heading'
import { GatsbyImage } from "gatsby-plugin-image"

export default class Datacart extends Component {
    constructor(props){
        super(props)
        this.state={
            courses:props.courses.edges,
            mycourses:props.courses.edges,
        }
    }
    
    render() {
        console.log(this.state.courses)
        return (
            <section className='py-5'>
               <div className='container'>
                <Heading title="Vegetables"/>
                <div className='row'>
                    {
                      this.state.mycourses.map(({node})=>{
                        return(
                            <div
                            key={node.id}
                            className='col-11 col-md-6 d-flex my-3 mx-auto'
                            >
                               <GatsbyImage image={node.image.gatsbyImageData}/>
                               <div className='flex-grow-1 px-3'>
                                <div className='d-flex justify-content-between'>
                                    <h6 className='mb-0'>{node.title}</h6>
                                    <h6 className='mb-0 text-success'>${node.price}</h6>
                                </div>
                                    <p className='text-muted'>
                                    <small >{node.description.description}</small> 
                                    </p>
                                    <button 
                                    data-item-id={node.id}
                                    data-item-price={node.price}
                                    data-item-url="https://ecommercenetlify.netlify.app/"
                                    data-item-image={node.image.gatsbyImageData.GatsbyImage}
                                    data-item-name={node.title}
                                    className='btn btn-warning snipcart-add-item'>Buy Now</button>
                               </div>
                            </div>
                            
                        )
                      })  
                    }
                </div>
               </div>
            </section>
        )
    }
}
