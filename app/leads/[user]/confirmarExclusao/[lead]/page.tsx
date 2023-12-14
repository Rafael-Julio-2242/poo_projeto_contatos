'use client';
import React from "react";
import { useParams, useRouter } from "next/navigation";

import "./confirmarExclusao.css";

import { deletaLead } from "@/app/api/deletaLead/route";

export default function ConfirmarExclusaoPage() {

    const params = useParams();

    const router = useRouter();

    console.log('Confirmar Exclusão');

    console.log(params);

    const id = parseInt(params.lead.toString());

    const handleApagar = async () => {

      const res = await deletaLead({id});

      

      router.replace(`/leads/${params.user}`);

    }

  return (
    <>
      <div className='container'>
        <div className="text-center">
          <h3>Realmente deseja apagar o contato</h3>
        </div>

        <div className="text-center">
          <a href={`/leads/${params.user}`} className="btn btn-primary w-50" role="button">
            Cancelar Exclusão
          </a>
          <a onClick={handleApagar} className="btn btn-danger w-50" role="button">
            Confirmar Exclusão
          </a>
        </div>
      </div>
    </>
  );
}
