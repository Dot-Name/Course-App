import "./Spinner.css";
function Spinner(){
  return(
      <div className="flex flex-col items-center space-y-2 ">
        <div class="spinner"></div>
        <p className="text-lg font-semibold text-white">Loading...</p>
      </div>
  )
}
export default Spinner;