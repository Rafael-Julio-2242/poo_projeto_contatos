import axios from "axios";
import { NextResponse } from "next/server";

async function buscaLeads(id: number) {

  console.log('Estou no busca leads');
  // Axios para requisição a API externa

  const res = await fetch(`${process.env.JAVA_API_IP}/lead/user/${id}`, {
    method: 'GET'
  })


  const resp = await res.json();

  console.log(resp);

  return NextResponse.json(
    {
      body: resp,
    },
    { status: 200, statusText: "Ok" }
  );
}

export { buscaLeads };
