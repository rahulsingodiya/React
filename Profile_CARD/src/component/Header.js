import React from 'react'

const Header = ({infoData}) => {
    console.log(infoData);
  return (
    <div className="card-header">
        <div className="card-cover"></div>
        <img className='card-profile' srcSet='https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80' alt='AA'/>            
        <div className="card-profile-name">Rahul Singodiya</div>
        <div className="card-jobtitle">UI designer</div>
    </div>
  )
}

export default Header