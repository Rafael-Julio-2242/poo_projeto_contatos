import React, { FormEvent } from "react";

type props = {
  setNome: (nome: string) => void;
  setEmail: (email: string) => void;
  setTelefone: (telefone: string) => void;
  setSenha: (senha: string) => void;
  handleSubmit: (e: FormEvent) => void;
};

export default function Cadastro({
  setNome,
  setEmail,
  setTelefone,
  setSenha,
  handleSubmit,
}: props) {
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="field-wrap">
          <label htmlFor="name">Informe seu Nome: </label>
          <input
            type="name"
            required
            placeholder="Digite o seu Nome"
            name="name"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="field-wrap">
          <label htmlFor="email">Informe seu Email: </label>
          <input
            type="email"
            required
            placeholder="Digite o seu Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field-wrap">
          <label htmlFor="phone">Informe seu Telefone: </label>
          <input
            type="phone"
            required
            placeholder="Digite o seu Telefone"
            name="phone"
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>

        <div className="field-wrap">
          <label htmlFor="password">Informe sua Senha</label>
          <input
            type="password"
            required
            placeholder="Digite a sua Senha"
            name="password"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button type="submit" className="button button-block">
          Cadastrar
        </button>
      </form>
    </>
  );
}
