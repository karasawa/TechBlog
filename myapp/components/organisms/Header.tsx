import React from 'react'
import Link from "next/link";

export const Header = () => {
  return (
    <div className="h-12 bg-stone-500 flex justify-center items-center text-2xl font-bold text-white">
      <Link href="/blogs" className="text-white">けけブログ</Link>
    </div>
  )
}
