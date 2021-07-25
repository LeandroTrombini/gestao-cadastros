import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import './style.css'


export default function ClientScreen() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [store, setStore] = useState([])

    useEffect(() => {
        const clients = JSON.parse(localStorage.getItem('clients'))
        if (clients) {
            setStore(clients)
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        let data = {
            name,
            age,
            email,
            contact
        }

        let newClients = JSON.stringify([...store || [], data])

        localStorage.setItem('clients', newClients)

        setStore(JSON.parse(newClients))

        toast.success('Cliente cadastrado com sucesso!')

    }
    return (
        <div className="container">
            <div className="header-text">
                <h1>Clientes</h1>
            </div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:<input type="text" value={name} onChange={e => setName(e.target.value)} required minLength={2} />
                    </label>
                    <label>
                        Idade:<input type="number" value={age} onChange={e => setAge(e.target.value)} required min={1} max={120} />
                    </label>
                    <label htmlFor="email">
                        E-mail:<input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Contato:<input type="tel" format="###.###.###.##" placeholder="(XX)9XXXX-XXXX" value={contact} onChange={e => setContact(e.target.value)} required />
                    </label>

                    <button className="btn-add" type="submit">Adicionar Cliente</button>
                </form>
            </div>
            <div className="table-container">
                <table id="data-table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>E-mail</th>
                            <th>Contato</th>
                        </tr>
                    </thead>
                    <tbody>
                        {store.map((client, idx) => (
                            <tr key={idx}>
                                <td>{client.name}</td>
                                <td>{client.age}</td>
                                <td>{client.email}</td>
                                <td>{client.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}