import React, { useEffect, useState } from "react";

type props = {

    setClosed: (closed: boolean) => void,
    hidden: boolean,
    alertType: string,
    id: string,
    message: string,

}

export default function Alert({ setClosed, hidden , alertType, id, message}: props) {

  

  return (
    <>
      <div className={`alert ${alertType}`} role="alert" id= {`${id}`} hidden={hidden}>
        <button
          type="button"
          className="btn btn-danger btn-sm close-alert"
          aria-label="Close"
          onClick={() => setClosed(true)}
        >
          X
        </button>
        {message}
      </div>
    </>
  );
}
