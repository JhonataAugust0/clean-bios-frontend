import { useEffect, useState } from 'react';
import { Row, Column, Header, Table, Footer } from '../components';

export const Schedules = () => {

  const [scheduleData, setscheduleData] = useState([]);

  useEffect(() => {
    loadSchedules();
  }, []);

  const handleRemove = (id: string) => {
    fetch(`https://cleanbios-back-end.onrender.com/Schedule/Remove?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
  };

  const loadSchedules = () => {
    fetch('https://cleanbios-back-end.onrender.com/Schedule/Listing', {
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
        setscheduleData(modifiedData);
      })
      .catch(error => {
        // Lógica para lidar com erros de solicitação
      });
  };

  const columns = ['id', 'dia', 'servico', 'actions'];
  return (
    <Column >
      <Row >
        <Header />
        <Footer />
      </Row>

      <Column style={{ width: "80rem", justifyContent: "left", alignItems: "left", margin: "28px 8px 0px 128px"}}>
        <Row>
          <Table data={scheduleData} columns={columns} />
        </Row>
      </Column>
    </Column>
  )
}
