import React, { useState, useContext } from 'react'
import { useObserver } from 'mobx-react-lite'
import { CTX } from './Store'
import { logIn } from './services/api'

const App = (): JSX.Element => {

    const store = useContext(CTX)

    const [ email, setEmail ] = useState<string>("")
    const [ password, setPassword ] = useState<string>("")

    const handleSubmit = (e): void => {
        e.preventDefault()
        logIn(email, password)
            .then(data => {
                console.log(data)
                store.setUser(data.user)
            })
        setEmail("")
        setPassword("")
    }

    return useObserver(() => (
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
                <button
                onClick={store.removeUser}
                >Clear</button>
        </div>
    ))
}

export default App