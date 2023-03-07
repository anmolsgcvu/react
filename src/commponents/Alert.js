import React from 'react'

function Alert(props) {
    const c = (w)=>{
        const l=w.toLowerCase();
        return l.charAt(0).toUpperCase() + l.slice(1);
    }
  return (
    
    props.alert && <div className={`alert alert-${props.alert.type} alert-warning alert-dismissible fade show`} role="alert">
   <strong>{c(props.alert.ty)}</strong>: {props.alert.ms}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    
  )
}

export default Alert
