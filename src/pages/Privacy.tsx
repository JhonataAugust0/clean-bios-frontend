import { Text, Row, Column, Header, Title, Footer } from '../components';

export const Privacy = () => {
  return (
    <Column >
      <Row >
        <Header />
        <Footer />
      </Row>

      <Column style={{ justifyContent: "left", alignItems: "left", margin: "28px 8px 0px 128px"}}>
        <Row>
          <Title text="Privacy Policy" Tag={'h1'}
            style={{ fontSize: 'calc(1.275rem + 2.4vw)' }}
          />
        </Row>
        <Row>
          <Text>Use this page to detail your site's privacy policy.</Text>
        </Row>
      </Column>
    </Column>
  )
}
