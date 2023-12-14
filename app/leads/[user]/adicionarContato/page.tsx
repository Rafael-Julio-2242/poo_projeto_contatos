'use client'
import React, { FormEvent, useState } from "react";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './adicionarContato.css';

import { useParams, useRouter } from "next/navigation";

import { adicionaLead } from "@/app/api/adicionaLead/route";


export default function AdicionarContatoPage() {

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [celular, setCelular] = useState('');

  const params = useParams(); 

  const router = useRouter();

  const id = parseInt(params.user.toString());

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await adicionaLead({ id ,nome, descricao, celular});

    console.log(res);

    router.replace(`/leads/${params.user}`)

  }

  return (
    <>
      <div className="adicionarContatoForm">
        <div className="text-center">
          <h1 className="display-4">Cadastrar Contato</h1>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="Nome">Nome</label>
            <input
              type="text"
              name="Nome"
              id="Nome"
              className="form-control"
              placeholder="Digite o nome do contato"
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descricao</label>
            <input
              type="text"
              name="descricao"
              id="descricao"
              className="form-control"
              placeholder="Digite o descricao do contato"
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="celular">Celular</label>
            <input
              type="text"
              name="Celular"
              id="celular"
              className="form-control"
              placeholder="Digite o celular do contato"
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Adicionar
          </button>
          <br></br>
          <a href={`/leads/${params.user}`} className="btn btn-secondary">
            Voltar
          </a>
        </form>
      </div>
    </>
  );
}
