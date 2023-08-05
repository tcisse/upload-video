import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="flex justify-evenly w-full">
        <Link href="/upload-button">Upload Button</Link>
        <Link href="/upload-dnd">Upload Drag and Drop</Link>
      </div>
    </div>
  )
}
