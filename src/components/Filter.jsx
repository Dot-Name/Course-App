import { filterData } from "../data";

function Filter(props){
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;
  function filterHandler(title){
    setCategory(title);
  }
  return(
      <div className="flex flex-wrap justify-center w-11/12 py-4 mx-auto space-x-4 max-w-max gap-y-4">
        {
          filterData.map((data)=>(
            <button onClick={()=>filterHandler(data.title)} className={`px-2 py-1 text-lg font-medium text-white bg-black rounded-md hover:bg-opacity-50 border-2 ${category === data.title? "bg-opacity-60 border-white":"border-transparent bg-opacity-40"} transition-all duration-300`} key={data.id}>{data.title}</button>
          ))
        }
      </div>
  )
}
export default Filter;