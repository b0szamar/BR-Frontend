
$(function(){
    let benzin=[
    {
        value : '7.6', 
        text : '1000 cm3 alatt'
    },
    {
        value : '8.6', 
        text : '1001-1500 cm3-ig'
    },
    {
        value : '9.5', 
        text : '1501-2000 cm3-ig'
    },  
    {
        value : '11.4', 
        text : '2001-3000 cm3-ig'
    },  
      {
        value : '13.3', 
        text : '3000 cm3 felett'
    },
]
let diesel=[
    {
        value : '5.7', 
        text : '1500 cm3-ig'
    },
    {
        value : '6.7', 
        text : '1501-2000 cm3-ig'
    },  
    {
        value : '7.6', 
        text : '2001-3000 cm3-ig'
    },  
      {
        value : '9.5', 
        text : '3001 cm3 felett'
    },
]
let uzemanyag;
let filled=[false, true, true, true, true, true, true, true]
$("form").submit(function(e){ //A kitöltött ürlap elemi nem kerülnek törlésre
    e.preventDefault();
})
$("[name=anyag]").change(function(){
    uzemanyag=($(this).val());
    filled[0]=true;
    $("#cm3input").html("<option value='-1'></option> ");
    if(uzemanyag==="diesel"){
        getUzemanyag(diesel);
    }
    else{
       getUzemanyag(benzin);
    }
})
$("input, select").change(function(){
    if (!filled.includes(false)) {
        $("[type=submit]").attr("disabled", false);
    }
})
})

function getUzemanyag(t){
    t.forEach((o)=>{
        $("#cm3input").append(`<option value="${o.value}">${o.text}</option>`);
    })
}
