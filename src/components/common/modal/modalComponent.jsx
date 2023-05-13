import React from 'react'

export default function Modal() {
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
          <input type="text" className='input  mt-5 bg-slate-800' placeholder='Describe your query'/>
          <button className='btn mt-8'>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}
