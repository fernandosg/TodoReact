let n = 0;

function TodoClick() {
  let [state, setState] = React.useState(0);

  return(
    <>
      <p>
        Diste click {state} veces
      </p>
    <button onClick={() => {setState(state++)}}>Click</button>
    </>
  )
}

export { TodoClick }
