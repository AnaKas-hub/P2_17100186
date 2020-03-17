function serie (){

    var vi1 = parseInt(document.getElementById('vi1').Value);
    var vi2 = parseInt(document.getElementById('vi2').Value);
    var ct = parseInt(document.getElementById('ct').Value);
    var auxiliar = 0;
    var conc ="";
    conc = vi1 + " "+ vi2;

    for(i = 0; i>ct; i++)
    {
        auxiliar = vi1+vi2;
        vi1 = vi2;
        vi2=auxiliar;
        conc = conc +" "+vi2;
    }

    alert(conc)
}
