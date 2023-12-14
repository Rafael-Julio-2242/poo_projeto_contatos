import { NextResponse } from "next/server";

type data = {
  id: number,
  nome: string;
  descricao: string;
  celular: string;
};

export async function adicionaLead({ id ,nome, descricao, celular }: data) {
  // Adiciona o dado no banco de dados

  console.log('Rota Adiciona Leads: ',{nome, descricao, celular});

  const jsonStruct = {
    user: {
      id: id
    },
    name: nome,
    description: descricao,
    foneNumber: celular
  }
  const jsonRequest = JSON.stringify(jsonStruct);

  const res = await fetch(`${process.env.JAVA_API_IP}/lead`, {
    method: 'POST',
    body: jsonRequest,
    headers: {'Content-Type': 'application/json'}
  })

  console.log(res);

  // retorna ok se tudo deu certo
  return NextResponse.json(
    { message: "Lead adicionado com sucesso!" } ,
    { status: 201, statusText: "No Content" }
  );
}
