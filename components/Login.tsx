import React, { FormEvent } from "react";

type props = {
  setEmail: (email: string) => void;
  setSenha: (senha: string) => void;
  handleSubmit: (e: FormEvent) => void;
};

export default function Login({ setEmail, setSenha, handleSubmit }: props) {



  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
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
          <label htmlFor="password">Informe sua Senha</label>
          <input
            type="password"
            required
            placeholder="Digite a sua Senha"
            name="password"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button className="button button-block" type='submit'>
          Entrar
        </button>
      </form>
    </>
  );
}
