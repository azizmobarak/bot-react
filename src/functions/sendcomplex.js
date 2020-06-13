//send proxies and keyword
import React from 'react';

const senddata = (url, keyword, proxies,website) => {
    var result = "";
    for (var i = 0; i < proxies.length; i++) {
        if (validateproxy(proxies[i], i).length !== 0) {
            result = result +"\n"+ validateproxy(proxies[i], i+1);
        }
    }
    if (result.length === 0) {
        //send request 
       return fetchdata(url,keyword,proxies,website);
    } else {
        return (<div>
            <h2 className="text-danger">Error</h2><br/>
            <p className="text-danger">please check the following lines : </p><br/>
            <div>
            {result}
            </div>
            <br/><br/>
            <br/>
            </div>);
    }
}


//verify proxies
const validateproxy = (text, j) => {
    var tab = text.split(":");
    var ip = tab[0];
    var port = tab[1].trim();
    var iptab = ip.split(".");
    var result = "";
    for (var i = 0; i <= 4; i++) {
        if (iptab[i] < 0 || iptab[i] > 254) {
            result = result + "\t" + j + "*" + (i + 1) + "-error in : " + iptab[i] + "\n";
        } else {
            if (port.length > 5 || port.length < 5) {
                result = result + "\t" + j + "*" + (i + 1) + "-error in : " + port + "\n";
            }
        }
    }
    return result;
}


//fetch method
const fetchdata=(url,keyword,proxies,website)=>{
    var getresult;
    alert('start fetching')
  fetch(url, {
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            website : website,
            keyword: keyword,
            proxies: proxies,
        })
    })
    .then(response =>console.log(response)
        //.then(result =>getresult=result)
    );
//console.log(getresult)
    alert('fetched')
    return "getresult";
}

export default senddata;