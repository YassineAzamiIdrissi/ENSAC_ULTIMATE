export const ConvertDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };

  const date = new Date(dateString);

  // Utiliser toLocaleDateString pour formater la date en français
  const formattedDate = date.toLocaleDateString("fr-FR", options);

  return formattedDate;
};
