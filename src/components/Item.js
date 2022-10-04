import React from 'react';
import PropTypes from 'prop-types';

export default function Alunos({ aluno, idade }) {
  return (
    <div>
      <li>
        {aluno}-{idade}
      </li>
    </div>
  )
 
}
Alunos.propTypes = {
  aluno: PropTypes.string.isRequired,
  idade: PropTypes.number.isRequired,
}

