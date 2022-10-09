import React from "react";

export default function Pagination(props) {
  const { pagina, setPagina, maximo } = props;

  const onNextPage = () => {
    setPagina(parseInt(pagina) + 1);
  };

  const onPreviousPage = () => {
    setPagina(parseInt(pagina) - 1);
  };

  return (
    <>
      <div className="pagination">
        {pagina === 1 || pagina < 1 ? null : (
          <button
            className="btn-reset"
            disabled={pagina === 1 || pagina < 1}
            onClick={onPreviousPage}
          >
            <i className="bx bx-chevron-left"></i> Anterior
          </button>
        )}
        {pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo) ? null : (
          <button
            className="btn-reset"
            disabled={
              pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)
            }
            onClick={onNextPage}
          >
            Siguiente <i className="bx bx-chevron-right"></i>
          </button>
        )}
      </div>
    </>
  );
}
