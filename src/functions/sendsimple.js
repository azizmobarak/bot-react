export const Validateproxy = (_ip, _port) => {
    var ip = _ip.trim();
    var iptab = ip.split('.')
    var port = _port.trim();
    var result = "";
    for (var i = 0; i < 4; i++) {
        if (parseInt(iptab[i]) < 0 || parseInt(iptab[i]) > 254) {
            result = result + "\t" + "-error in : -" + i + " " + iptab[i] + "\n";
        } else {
            if (port.length > 5 || port.length < 5) {
                result = result + "\t" + "-error in : -" + i + " " + port + "\n";
            }
        }
    }
    return result;
}

//send simple data
export const Sendsimple = (url, keyword, ip, port, website) => {
    var proxy = ip + ":" + port;
    fetch(url, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                website: website,
                keyword: keyword,
                proxy: proxy,
            })
        })
        .then(response => console.log(response)
            //.then(result =>getresult=result)
        );
    //console.log(getresult)
    alert('fetched')
    return "getresult";
}

export default { Validateproxy, Sendsimple };