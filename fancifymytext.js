function showAlert()
{
    alert("Hello, World!");
    document.getElementById("text").style.fontSize = "24pt";
}

  function goBold()
{
    document.getElementById("boringB").checked  = false;  
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "#0000FF";
    document.getElementById("text").style.textDecoration = "underline";
}

function goNormal()
{
    document.getElementById("fancySh").checked  = false; 
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "#000000";
    document.getElementById("text").style.textDecoration = "none";
    document.getElementById("text").style.fontSize = "10pt";
}

function addMoo()
{  
    let str = document.getElementById("text");
    str.style.textTransform = "uppercase";
    let parts = str.value.split(".");
    str.value = parts.join("-Moo");
}
