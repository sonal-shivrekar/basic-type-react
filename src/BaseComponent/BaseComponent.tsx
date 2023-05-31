const BaseComponent:React.FC<

    {
        title:string,
        name:string,            //props object
        age?:number,
        city:string

    }

> = (props) =>{

    const {title,name,age,city} =props;
    

    return(
        <div>
           
         {title}
         {name}{age}{city}
        
        </div>
        
       



    );
  
}





export default BaseComponent;