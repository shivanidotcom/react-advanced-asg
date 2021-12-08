import React , { useState }from 'react';
import data from './data';
 
const List = ({ people }) => {
 //const [item, setItem] = useState(data)
  return (
    <>
      {people.map((person) => {
        const {img, id, name, username, email, website,phone } = person;
        return (
          <article key={id} className='person'>
            <img src={img}></img>
            <div>
              <h4>Name: {name}</h4> 
              <p>Username: {username} </p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
              <p>Website: {website}</p>
            </div>
            <br/>
            <hr></hr>

          </article>
          
          
        );
      })}
    </>
  );
};

export default List;
