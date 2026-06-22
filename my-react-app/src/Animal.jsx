import App from "./App.jsx"
function Hello(){
    return(
        <p style={{textAlign:"left"}}>Hello</p>
    );
}
function Galaxy(props)
{
    return(
        
        <div style={{textAlign:"left"}}>
    <h4 >Name:{props.name}</h4>
    <h4>Process:{props.process}</h4>
    <h4>About:{props.about}</h4>
    </div>
    );
}
function Star(){
    return(
        <Galaxy name="Sun"
        process=" arise and aset"
        about="It is a biggest star in the galaxy and it give light to all"></Galaxy>
        
        
    );
}
function Me(props){
    return(
        <p >Hi, I'm Dharani, a B.Tech 3rd-year student aspiring 
            to become a <u style={{color:"pink"}}>{props.job}</u> Developer. I am passionate about 
            technology,<u style={{color:"pink"}}> {props.skill1},{props.skill2} </u> and continuous learning. 
            My goal is to build a successful career in <u style={{color:"pink"}}>{props.job}</u> development
             and create impactful solutions through technology.And my dream company
             is <u style={{color:"pink"}}>{props.company}</u>.
             </p>
    );
}
function Profile(){
    return(
        <div style={{
            textAlign:"center",
            color:"white"
            
        }}>
        <Me job="Animation"
        company="gerena"
        skill1="Blender"
        skill2="unreal enginer">
        </Me>
        </div>
    );
    
}
function animal(){
    return(
        <>
        <div>
            <h1>Animals</h1>
           
            <h3>wild Animals</h3>
             <div style={{display:"flex" , gap:"10px"}}>
            <img style={{width:350}} 
            src="https://thf.bing.com/th/id/OIP.NpGTMnnp594sZ2GRiCmAxgHaFS?w=240&h=180&c=7&r=0&o=7&cb=thfc1falcon2&dpr=1.3&pid=1.7&rm=3" 
            alt="image"/>
             <p style={{color:"orange"}}>
            Wild animals are undomesticated creatures that live freely in natural habitats, 
            playing vital roles in ecosystems and biodiversity.<br></br>
        <b>Definition and Characteristics</b>
        Wild animals are species that live independently of humans,
        surviving by finding their own food, shelter, and mates in nature. 
        They include mammals, birds, reptiles, amphibians, fish, and insects, as well as uncultivated plants that grow in the wild 
        Unlike domesticated animals, wild animals are not bred or cared for by humans, 
        although some have adapted to urban environments, such as feral cats, dogs, mice, and rats
        these are all the wild animals in the forest and there are some dengerous animals that could harm people but 
        they harm unessarly to people 
            </p>
            </div>
            
            <h3>domestic animals</h3>
            <div style={{display:"flex",gap:"10px"}}>
             <img src="https://tse1.mm.bing.net/th/id/OIP.wIF9yODnf7bE-aUCSQXKIwHaE8?cb=thfc1falcon2&pid=ImgDet&w=206&h=137&c=7&dpr=1.3&o=7&rm=3"/>
        
            <p style={{color:"greenyellow"}}>
            Domestic animals are species that humans have tamed and bred to live alongside them, 
            providing food, labor, companionship, and other benefits.<br></br>
<b>Definition and Characteristics:</b>
Domestic animals are animals that live with humans or on farms and depend on humans for food, care, and shelter. Unlike wild animals, they have been selectively bred over generations to enhance traits beneficial to humans, such as docility, productivity, or companionship. Domestication often involves genetic, behavioral, and physical changes from their wild ancestors, 
and it is a gradual process that can take hundreds or thousands of years 

Types of Domestic Animals
Domestic animals can be broadly classified into three main categories
Pets 
Dogs: Loyal pets that guard homes and assist humans in work or hunting.
Cats: Independent pets that help control pests like mice.
Rabbits: Gentle animals kept for companionship or fur.

            </p>
        </div>
        </div>
        <App></App>
        <Hello></Hello>
        <Star></Star>
        <Profile></Profile>
        </>
        
    );
}
export default animal;