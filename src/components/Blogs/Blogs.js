import React from 'react'
import { Data } from './Data'

export default function Blogs() {
  return (
    <section>
       
            <div >
                <div>
                  <ul className='flex items-center justify-around'>
                    <li className='text-sky-600 bg-sky-200 border-spacing-1 border border-sky-600 py-1 px-3 rounded-full'>Sport</li>
                    <li className='text-sky-600 bg-sky-200 border-spacing-1 border border-sky-600 py-1 px-3 rounded-full'>Cinema</li>
                    <li className='text-sky-600 bg-sky-200 border-spacing-1 border border-sky-600 py-1 px-3 rounded-full'>Music</li>
                    <li className='text-sky-600 bg-sky-200 border-spacing-1 border border-sky-600 py-1 px-3 rounded-full'>Tech</li>
                    <li className='text-sky-600 bg-sky-200 border-spacing-1 border border-sky-600 py-1 px-3 rounded-full'>Life</li>
                  </ul>
                </div>

                <div className='mt-6 mx-9 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                  {Data.slice(0, 8).map((product) => (
                    <article className="group" key={product.id}>
                    <img
                      
                      src={product.image}
                      className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
                    />

                    <div className="p-4">
                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-orange-500">
                      {product.category}
                      </p>
                      <a href="#">
                        <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                      </a>

                      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                      {product.description}
                      </p>
                    </div>
                  </article>
                  ))}
                  
                </div>
            </div>
            
       
    </section>
    
  )
}
