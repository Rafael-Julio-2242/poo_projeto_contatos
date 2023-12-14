import { NextResponse } from "next/server";

type data = {
  email: string;
  senha: string;
};

async function validaClient({ email, senha }: data) {
  // Axios pra java API
  console.log("Cheguei No valida Client");

  const password = senha;

  // Chamada para a api pelo axios
  const res = await fetch(`${'http://26.161.212.190'}/user/${email}/${password}`)

  const resp = await res.json();

  return NextResponse.json({body: resp});

}

export { validaClient };
