import { useEffect, useState } from "react";
export default function App(){
  
  const [form, setForm] = useState({
    name: ''
  });
  const [personas, setPersonas] = useState([]);
  const API = 'http://34.231.110.153:8089/people';

  useEffect(()=>{
    loadPeople()
  }, [])


  async function loadPeople() {
    const res = await fetch(API);
    const body = await res.json();
    setPersonas(body.data || []);
}

async function addPerson(event) {
    event.preventDefault();

    const name = form.name;

    if (!name || !name.trim()) {
        alert('Ingresa un nombre');
        return;
    }

    await fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name.trim() })
    });

    setForm({ name: '' });
    loadPeople();
}


  const handleChange = (event) => {
    const {target: {name, value}} = event;

    setForm((previous)=>{
      console.log(previous);
      return ({
        ...previous,
        [name]:value
      })
    });
  }
  return (
  <div>
    <div className="m-4 card col-4">
      <div className="card-body">
        <form className="row g-3" onSubmit={addPerson}>
          
          <div className="col-12">
            <label htmlFor="name">Nombre (s)</label>
            <input value={form.name} onChange={event=> handleChange(event)} type="text" name="name" id="name" className="form-control" />
          </div>
          <div className="col-12 text-end">
            <button type="reset" className="btn btn-secondary">Reiniciar</button>
            <button type="submit" className="btn btn-primary">Enviar</button></div>
        </form>
      </div>
    </div>
    <div>
        <h2>Lista de personas</h2>
        <ul>
          {personas.map((persona)=>(
            <li key={persona.id}>{persona.name}</li>
          ))}
        </ul>
      </div>
  </div>);
}