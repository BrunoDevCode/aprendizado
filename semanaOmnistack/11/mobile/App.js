import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';

// Todos elementos possuem display 'FLEX'
// Estilos usam camelCase
// Os Valores de estilos que não for numero usam ''
// Não existe herança de estilos (Pai -> Filho)

export default function App() {
  return (
    <Routes />
  );
}