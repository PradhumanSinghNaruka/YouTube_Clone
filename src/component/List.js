import React from 'react'

function List() {
    const categories = [
        "All","Music","Entertainment","Experiment","Movies","Gamming","News","Programming",
        "Live","Pradhuman","vidit"
    ];
  return (
    <div className='flex mb-8 space-x-3 overflow-x-scroll overflow-y-hidden'>
      {categories.map((category) => (
        <div
          key={category}
          className='border border-gray-300 bg-gray-200 rounded-md py-2 px-4 mx-2 text-center hover:bg-black hover:text-white duration-300 cursor-pointer'
        >
          {category}
        </div>
      ))}
    </div>
  )
}

export default List
