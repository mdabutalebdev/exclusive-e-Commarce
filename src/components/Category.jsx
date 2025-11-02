 
import React from 'react'
import Heading from './shared/Heading'
import CategoryCard from './CategoryCard'
 
const Category = () => {
  return (
    <div className='py-5 bg-gray-50'> 
        <div className="container mx-auto px-4 md:px-24">
            <Heading title={"Categories"} SectionHead={"Browse By Category"} />
            <div>
             <CategoryCard/>
            </div>
        </div>
    </div>
  )
}

export default Category
