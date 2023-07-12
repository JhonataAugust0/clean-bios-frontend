import React, { useState } from "react";
import { Button } from "components/Button";
import { Column } from "components/Column";
import { Input } from "components/Input";
import { Row } from "components/Row";
import { Text } from "components/Text";

interface FormProps {
  onSubmit: (formData: MyFormData) => void;
}

export interface MyFormData {
  name: string;
  login: string;
  password: string;
  date_nescient: string;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<MyFormData>({
    name: '',
    login: '',
    password: '',
    date_nescient: ''
  });

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <Column width="100%" height="100%">
      <Row>
        <Input
          height="40px"
          width="240px"
          type="text"
          name="name"
          placeholder="nome"
          onChange={handleInputChange}
        />
      </Row>
      <Row>
        <Input
          height="40px"
          width="240px"
          type="text"
          name="login"
          placeholder="login"
          onChange={handleInputChange}
        />
      </Row>
      <Row>
        <Input
          height="40px"
          width="240px"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleInputChange}
        />
      </Row>
      <Row>
        <Input
          height="40px"
          width="240px"
          type="date"
          name="date_nescient"
          placeholder="date_nescient"
          onChange={handleInputChange}
        />
      </Row>
      <Button width="90px" onClick={() => handleSubmit()}>
        Enviar
      </Button>
    </Column>
  );
};
