export default function ToDoListItem ({item}){
    return(
        <li className="flex items-center p-4 cursor-pointer select-none"> 
         <div className="">
            {item.title}
         </div>
        </li>
    )
}