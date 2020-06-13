import React,{useState} from 'react';
import senddata from '../functions/sendcomplex';
import loader from '../lader2.gif';

export default function ListKey() {

const [keyword,setkeyword] = useState("")
const [proxies,setproxies]= useState([]);
const [result,setresult]=useState("");
const [website, setwebsite] = useState("")

const onkeywordchange=(e)=>{
setkeyword(e.target.value);
}
const onwebsitechange=(e)=>{
  setwebsite(e.target.value);
  }
const onproxieschange=(e)=>{
    var tab = e.target.value.split(",");
    setproxies(tab);
}

//live result
const getresult=(result)=>{
if(result==="")
{
    return <div><img src={loader} /></div>
}else{
    return <div className="bg-white text-success h5">{result}</div>
}
}

//post data 
const postdata =(e)=>{
    e.preventDefault();
setresult(senddata('https://stark-waters-08877.herokuapp.com/api/getresults',keyword,proxies,website));
}

  return (
    <div className="row py-5">
   <div className="col-sm-8">
   <form onSubmit={postdata} className="form-group">
   <h2>Keyword + List of proxies</h2>
   <br/><br/>
    <div>
    <input onChange={onwebsitechange} className="form-control" placeholder="type a website , Example : facebook.com"/>
    </div>
    <br/>
    <div>
    <input onChange={onkeywordchange} className="form-control" placeholder="put keyword , Example : keyword"/>
    </div>
    <br/>
    <div>
    <textarea onChange={onproxieschange}  rows="15" col="20" className="form-control" placeholder="type multiple proxies ,Example :
     yy.xx.ss.ddd:NNNN , 
     yy.xx.ss.ddd:NNNN ... "></textarea>
    </div>
    <br/>
    <input type="submit" className="btn btn-primary w-50"/>
    </form>
   </div>
   <div className="col-sm-4 bg-dark text-white">
   <br/>
   <h3>Result : </h3>
   <br/>
   result each 5 minutes :
   <br/><br/>
   {getresult(result)}
   <br/>
   </div>
    </div>
  );
}

