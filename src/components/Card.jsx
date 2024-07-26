import {FcLike, FcLikePlaceholder} from 'react-icons/fc';
import { useState } from 'react';
import { toast } from 'react-toastify';
function Card(props){
    let course = props.course;
    let setLikeCourses = props.setLikeCourses;
    let likedCourses = props.likedCourses;
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikeCourses((prev)=>prev.filter((cid)=>(cid !== course.id)));
            toast.warning("Like Removed");
        }
        else{
            if(likedCourses.length === 0){
                setLikeCourses([course.id]);
            }
            else{
                setLikeCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfull");
        }
    }
    return(
        <div className='w-[300px] bg-bgDark bg-opacity-80 text-white rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url}/>
                <div className='w-[40px] h-[40px] rounded-full bg-white absolute right-2 -bottom-3 grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id)?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                        
                    </button>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-lg font-semibold leading-6'>{course.title}</p>
                <p className='mt-2'>
                    {
                        course.description.length > 100 ? (course.description.substr(0,100)):(course.description)
                    }...
                </p>
            </div>
        </div>
    )
}
export default Card;