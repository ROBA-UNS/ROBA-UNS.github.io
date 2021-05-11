function logout()
{
    document.cookie = "ip_roba=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
}

function connect_info()
{
    document.getElementById("connect_id").innerHTML = "Connect to " + ip_roba;
}


// run script
var ip_roba;
connect_info();
