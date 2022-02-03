import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div>Carregando</div>
    )
  }

  if (!signed && isPrivate) {
    return <Redirect to="/" />
    //redirecionamento para pagina principal, caso nao esteja logado e tente acessar pagina privada
  }

    if (signed && !isPrivate) {
      return <Redirect to="/Dashboard" />
      //redireciona para dashboard caso usuario logado tente acesso para pagina publica (vamos ver se vai existir mais paginas publicas, alem da principal)
    }


  return (
    <Route
      {...rest}
      render={props => (
        <Component {...props} />
      )}
    />
  )
}
