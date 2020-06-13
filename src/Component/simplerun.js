import React,{useState} from 'react';
import loader from "../lader2.gif";
import { Validateproxy, Sendsimple } from '../functions/sendsimple';

export default function Simplerun() {
   
 const [result, setresult] = useState("");
 const [website, setwebsite] = useState("");
 const [keyword, setkeyword] = useState("");
 const [ip, setip] = useState("");
 const [port,setport]=useState('');


//result change here
const getresult=(result)=>{

    if(result==="")
    {
        return <div><img src={loader} /></div>
    }else{
        return <div className="bg-white text-success h5">{result}</div>
    }
}

//state change
const onwebsitechange=(e)=>{
setwebsite(e.target.value);
}
const onkeywordchange=(e)=>{
    setkeyword(e.target.value);
}
const onipchange=(e)=>{
    setip(e.target.value);
}
const onportchanged=(e)=>{
    setport(e.target.value);
}

//submitdata
const submitdata=(e)=>{
    e.preventDefault();
    if(Validateproxy(ip,port).length!==0)
    {
    Sendsimple('',keyword,ip,port,website);
    }else{
        setresult(Validateproxy(ip,port));
    }
}

 return (
    <div className="row">
    <br/><br/>
    <div className="col-sm-8">
    <form onSubmit={submitdata} className="form-group">
    <h1>Simple post</h1>
    <br/>
    <div>
    <input onChange={onwebsitechange}  type="text" className="form-control" placeholder="Website link ,Example : facebook.com" />
    </div>
    <br/>
    <div>
    <input onChange={onkeywordchange}  type="text" className="form-control" placeholder="Keyword" />
    </div>
    <br/>
    <div>
    <input onChange={onipchange} type="text" className="form-control" placeholder="Ip Adress, Example : 111.111.111.111" />
    </div>
    <br/>
    <div>
    <input onChange={onportchanged}  type="text" className="form-control" placeholder="Proxy Example : 12345" />
    </div>
    <br/>
    <input type="submit" className="btn btn-primary"  />
    </form>
    </div>
    <br/><br/>
    <div className="col-sm-4 bg-dark text-white">
   <br/>
   <h3>Result : </h3>
   <br/>
   result each 5 minutes :
   <br/><br/>
    {getresult(result)}
    </div>
    <br/>
    </div>
  );
}
