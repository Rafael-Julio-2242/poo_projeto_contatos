import { buscaLeads } from "@/app/api/buscaLeads/route";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../app/leads/[user]/leadsPage.css';
import { Lead } from "@/interfaces/lead";

export default function LeadsTable({ user }: { user: string }) {
  const [tableData, setTableData] = useState<any[]>([]);

  const router = useRouter();

  const path = usePathname();

  useEffect(() => {
    async function BuscarLeads() {

      const userEmail = user.split('-')[1];

      const leads = localStorage.getItem('leads');

      if (!leads) {
        localStorage.setItem('leads', JSON.stringify([]));
        setTableData([]);
        return;
      }

      const leadsArray: Lead[] = JSON.parse(leads);

      const filteredLeads = leadsArray.filter((lead) => lead.user.email === userEmail);

      setTableData(filteredLeads);
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
          {tableData.map((lead, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
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
