import React from 'react';
import PropTypes from 'prop-types';

const Alunos = ({ aluno, idade }) => {
  return (
    <div>
      <li>
        {aluno}-{idade}
      </li>
    </div>
  );
};
Alunos.propTypes = {
  aluno: PropTypes.string.isRequired,
  idade: PropTypes.number.isRequired,
};

export default Alunos;
