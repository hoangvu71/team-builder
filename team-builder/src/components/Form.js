import React, { useState } from "react"

function Form(props) {
    const [user, setUser] = useState({ name: "", email:"", role: "" })

    const changeHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.setTeam((prev) => [...prev, user])

        setUser({ name: "", email: "", role: "" })
    }

    return (
        <div>
            <form onSubmit={(event) => submitHandler(event)}>
                <label>
                    <input onChange={(event) => changeHandler(event)} value={user.name} name="name" type="text" placeholder="Name..." />
                </label>
    
                <label>
                    <input onChange={(event) => changeHandler(event)} value={user.email} name="email" type="text" placeholder="Email..." />
                </label>

                <label>
                    <input onChange={(event) => changeHandler(event)} value={user.role} name="role" type="text" placeholder="Role..." />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}






export default Form