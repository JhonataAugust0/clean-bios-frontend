import { Row, Column, Header, Title, Footer, Input, Button, Form } from '../components';


export const Register = () => {
  const handleSubmit = (formData: any) => {
    console.log(formData);

    // Transforma o objeto formData em uma string no formato x-www-form-urlencoded
    const urlEncodedFormData = Object.keys(formData)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
      .join('&');

    fetch('https://cleanbios-back-end-hhz2.onrender.com/User/Register', {
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


  return (
    <Column>
      <Row >
        <Header />
        <Footer />
      </Row>
      <Column style={{ justifyContent: "left", alignItems: "left", margin: "28px 8px 0px 128px" }}>
        <Row>
          <Title
            text="Cadastro"
            Tag={'h1'}
            style={{ fontSize: 'calc(1.325rem + .9vw)' }}
          />
        </Row>
        <Form onSubmit={handleSubmit} />
      </Column>
    </Column>
  );
};
function express() {
  throw new Error('Function not implemented.');
}

