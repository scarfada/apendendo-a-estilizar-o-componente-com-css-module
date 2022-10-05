import React from 'react';
import './style.css';
import Frase from './components/Frase';
import UsandoProps from './components/UsandoProps';
import Texto from './components/Texto';
import Lista from './components/Lista';
import TemplateExpressions from './components/Template-expressions';
import Events from './components/Events';
import Challenge from './components/Challenge';

export default function App() {
  return (
    <div>
      <Frase />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <UsandoProps nome="Scar" idade="26" estadocivil="namorando" />

      <Texto />

      <Lista />

      <TemplateExpressions />

      <Events />
      <Challenge />
    </div>
  );
}
