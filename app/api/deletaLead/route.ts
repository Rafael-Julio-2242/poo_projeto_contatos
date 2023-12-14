import { NextResponse } from "next/server";


export async function deletaLead({ id }: {id:number}) {

  const res = await fetch(`${process.env.JAVA_API_IP}/lead/${id}`, {
    method: 'DELETE',
  })

  console.log(res);

  return NextResponse.json({body: res});

}

