import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Dashboard</h1>
                <p className='text-light lead'>A dashboard is a visual interface that brings together key data, metrics, and insights in one centralized place. It helps users monitor performance, identify trends, and make quicker, more informed decisions. With interactive elements like charts and summaries, a dashboard makes complex information easy to understand at a glance.</p>
                <Button text='Login' class='btn-outline-info'/>
            </div>
        </div>
    
    </>
  )
}

export default Main