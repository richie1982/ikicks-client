import React, { useState } from 'react'
import { logIn } from './services/api'

const App = (): JSX.Element => {

    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")

    const handleSubmit = (e): void => {
        e.preventDefault()
        logIn(email, password)
            .then(data => console.log("data:", data))
        setEmail("")
        setPassword("")
    }

    return(
        <div>
            <h1>iKicks</h1>
            <form
                onSubmit={e => handleSubmit(e)}
            >
                <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"

                />
                <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default App