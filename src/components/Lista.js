import React from 'react';
import Alunos from './Item';

export default function List() {
  return (
    <>
      <h2>Lista de Alunos</h2>
      <ul>
        <Alunos aluno="Laura" idade={19} />
        <Alunos aluno="Esmeraldo" idade={20} />
        <Alunos aluno="Tim" idade={28} />
        <Alunos aluno="Carmem" idade={26} />
        <Alunos aluno="Alex" idade={19} />
        <Alunos aluno="Car" idade={24} />
      </ul>
    </>
  );
}
