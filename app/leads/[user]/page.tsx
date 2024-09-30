"use client";

import React, { useState } from "react";

import '../../../node_modules/bootstrap'
import Alert from "@/components/Alert";
import LeadsTable from "@/components/LeadsTable";
import { usePathname } from "next/navigation";
import "./leadsPage.css";

export default function Leads({ params }: { params: { user: string } }) {
  const [successClosed, setSuccessClosed] = useState(true);
  const [faledClosed, setFaledClosed] = useState(true);

  console.log(params.user);

  const path = usePathname();

  return (
    <>
      <div className="text-center">
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          <a href={path+'/adicionarContato'} role="button" className="btn btn-primary">
            Adicionar novo contato
          </a>
        </div>

        <Alert
          setClosed={setSuccessClosed}
          hidden={successClosed}
          alertType="alert-success"
          id={"success"}
          message="Mensagem de sucesso"
        />

        <Alert
          setClosed={setFaledClosed}
          hidden={faledClosed}
          alertType="alert-danger"
          id={"error"}
          message="Mensagem de erro"
        />

        <h1 className="display-4">Listagem de Contatos: </h1>

        <div className="divTable">

          <LeadsTable user={params.user} />

        </div>

      </div>
    </>
  );
}
