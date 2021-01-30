import react , {useState} from 'react'


const Register = () => {

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")


const handleSubmit = () => {
    alert('enviando info al bakcednd')
}

const registerForm = () => (
    <form onSubmit={handleSubmit}>
        <p>hola</p>
        <button type="submit">submit</button>
    </form>
)


    return ( 
        <>
        <div className="container-fluid h1 bg-secondary p-5 text-center">
            <h1>Registers</h1>
        </div>

        <div className="container">

                <div className="row">

                        <div className="col-md-6 offset-md-3">

                            {registerForm()}
                <p>fojefojofjo</p>

                        </div>


                </div>

        </div>

        </>
     );
}
 
export default Register;