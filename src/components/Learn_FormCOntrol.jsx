import React, { useState } from 'react'

const Learn_FormCOntrol = () => {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")

    function UserNameHandler(e){

        setUserName(e.target.value)

    }

    function UserPasswordHandler(e){

        setPassword(e.target.value)

    }

    function FormSubmitHandler(e){
        e.preventDefault();

        const FormData = {
            name : userName,
            user_password : password
        }

        console.log(FormData);

        setUserName("");
        setPassword("")

    }


  return (
    <div className='container' onSubmit={(event) => {FormSubmitHandler(event)}}>
        <form>
            <div>
                <label htmlFor="" className='form-label fs-4 text-light'>UserName : </label>
                <input type="text" className='form-control w-50 fs-4 text-dark' value={userName} onChange={  (event) => {UserNameHandler(event)} }/>
            </div>

            <div>
                <label htmlFor="" className='form-label fs-4 text-light'>Password : </label>
                <input type="password" className='form-control w-50 fs-4 text-dark' value={password} onChange={(event) => {UserPasswordHandler(event)}} />
            </div>
            <button className='btn bg-secondary mt-3 text-light fs-4' type='submit'>Submit</button>
            
        </form>
    </div>

  )
}

export default Learn_FormCOntrol