import React from 'react'

const SearchBar = (props)=>{
  return(
    <div>

       <form onSubmit={props.handleSubmit}> 
       <button >search</button>
        <input 
        onChange={props.handleChange}
        value={props.inputValue} />
       </form> 


    </div>
  )
}

export default SearchBar;