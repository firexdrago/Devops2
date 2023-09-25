import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      mensagem: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { email, senha } = this.state;
    if (email === 'helton.meirelles@pucpr.br' && senha === '123456') {
      this.setState({ mensagem: 'Acessado com sucesso!' });
    } else {
      this.setState({ mensagem: 'Usuário ou senha incorretos!' });
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <label>
          E-mail:
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            name="senha"
            value={this.state.senha}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button onClick={this.handleSubmit}>Acessar</button>
        <br />
        <label>{this.state.mensagem}</label>
      </div>
    );
  }
}

export default Login;
