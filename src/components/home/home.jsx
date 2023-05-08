import React from 'react'
import Main from '../template/main'

export default props => (
  <Main icon="home" title="Início" subtitle="CRUD">
    <div className="display-4">Bem vindo!</div>
    <hr />
    <p className="mb-0">
      {' '}
      Sistema para exemplificar um cadastro desenvolvido em REACT
    </p>
  </Main>
)
