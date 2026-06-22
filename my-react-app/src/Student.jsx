import {useState} from "react";
function Application()
{
    const [info , setInfo]=useState({
        name:"",
        email:"",
        gender:"",
        dob:"",
        skills:[]

    });
    const[image,setImage]=useState(null);  //we use url of image in the so we use null in the useState
   // const[age,setAge]=useState(0);
    const change=(e)=>{
        const {name,value}=e.target;
        setInfo({
            ...info,[name]:value
        });
        
    };
    const skillchange=(e)=>{
        const {value,checked}=e.target;
        if(checked){
            setInfo({
           ...info,skills:[...info.skills,value]  //we use multiple values in the skill so we double info
            });
        }
        else{
           setInfo({
            ...info,skills:info.skills.filter(
                skill => skill !==value
           )
           });
        }

    };
    const uploadimg =(e)=>{
        setImage(e.target.files[0]);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(
            !info.name ||
            !info.email ||
            !info.gender ||
            !info.dob 
        )
        {
            alert("Please fill all details");
            return;
        }console.log("students");
        console.log(info);
        console.log(image);
        console.log("registered");
    };
    return(
        <>
        <div>
            <h1>Registration form</h1>
            <form onSubmit={handleSubmit}>
                {/*Name */}
             <label>Name:</label>
          <input type="text" name="name" value={info.name} onChange={change} /><br/><br/>

          <label>Email:</label>
          <input type="email" name="email" value={info.email} onChange={change} /><br/><br/>

          <label>Gender:</label>
          <input type="radio" name="gender" value="male" onChange={change} />male
          <input type="radio" name="gender" value="female" onChange={change} />female
          <input type="radio" name="gender" value="other" onChange={change} />other<br/><br/>

          <label>Date of Birth:</label>
          <input type="date" name="dob" value={info.dob} onChange={change} /><br/><br/>

          <label>Skills:</label>
          <div>
            <input type="checkbox" value="Java" onChange={skillchange} /> Java
            <input type="checkbox" value="Python" onChange={skillchange} /> Python
            <input type="checkbox" value="React" onChange={skillchange} /> React
          </div>
        <br></br>
          <label>Image:</label>
          <input type="file" accept="image/**" onChange={uploadimg} />

          <button type="submit">Submit</button><br></br>
          <h2>Details</h2>
          <hr/>
          <p>Name:{info.name}</p>
          <p>Email:{info.email}</p>
          <p>Gender:{info.gender}</p>
          <p>D.O.B:{info.dob}</p>
          <p>Skills:{info.skills.join(", ")}</p>
          <p>Image: {
            image && (
            <div>
                <img src={URL.createObjectURL(image)} alt="DP" width="100"/>
            </div>
          )}
          </p>
        </form>
        </div>
        </>
    );

}
export default Application;