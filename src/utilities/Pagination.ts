function Pagination(limit:string) {


   const values = Number(limit);

   const valuesNumber = Math.floor(Math.random() * (values - 1)) + 1;
 
   const valuesText = valuesNumber.toString();
 
   return valuesText;
}
export default Pagination