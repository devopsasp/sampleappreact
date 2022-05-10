import {connect} from "react-redux"
import {findALLEntries} from '../action/actionfunction'
import {useEffect} from 'react'
function ViewEntries(props)
{
   useEffect(()=>{
    props.mydispatch(findALLEntries())
   },[])
   
     return <>
    
    <h1>View all Entries!</h1>
    <ul>
            
     {
         props.data.map((e)=>{
             return <li key={e.itemId}>{e.itemName} {e.price} </li>
         })
     }       
</ul>
              
</>
}
const mapStateToProps=state=>({
    data:state
})

const mapDispatchToProps=dispatch=>({
    mydispatch:dispatch
})

export default connect(mapStateToProps,mapDispatchToProps)(ViewEntries)