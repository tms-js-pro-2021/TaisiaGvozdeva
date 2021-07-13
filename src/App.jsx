import React, { useEffect, useState } from "react";

export default function App() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log('mounted')

    return () => {
      console.log('unmounted')
    }
  }, []) 

  const handelClick = () => {
    setState('')
  }

    return (
      <div>
        <button onClick={() => setLogin('login')}>mount</button>
        {login && (
          <button onClick={handelClick}>{login}</button>
        )}       
      </div>
    )
  }
