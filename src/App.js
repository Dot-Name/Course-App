import React from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import {apiUrl, filterData} from "./data";
import Spinner from "./components/Spinner";
import {toast} from "react-toastify";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  async function fetchData(){
    setLoading(true);
    try{
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network Error !!");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter category ={category} setCategory = {setCategory} filterData={filterData}/>
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading?(<Spinner/>):(<Cards category={category} courses={courses}/>)}
      </div>
    </div>
  );
};
export default App;
