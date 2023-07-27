const listaClientes = () => fetch("https://json-serveerr.vercel.app/perfil").then( respuesta =>respuesta.json()); //Llamada al back-end

const crearCliente = (nombre, email) => {
  return fetch("https://json-serveerr.vercel.app/perfil", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() })
  });
}


const eliminarCliente = (id) => {
  return fetch(`https://json-serveerr.vercel.app/perfil/${id}`, {
    method: "DELETE"
  });
}

const detallaCliente = (id) => {
  return fetch(`https://json-serveerr.vercel.app/perfil/${id}`).then( (respuesta) => respuesta.json());
}

const actualizarCliente = (nombre, email, id) => {
  return fetch(`https://json-serveerr.vercel.app/perfil/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({ nombre, email }),
  })
  .then((respuesta) => respuesta)
  .catch( err => console.log(err));
}

export const clientServices = {
  listaClientes,
  crearCliente, 
  eliminarCliente,
  detallaCliente,
  actualizarCliente,
}

