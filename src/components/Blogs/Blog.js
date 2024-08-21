import React from 'react'
import { Data } from './Data';
import { useParams} from 'react-router-dom'

export default function BlogDetail() {
  const {id} = useParams();
  const blog = Data.find((p)=>p.id===parseInt(id));
  
  return (
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
  <div class="max-w-2xl">
    <div class="flex justify-between items-center mb-6">
      <div class="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
        <div class="shrink-0">
          <img class="size-12 rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
        </div>

        <div class="grow">
          <div class="flex justify-between items-center gap-x-2">
            <div>
              <div class="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                
                  <span class="font-semibold text-gray-800 dark:text-neutral-200">
                    {blog.author}
                  </span>
                
              </div>
            
              <ul class="text-xs text-gray-500 dark:text-neutral-500">
                <li class="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                  Jan 18
                </li>
                <li class="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                  8 min read
                </li>
              </ul>
            </div>  
          </div>
        </div>
      </div>
    </div>
    
    <div class="space-y-5 md:space-y-8">
      <div class="space-y-3">
        <p class="text-lg text-green-400 ">{blog.category}</p>
        <h2 class="text-2xl font-bold md:text-3xl dark:text-white">{blog.title}</h2>

        
      </div>

      <p class="text-lg text-gray-800 dark:text-neutral-200">{blog.description}</p>

      <figure>
        <img class="w-full object-cover rounded-xl" src={`${blog.image}`} alt="Blog Image" />
        <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
          A woman sitting at a table.
        </figcaption>
      </figure>
    </div>
    </div>
    </div>
  )
}
