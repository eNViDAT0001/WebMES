

export function crudBuilder(
  baseRoute,
  transformFilters,
  transformEntity,
  prepareFormValues,
  paths
) {

  function list(filters) {
    const path = paths.list || baseRoute;
    let params = transformFilters(filters)?.join("&");
    if(params) {
      params += "?"
    }
    return fetch(`${path}${params}`)

      .then((res) => res.json())
      .then((res) => ({
        data: res.data.map((entity) => transformEntity(entity)),
        pagination: res.pagination,
      }));
  }

  function show(id) {
    const path = paths.show?.(id) || `${baseRoute}/${id}`;

    return fetch(path)
      .then((res) => res.json())
      .then((res) => transformEntity(res));
  }

  function create(formValues) {
    const path = paths.create || baseRoute;

    return fetch(path, {
      method: "POST",
      headers:{
        
      },
      body: prepareFormValues(formValues),
    });
  }

  function update(id, formValues) {
    const path = paths.update?.(id) || `${baseRoute}/${id}`;

    return fetch(path, { method: "PUT", body: formValues });
  }

  function remove(id) {
    const path = paths.remove?.(id) || `${baseRoute}/${id}`;

    return fetch(path, { method: "DELETE" });
  }

    return {
    list,
    show,
    create,
    update,
    remove
  }
}

export const baseUrl = "http://localhost:5000"
