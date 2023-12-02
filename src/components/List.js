export default function List(){
    let stud = [
        {
            id:1,
            name:"Dhara",
            phone:6355018995
        },
        {
            id:2,
            name:"AARAV",
            phone:6355018995
        },
        {
            id:3,
            name:"KRUPAL",
            phone:6355018995
        },
        
    ];
    let studList = stud.map((stud)=>(<p key ={stud.id}>{stud.name} ID: {stud.id}</p>));
    return (
        <div>
        <h4>Q.10 how to Create a List View in React Js?</h4>
        <p>Ans.{studList} </p>
        </div>
    );
}