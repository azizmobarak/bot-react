import React,{useState,Component} from 'react';
import loader from './lader2.gif'

function App() {

const [keys, setkeys] = useState('');
const [data,setdata]=useState([]);
const [ip,setip]=useState("")
const [port,setport]=useState("")
const [visetedurl,setvisetedurl]=useState("");
const keyschanged=(e)=>{
  setkeys(e.target.value)
}

const postdata = async(e) => {
e.preventDefault();
try {
   const url= await fetch('http://localhost:2000/data', {
            method: 'POST',
            headers: {
              'Accept':'application/json',
              'Content-type': 'application/json'
            },
           body:JSON.stringify({
             key : keys
           }),
        })
        .then(res=>res.json()
        .then(data=>setdata(data))
        );
} catch (e) {
    console.log(e);
}

/* var portmanual = document.getElementById('port').value;
var link = document.getElementById('text').value;
alert(link)
let timer = setInterval(() => {
        var port = parseInt(Math.random() * 9000)
            //alert(port);
        ;
        setTimeout(() => {
            pop.close();
        }, 30000)
    }, 8000)
    //timer.start();
document.getElementById('title').textContent = "Launching ...  \n new random ports generated"
*/
}

const proxy =async()=>{
await fetch("https://gimmeproxy.com/api/getProxy",{
    method:"GET",
    headers:{
      "Accept":"Access-Control-Allow-Origin"
    }
      })
      .then(
        response=>
        response.json().then(data=>console.log(data))
      )
//setip(data[0]['ip']);
//setport(data[0]['port'])
}

const startnavigate=()=>{
  var index =0;
setInterval(() => {
 var link ='google.com'
 var port = 2334;
 var link = data[index]
var pop = window.open(link + ":" + port + "")
setvisetedurl(visetedurl+"\n"+link);

  index++;
  if(index===data.length)
  {
    index=0;
  }
  },4000);
}

  return (
    <div className="container py-5 text-center">
   <form onSubmit={postdata} className=" form-group">
   <input onChange={keyschanged} className=" form-control" type="text" placeholder="keys to search for on google"/><br/>
    <input className='btn btn-outline-success w-25' type="submit" value="start"/><br/>
   </form>
   <br/>
<button className="btn btn-primary" onClick={proxy}>Get random proxy</button><br/><br/>
<div className=" bg-dark text-white">
<br/>
<p className="font-weight-bold h6">Ip : {ip}</p><br/>
<p className="font-weight-bold h6">port : {port}</p>
<br/>
</div>
<br/><br/>
<h2>Links list</h2>
<br/><br/>
{data.length<=0?<img src={loader}/>:
data.map(url=>
  url!==""?
  <ul className="list-group">
  <li className="list-group-item">{url}</li>
  </ul>
  :""
  )
}
<br/>
<br/>
<button className="btn btn-outline-primary w-50" onClick={startnavigate}>start visit links</button>
<br/><br/>
<button className="btn btn-danger w-50">Stop bot</button>
<br/>
<p>{visetedurl}</p>
    </div>
  );
}

export default App;
