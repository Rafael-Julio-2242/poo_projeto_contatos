import { buscaLeads } from "@/app/api/buscaLeads/route";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../app/leads/[user]/leadsPage.css';

export default function LeadsTable({ id }: { id: number }) {
  const [tableData, setTableData] = useState<any[]>([]);

  const router = useRouter();

  const path = usePathname();

  useEffect(() => {
    async function BuscarLeads() {
      const res = await buscaLeads(id).then((data) => data.json());
  
      setTableData(res.body);
    }
    BuscarLeads();
  },[]);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Descrição</th>
            <th scope="col">Celular</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((lead) => (
            <tr key={lead.id}>
              <th scope="row">{lead.id}</th>
              <td>{lead.name}</td>
              <td>{lead.description}</td>
              <td>{lead.foneNumber}</td>
              <td>
                <div className="btn-group" role="group">
                  <a
                    href={path+"/editarContato"}
                    role="button"
                    className="btn btn-primary"
                  >
                    Editar
                  </a>
                  <a
                    href={path+`/confirmarExclusao/${lead.id}`}
                    role="button"
                    className="btn btn-danger"
                  >
                    Apagar
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
