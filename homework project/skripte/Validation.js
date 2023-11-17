$(function(){
    var $form = $("#form");

    if($form.lenght){
        $form.validate({
            rules:{
                name:{
                    required: true
                }
            },
            messages:{
                name:{
                    required: 'Please fill out this field!'
                }
            }
        })
    }
})