function checkRobaIP()
{
    var ip_pass;
    ip_pass = "192.168.43.199"

    var IP_ROBA = document.getElementById("ip_roba").value;

    if(String(IP_ROBA) == "")
    {
        alert("Input your ROBA IP Address");
    }

    if(String(IP_ROBA) != "")
    {
        document.cookie = "ip_roba="+IP_ROBA+";";

        if(String(IP_ROBA) == ip_pass)
        {
            location.href = "main_stream.html";
        }
        else
        {
            alert("Check your ROBA IP Address");
        }
    }
    
}