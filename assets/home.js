function showForm(){
    $("#myForm").show()
}

function closeForm(){
    $("#myForm").hide()
}

function init(){
    $(".edit").click((e)=>{
        var target=$(e.currentTarget).attr('formid')
        var name=$(e.currentTarget).attr("name");
        var number=$(e.currentTarget).attr("number");
        console.log(target,name,number)
        $(`#${target} input[name="name"]`).val(name)
        $(`#${target} input[name="number"]`).val(number)
        $(`#${target}`).show()
    })
    $(".cancel").click((e)=>{
        var target=$(e.currentTarget).attr('formid')
        $("#"+target).hide()
    })
}
$(document).ready(()=>{init()})