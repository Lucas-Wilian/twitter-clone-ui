import React from 'react';
import * as C from './styles';
interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <C.Container>
      <C.Item>
        <C.Title>{title}</C.Title>
      </C.Item>
      {elements.map((element, index) => (
        <C.Item key={index}>{element}</C.Item>
      ))}
    </C.Container>
  );
};

export default List;
