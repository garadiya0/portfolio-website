import { parseISO, format } from "date-fns";

const getRelativeDate = (date) => {
  return format(parseISO(date), "dd MMM, yyyy");
};

export default  getRelativeDate ;
