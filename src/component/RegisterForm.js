const RegisterForm = ({handleSubmit,name,setName,email,setEmail,password,setPassword}) => (
    <form onSubmit={handleSubmit}>
        <div className="form-group">

                <label>Your Name</label>
                <input type="text" className="form-control" placeholder="enter name" value={name}
                 onChange={(e)=> setName(e.target.value)} />

        </div>


        <div className="form-group">

                <label>Your email</label>
                <input type="email" className="form-control" placeholder="enter email" value={email}
                 onChange={(e)=> setEmail(e.target.value)} />

        </div>

        <div className="form-group">

                <label>Your password</label>
                <input type="password" className="form-control" placeholder="enter password" value={password}
                 onChange={(e)=> setPassword(e.target.value)} />

        </div>
        <button className="btn btn-primary">Submit</button>
    </form>
)


export default RegisterForm