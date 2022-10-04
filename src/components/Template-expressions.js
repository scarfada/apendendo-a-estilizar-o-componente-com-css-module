import React from 'react';
//introdução do js no JSX
const TemplateExpressions = () => {
  const nome = 'Scar';

  const obj = {
    idade: 26,
    profissao: 'Programadora',
  };
  return (
    <div>
      <h3>Olá, {nome}</h3>
      <h4>Você tem {obj.idade} anos de idade</h4>
      <h5>E você é {obj.profissao}</h5>
      <h4>{20 + 20 + 20}</h4>
    </div>
  );
};

export default TemplateExpressions;
