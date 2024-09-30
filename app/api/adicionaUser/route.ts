'use server'

import { NextResponse } from "next/server";

type data = {
  nome: string,
  email: string,
  telefone: string,
  senha: string
} 

export async function adicionaUser(data: data){

  console.log('Adicionar Usuario');
  const jsonStruct = {
    name: data.nome,
    email: data.email,
    foneNumber: data.telefone,
    password: data.senha
  }

  const jsonRequest = JSON.stringify(jsonStruct);

  // Aqui, eu preciso armazenar os dados do usuário no Local Storage

  const res = await fetch(`http://26.161.212.190/user`, {
    method: 'POST',
    body: jsonRequest,
    headers: {'Content-Type': 'application/json'}
  });

  console.log(res);

  const resp = await res.json();

  return NextResponse.json({body: res})

}
