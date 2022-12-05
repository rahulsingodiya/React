import React from 'react'

const showTab =(tab)=>{
  document.querySelector('.card-about').classList.remove('is-active');
  document.querySelector('.btn-about').classList.remove('is-active');
  document.querySelector('.card-experience').classList.remove('is-active');
  document.querySelector('.btn-experience').classList.remove('is-active');
  document.querySelector('.card-contact').classList.remove('is-active');
  document.querySelector('.btn-contact').classList.remove('is-active');
  if(tab =="about"){
    document.querySelector('.card-about').classList.add('is-active');
    document.querySelector('.btn-about').classList.add('is-active');
  }  else if(tab == "experience"){
    document.querySelector('.card-experience').classList.add('is-active');
    document.querySelector('.btn-experience').classList.add('is-active');
  }  else if(tab == "contact"){
    document.querySelector('.card-contact').classList.add('is-active');
    document.querySelector('.btn-contact').classList.add('is-active');
  }
}

const Footer = () => {
  return (
    <div>
        <div className="card-buttons">
            <button data-section="#about" className="btn-about is-active" onClick={()=>showTab("about")}>ABOUT</button>
            <button data-section="#experience" className="btn-experience" onClick={()=>showTab("experience")}>EXPERIENCE</button>
            <button data-section="#contact" className="btn-contact" onClick={()=>showTab("contact")}>CONTACT</button>
        </div>
</div>
  )
}

export default Footer