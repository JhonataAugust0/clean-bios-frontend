import { useState } from 'react';
import { Text, Row, Column, Header, Title, Footer, Input, Button } from '../components';

export const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = () => {
    const formData = {
      login: login,
      senha: senha
    };

    // Transforma o objeto formData em uma string no formato x-www-form-urlencoded
    const urlEncodedFormData = Object.keys(formData)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key as keyof typeof formData]))
      .join('&');

    fetch('https://cleanbios-back-end.onrender.com/User/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncodedFormData,
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        // Lógica para lidar com erros de solicitação
      });
  };

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handleSenhaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(event.target.value);
  };

  return (
    <Column>
      <Row >
        <Header />
        <Footer />
      </Row>

      <Column style={{ justifyContent: "left", alignItems: "left", margin: "28px 8px 0px 128px"}}>
        <Row>
          <Title text="Login" Tag={'h1'} style={{ fontSize: 'calc(1.325rem + .9vw)' }} />
        </Row>
        <Row style={{ margin: "19px 8px 0px 0"}}>
          <Input height="40px" width="240" type="text" name="login" placeholder="login" value={login} onChange={handleLoginChange} />
        </Row>
        <Row>
          <Input height="40px" width="240" type="password" name="senha" placeholder="senha" value={senha} onChange={handleSenhaChange} />
        </Row>
        <Row>
          <Button width="90px" type="submit" onClick={handleSubmit}>Login</Button>
        </Row>
      </Column>
    </Column>
  );
};
