export const convertDate = (date)=>{
    const newDate = new Date(date)
    return newDate.toISOString().split('T')[0]
  }
export const checkObjectEmpty = (object) => {
    return Object.keys(object).length === 0;
  };
export const transformFilters = (filters) => {
    var result = Object.keys(filters)
      .map((key) => {
        return "" + key + "=" + filters[key]; // line break for wrapping only
      })
      .join("&");
    return result;
  };