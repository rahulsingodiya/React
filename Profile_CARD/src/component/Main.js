import React from 'react'
import About from './About'
import Exprience from './Exprience'
import Contact from './Contact'

const Main = () => {
  return (
    <div>
        <div className="card-main">
            <About></About>
            <Exprience></Exprience>
            <Contact></Contact>
        </div>
    </div>
  )
}

export default Main