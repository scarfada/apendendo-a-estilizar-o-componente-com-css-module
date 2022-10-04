import React from 'react';


export default function Alunos({ aluno, idade }) {
  return (
    <div>
      <li>
        {aluno}
        {idade}
      </li>
    </div>
  );
}
