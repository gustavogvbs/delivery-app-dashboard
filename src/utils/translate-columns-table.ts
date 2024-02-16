export const TranslateColumnsTable = (id: string): string => {
  switch (id) {
    case "slug":
      return "slug";
    case "name":
      return "nome";
    case "category":
      return "categoria";
    case "amount":
      return "valor";
    case "id":
      return "id";
    default:
      return "";
  }
};
