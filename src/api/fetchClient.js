export function crudBuilder(baseRoute) {
    function list(keyword) {
      return fetch(`${baseRoute}?keyword=${keyword}`);
    }
  
    function show(id) {
      if(!id) return fetch(`${baseRoute}`).then((res) => res.json())
      else return fetch(`${baseRoute}/${id}`).then((res) => res.json());
    }
  
    function create(formValues) {
      return fetch(baseRoute, { method: "POST", body: formValues });
    }
  
    function update(id, formValues) {
      return fetch(`${baseRoute}/${id}`, { method: "PUT", body: formValues });
    }
  
    function remove(id) {
      return fetch(`${baseRoute}/${id}`, { method: "DELETE" });
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