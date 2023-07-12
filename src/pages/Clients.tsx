import { useEffect, useState } from 'react';
import { Row, Column, Header, Table, Footer } from '../components';

export const Clients = () => {
  const [clientsData, setClientsData] = useState([]);

  useEffect(() => {
    loadClients();
  }, []);

  const handleRemove = (id: string) => {
    fetch(`https://cleanbios-back-end.onrender.com//User/Remove?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
  };

  const loadClients = () => {
    fetch('https://cleanbios-back-end.onrender.com//User/Listing', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      const modifiedData = data.map((schedule: { id: string; }) => ({
        ...schedule,
        actions: (
          <>
            <button onClick={() => handleRemove(schedule.id)}>Remover</button>
          </>
        ),
      }));
        console.log(modifiedData);
        setClientsData(modifiedData);
      })
      .catch(error => {
        // Lógica para lidar com erros de solicitação
      });
  };

  const columns = ['id', 'name', 'login', 'password', 'dateNescient', 'actions'];

  return (
    <Column >
      <Row >
        <Header />
        <Footer />
      </Row>

      <Column style={{ width: "80rem", justifyContent: "left", alignItems: "left", margin: "28px 8px 0px 128px"}}>
        <Row>
        <Table data={clientsData} columns={columns} />
        </Row>
      </Column>
    </Column>
  )
}
