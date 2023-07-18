import { useState } from 'react';
import { Text, Row, Column, Header, Title, Footer, Input, Button } from '../components';

export const Schedulling = () => {
  const [dia, setDia] = useState('');
  const [servico, setServico] = useState('');

  const handleSubmit = () => {
    const formData = {
      dia: dia,
      servico: servico
    };

    // Transforma o objeto formData em uma string no formato x-www-form-urlencoded
    const urlEncodedFormData = Object.keys(formData)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key as keyof typeof formData]))
      .join('&');

    fetch('https://cleanbios-back-end-hhz2.onrender.com/Schedule/Register', {
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

  const handleDiaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDia(event.target.value);
  };

  const handleServicoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setServico(event.target.value);
  };

  return (
    <Column>
      <Row >
        <Header />
        <Footer />
      </Row>

      <Column style={{ justifyContent: "left", alignItems: "left", margin: "28px 8px 0px 128px"}}>
        <Row>
          <Title text="Agendamento de serviço" Tag={'h1'} style={{ fontSize: 'calc(1.325rem + .9vw)' }} />
        </Row>
        <Row style={{ margin: "19px 8px 0px 0"}}>
          <Input height="40px" width="240" type="text" name="servico" placeholder="serviço" value={servico} onChange={handleServicoChange} />
        </Row>
        <Row>
          <Input height="40px" width="240" type="datetime" name="dia" placeholder="dia" value={dia} onChange={handleDiaChange} />
        </Row>
        <Row>
          <Button width="90px" type="submit" onClick={handleSubmit}>Agendar</Button>
        </Row>
      </Column>
    </Column>
  );
};
