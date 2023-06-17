import React from 'react'
import './Subscription.css'

export default function Subscription() {
  return (
   <>
    <div className='my90 d-flex flex-column bg-light shadow-lg'>
      <div className='d-flex flex-column text-center'>
      <h3 className="fw-bold">WANT $ <span className='fs-2'>10</span> OFF ?</h3>
        <p className='text-16 text-secondary py-2 pb-3'>Join us and get the exclusive sales, product launches, wig tips & more directly delivered to your inbox.</p>
      </div>
        <div class="d-flex justify-center mx-auto">
          <input
            class="w-200 me-2 border-top-0 border-start-0 border-end-0 border-bottom border border-secondary bg-light"
            type="search"
            placeholder="  Your e-mail address"
            aria-label="Search"
          />
          <button class="btn btn-dark rounded-0  px-3" type="submit">
            Subscribe
          </button>
        </div>
    </div>
   </>
  )
}
