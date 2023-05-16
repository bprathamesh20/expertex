import React, { useState } from 'react'
import { postStatus } from '../../../api/firestoreAPI'
import { serverTimestamp } from 'firebase/firestore'

export default function Modal() {
  const [query, setQuery] = useState('')
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const createdAt = serverTimestamp()



  const handleQueryChange = (event) => {
    setQuery(event.target.value)
  }

  const handleTagsChange = (event) => {
    setTags(event.target.value)
  }
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = () => {
    const userEmail = localStorage.getItem('userEmail')
    const tagArray = tags.split(',').map((tag) => tag.trim())
    postStatus({ query, tagArray, createdAt, userEmail, title })

  }

  return (
    <div className='mt-10 ml-5 flex flex-row '>
      {/* The button to open modal */}
      <label htmlFor="my-modal-3" className="btn btn-primary">Post a query</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Make a Post</h3>
          <div className='flex flex-col'>
            <input type="text" className='input  mt-5 bg-slate-800' placeholder='Title' value={title} onChange={handleTitleChange} />
            <input type="text" className='input  mt-5 bg-slate-800' placeholder='Describe your query' value={query} onChange={handleQueryChange} />
            <input type="text" className='input  mt-5 bg-slate-800' placeholder='Tags' value={tags} onChange={handleTagsChange} />
            <button className='btn mt-8' onClick={handleSubmit}>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}
