import React from 'react'
import Link from "next/link";

type Props = {
    id: string
    title: string
    eyecatch: string
    category: string
}

export const BlogCard:React.FC<Props> = ({id, title, eyecatch, category}) => {
  return (
        <Link href={`/blogs/${id}`} className="md:w-3/5 w-full text-black">
            <div className="md:h-48 rounded p-3 bg-gray-300 m-3 flex md:flex-row flex-col justify-between items-center hover:opacity-70">
                <div className="md:h-48 md:p-0 p-2 flex flex-col justify-center">
                    <div className="text-2xl font-bold ml-5">{title}</div>
                    <div className="md:flex justify-start hidden">
                        <div className="text-lg bg-stone-400 opacity-80 p-1 rounded ml-5 mt-2">#{category}</div>
                    </div>
                </div>
                <img src={eyecatch} className="md:h-44 h-3/5"/>
            </div>
        </Link>
  )
}
