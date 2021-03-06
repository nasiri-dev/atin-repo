import React, {useState,useEffect } from 'react';
import './Users.css';
// class Users extends Component {
//     constructor(props) {
//         super(props);
//         this.componentDidMount = this.componentDidMount.bind(this);
//         this.state = {
//           users:[]
//         }
        
//       }
      
//       componentDidMount() {
//         fetch('https://api.github.com/search/users?q=language:javascript')
//         .then(res => res.json())
//         .then(
//           json =>{
//             this.setState({
//               users:json.items
//             })
//           }
//         )       
        
//       }

//     render() {
//         return (
//             <div>
//                 {this.state.users.map(items=>(                    
//                     <tbody>
//                         <tr>                                    
//                             <td><a href={items.html_url} target="_blank">{items.html_url}</a></td>
//                             <td>{items.login}</td>                            
//                             <td>{items.id}</td>
//                             <td><img src={items.avatar_url}></img></td>
//                         </tr>
//                     </tbody>          
                
//                 ))}
//             </div>
//         );
//     }
// }
function Users (props){
  const [state,setState] = useState({users:[]})

  useEffect(()=>{
    fetch('https://api.github.com/search/users?q=language:javascript')
        .then(res => res.json())
        .then(
          json =>{
            setState({
              users:json.items
            })
          }
        )        
  },[])

  return (                
   state.users.map(items=>(                    
    <tbody>
      <tr>                                    
          <td><a href={items.html_url} target="_blank">{items.html_url}</a></td>
          <td>{items.login}</td>                            
          <td>{items.id}</td>
          <td><img src={items.avatar_url}></img></td>
      </tr>
    </tbody>          
                    
      ))
                
            )
}

export default Users;