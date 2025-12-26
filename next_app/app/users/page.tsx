
import React from 'react'
import ProductCard from '../components/ProductCard'

const UserPage =  async() => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate:10}});
  const users: User[] = await res.json();

  return (
    <div>
      <h1>User</h1>
      <p>{new Date().toLocaleDateString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  )
}

export default UserPage





