import React from 'react'
import Header from './Header/Header'
import { AddExpense } from './card/AddExpense'

function Home() {
  return (
    <>
    <div>
      <div >
       <Header/>
      </div>
      <div className='ml-20 pt-20'>
       <AddExpense/>
      </div>
    </div>
    </>
    
  )
}

export default Home
