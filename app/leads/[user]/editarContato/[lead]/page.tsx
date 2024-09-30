'use client'
import React, { FormEvent, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import './editarContato.css';
import { Lead } from "@/interfaces/lead";


export default function EditarContatoPage() {

  const params = useParams();

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [celular, setCelular] = useState('');

  console.log(params);

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Preciso atualizar os dados
    const leads = localStorage.getItem('leads');

    if (!leads) {
      localStorage.setItem('leads', JSON.stringify([]));
      router.replace(`/leads/${params.user}`);
      return;
    }

    const leadsArray: Lead[] = JSON.parse(leads);

    const leadsArrayAtualizado = leadsArray.map((lead) => {
      
    });

    router.replace(`/leads/${params.user}`);

  }

  useEffect(() => {

    async function BuscaDadosContato() {

      const leads = localStorage.getItem('leads');

      if (!leads) {
        localStorage.setItem('leads', JSON.stringify([]));
        router.back();
        return;
      }

      const leadsArray: Lead[] = JSON.parse(leads);

      const lead = leadsArray.find((lead) => lead.foneNumber === params.lead.toString());

      if (lead === undefined) {
        router.back();
        return;
      }

      setNome(lead.name);
      setDescricao(lead.description);
      setCelular(lead.foneNumber);
    }

    BuscaDadosContato();
  },[]);

  return (
    <>
      <div className="container">
        
        <div className="text-center">
          <h1 className="display-4">Editar Contato</h1>
        </div>

        <form className="text-center" onSubmit={(e) => handleSubmit(e)}>
          <input type="hidden" name="Id" />

          <div className="form-group">
            <label htmlFor="Nome">Nome</label>
            <input
              type="text"
              name="Nome"
              className="form-control"
              placeholder="Digite o nome do contato"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Descricao</label>
            <input
              type="text"
              name="Email"
              className="form-control"
              placeholder="Digite a descrição do contato"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="celular">Celular</label>
            <input
              type="text"
              name="Celular"
              className="form-control"
              placeholder="Digite o celular do contato"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Alterar
          </button>

          <a className="btn btn-secondary" href={`/leads/${params.user}`}>
            Voltar
          </a>
        </form>
      </div>
    </>
  );
}
