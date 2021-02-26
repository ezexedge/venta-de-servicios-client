import react , {useState} from 'react'
import axios from 'axios'
import  RegisterForm  from '../component/RegisterForm.js'
import {  toast } from 'react-toastify';

const Register = ({history}) => {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")


const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(name,email,password)

    try{

        const res = await  axios.post('http://localhost:8000/api/register',{
            name: name,
            email: email,
            password: password
        })
     
        console.log('register user',res)

        toast.success('registo exitoso..')
        history.push('login')

    }catch(err){
        console.log(err)
        if(err.response.status === 400) toast.error(err.response.data)


    }
}




    return ( 
        <>
        <div className="container-fluid h1 bg-secondary p-5 text-center">
            <h1>Registers</h1>
        </div>



        <div className="container">

                <div className="row">

                        <div className="col-md-6 offset-md-3">

                        
                        <RegisterForm  
                        
                        handleSubmit={handleSubmit}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}


                        />


                        </div>


                </div>

        </div>

        </>
     );
}
 
export default Register;