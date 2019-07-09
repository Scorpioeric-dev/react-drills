import React,{Component} from 'react'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            userName:'',
            password:''
        }
         
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleUsernameChange(name) {
        this.setState({ username: name })
    }
    handlePasswordChange(pass) {
        this.setState({ password: pass})
        }
        handleLogin(){
            alert(`Username: ${this.state.username} password: ${this.state.password}`)
        }
            
render(){
    return (
        <div>
            <input onChange={e=>this.handleUsernameChange(e.target.value)}
            type='text' />
            <input onChange={e=>this.handlePasswordChange(e.target.value)}
            type='text' />
            <button onClick={this.handleLogin}>Login</button>
        </div>
    )
  }

}
export default Login;