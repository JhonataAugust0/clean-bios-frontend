import { Text, Row, Column, Header, Title, List, Footer } from '../components';

const services = [
  { label: "Limpeza de hardware\nDesmontamos seu equipamento, limpamos os componentes separadamente conforme necessário e o remontamos.\nValor: R$150" },
  { label: "Formatação do sistema\nRealizamos uma cópia segura dos seus arquivos, restauramos o padrão de fábrica do sistema e realocamos seus dados.\nValor: R$150" },
  { label: "Instalação de componente\nIntalamos devidamente seu novo componente em seu aparelho.\nValor: R$100"},
];

export const Home = () => {
  return (
    <Column >
      <Row >
        <Header />
        <Footer />
      </Row>

      <Column style={{ justifyContent: "center", alignItems: "center", margin: "28px 8px 0px 0px"}}>
        <Row>
          <Title text="Bem vindo a CleanBIOS" Tag={'h1'}
            style={{ fontSize: 'calc(1.475rem + 2.7vw)' }}
          />
        </Row>
        <Row>
          <Text>Realizamo-nos por prover aos seus aparelhos a melhor qualidade de vida útil possível</Text>
        </Row>
      </Column>

      <Column style={{ justifyContent: "left", margin: "28px 0px 16px 128px"}} >
        <Row>
          <Title text="Oferecemos:" Tag={'h2'} style={{ fontSize: 'calc(1.275rem + .3vw);' }}/>
        </Row>

        <Row >
          <List items={services} />

        </Row>
      </Column>
    </Column>
  )
}
