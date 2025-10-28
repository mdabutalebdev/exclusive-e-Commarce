import React from 'react'
import Heading from './shared/Heading'
import CategoryCard from './CategoryCard'
 

const Category = () => {
  return (
    <div className='py-10 bg-gray-50  '> 
        <div className="container mx-auto px-24 ">
            <Heading title={"Categories"} SectionHead={"Browse By Category"} />
            <div className="">
             <CategoryCard/>
            </div>
        </div>
    </div>
  )
}

export default Category