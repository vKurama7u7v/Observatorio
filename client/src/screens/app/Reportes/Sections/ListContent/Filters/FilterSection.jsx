import React from "react";

import Search from "./Sections/Search.jsx";
import Filters from "./Sections/Filters.jsx";
import Categories from "./Sections/Categories.jsx";
import NewPosts from "./Sections/NewPosts.jsx";

export default function FilterSection({
  title,
  sectionBuscador,
  sectionFiltros,
  sectionCategorias,
  sectionRecientes,
  data,
}) {
  return (
    <>
      <div className="right">
        {sectionBuscador ? <Search title={title} /> : null}

        {sectionFiltros ? <Filters title={title} /> : null}

        {sectionCategorias ? <Categories title={title} /> : null}

        {sectionRecientes ? <NewPosts title={title} data={data} /> : null}
      </div>
    </>
  );
}
