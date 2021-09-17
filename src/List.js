import React from 'react'

function List({people}) {
    return (
       <>
       {people.map((person) => {
           const {name, age, image, id} = person;
           return(
               <article className='person' key={id}>
                   <img src={image} alt={name} />
                   <div>
                       <h4>{name}</h4>
                       <p>{age} yosh</p>
                   </div>
               </article>
           )
       })}
       </>
    )
}

export default List
