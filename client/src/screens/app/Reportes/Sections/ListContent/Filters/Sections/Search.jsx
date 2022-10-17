import React from "react";

export default function Buscador({ title }) {
  return (
    <>
      <div className="left-section search">
        <form action="">
          <input
            type="text"
            className="input-reset"
            placeholder={`Buscar ${title
              .slice(0, title.length - 1)
              .toLowerCase()}`}
          />
          <button className="btn-reset">
            <i class="bx bx-search-alt-2"></i>
          </button>
        </form>
      </div>
    </>
  );
}
