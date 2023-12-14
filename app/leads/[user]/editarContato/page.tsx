'use client'
import React, { FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";

import './editarContato.css';


export default function EditarContatoPage() {

  const params = useParams();

  console.log(params);

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    router.replace(`/leads/${params.user}`);

  }

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
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Descricao</label>
            <input
              type="text"
              name="Email"
              className="form-control"
              placeholder="Digite o email do contato"
            />
          </div>

          <div className="form-group">
            <label htmlFor="celular">Celular</label>
            <input
              type="text"
              name="Celular"
              className="form-control"
              placeholder="Digite o celular do contato"
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
