function TodoMessage() {
  const [state, setState] = React.useState({});
  // ESTO PUEDO OCUPAR PARA LLAMAR EL ENDPOINT DEL DETALLE DEL WELLBOAT
  React.useEffect(() => {
    const data = api();
    setState(data);
  }, []);

  return <p>{state.message || "Cargando"}</p>;
}
