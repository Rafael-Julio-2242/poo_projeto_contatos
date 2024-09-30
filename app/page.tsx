"use client";
import { FormEvent, useState } from "react";
import "./cadastroPage.css";
import { useRouter } from "next/navigation";
import Cadastro from "@/components/Cadastro";
import Login from "@/components/Login";
import { validaClient } from "@/app/api/buscaUser/route";
import Swal from "sweetalert2";
import { adicionaUser } from "./api/adicionaUser/route";
import { User } from "@/interfaces/user";

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

    console.log("Adicionar Usuario");

    const users = localStorage.get('users');

    if (!users) {
      localStorage.setItem('users', JSON.stringify([]));
    }

    const usersArray: User[] = JSON.parse(localStorage.getItem('users')!);

    usersArray.push({ name: nome, email: email, foneNumber: telefone, password: senha });
    localStorage.setItem('users', JSON.stringify(usersArray));

    router.push(`/leads/${`user-${email}`}`);
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    console.log("Log in");

    const users = localStorage.get('users');

    if (!users) {
      Swal.fire({
        icon: "error",
        title: "Ocorreu um Problema!",
        text: "Usuário não cadastrado!",
      });
      return;
    }

    const usersArray: User[] = JSON.parse(users);

    const user = usersArray.find((user) => user.email === email);

    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Ocorreu um Problema!",
        text: "Email ou Senha Incorretos!",
      });
      return;
    }

    const { password } = user;

    if (password !== senha) {
      Swal.fire({
        icon: "error",
        title: "Ocorreu um Problema!",
        text: "Email ou Senha Incorretos!",
      });
      return;
    }

    router.push(`/leads/${`user-${email}`}`);
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
  );
}
