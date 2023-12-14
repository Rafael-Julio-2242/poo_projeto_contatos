"use client";
import { FormEvent, useState } from "react";
import "./cadastroPage.css";
import { useRouter } from "next/navigation";
import Cadastro from "@/components/Cadastro";
import Login from "@/components/Login";
import { validaClient } from "@/app/api/buscaUser/route";
import Swal from "sweetalert2";
import { adicionaUser } from "./api/adicionaUser/route";

export default function Home() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  const router = useRouter();

  const handleCadastro = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Cadastro :D");

    const res = await adicionaUser({nome, email, telefone, senha});

    console.log('Res: ');
    console.log(res)

    const resp = await res.json();
    console.log('Res Data: ');
    console.log(resp.body);


    //router.push(`/leads/${resp.body.id}`);

  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    console.log("Log in");

    const res = await validaClient({ email: email, senha: senha });

    if(res.status === 200) {
      console.log('Usuario existente');

      const resp = await res.json();

      console.log(resp);

      router.push(`/leads/${resp.body.id}`);

    } else {
      const resp = await res.json();

      Swal.fire({
        icon: "error",
        title: "Ocorreu um Problema!",
        text: `${resp.body.message}`,
        
      });
    }

  };

  const componentesInicio = [
    <Cadastro
      key={0}
      setNome={setNome}
      setEmail={setEmail}
      setSenha={setSenha}
      setTelefone={setTelefone}
      handleSubmit={handleCadastro}
    />,
    <Login
      key={1}
      setEmail={setEmail}
      setSenha={setSenha}
      handleSubmit={handleLogin}
    />,
  ];

  return (
    <>
      <div className="form">
        <ul className="tab-group">
          <li className={isLogin ? "tab" : "tab active"}>
            <a onClick={() => setIsLogin(false)}>Cadastrar</a>
          </li>
          <li className={isLogin ? "tab active" : "tab"}>
            <a onClick={() => setIsLogin(true)}>Entrar</a>
          </li>
        </ul>

        <div className="tab-content">
          <div id="login">
            <h1>Bem Vindo!</h1>

            {isLogin && componentesInicio[1]}
            {!isLogin && componentesInicio[0]}
          </div>
        </div>
      </div>
    </>
  );
}
