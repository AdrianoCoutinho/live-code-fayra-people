import React, { useEffect, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import { getPerson, getPersonByPhone } from '../api';

const SearchPeople: React.FC = () => {

  const [name, setName ] = useState<string>("")
  const [phone, setPhone ] = useState<string>("")
  const [person, setPerson] = useState<Object[]>([])

  const getPagePerson = async () => {
    const result = await getPerson(name);
    setName(result)
  }

  useEffect(() => {
    getPagePerson()
  },[])

  const handleChangeName = (ev: any) => {
    setName((ev.target as HTMLInputElement).value)
  }

  const handleChangePhone = (ev: any) => {
    setPhone((ev.target as HTMLInputElement).value)
  }

  const handleSubmitName = async (event:any) => {
    event.preventDefault()
    const result = await getPerson(name);
    console.log(result)
    if(result.length === 0) {
      alert("Pessoa não encontrada!")
  }
    setPerson(result);
  }

  const handleSubmitPhone = async (event:any) => {
    event.preventDefault()
    const result = await getPersonByPhone(phone);
    console.log(result)
    if(result.length === 0) {
      alert("Número de pessoa não encontrado!")
  }
    setPerson(result);
  }

  return (
    <DefaultLayout>
      <h1>People</h1>
      <br/>
      <form onSubmit={handleSubmitName}>
        <h5>Buscar por nome:</h5>
        Buscando por: {name}<br/>
        <label htmlFor="name" >Nome</label>
        <input id="name" name="name" type="text" value={name || ""} onChange={handleChangeName} />
        <input type="submit"/>
      </form>
<br/>
      <form onSubmit={handleSubmitPhone}>
        <h5>Buscar por telefone:</h5>
        Buscando por: {name}<br/>
        <label htmlFor="phone" >Telefone</label>
        <input id="phone" name="phone" type="text" value={phone || ""} onChange={handleChangePhone} />
        <input type="submit"/>
        <p style={{color: "red", fontSize:"12px"}}>É necessário usar traços Ex: 440-616-5417</p>
      </form>
<br/>
      {person && person.map((personOne: any, index: number) => {
        return (
          <div key={index}>
            <p>{personOne.name} {personOne.last_name}</p>
            <img alt={personOne.name} src={personOne.avatar}/>
            <p>{personOne.phone}</p>
            <br/>
          </div>
        )
      })}

    </DefaultLayout>
  );
};

export default SearchPeople;
