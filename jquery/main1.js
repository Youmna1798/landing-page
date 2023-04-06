
// jquery => javaScript query 
/* 
    syntax:
    =========

    $(document).ready(function(){
    })

    $(selector).on("event" , ()=>{

    })

    $ => by using query 
    document  | class | id | tag =>  selector
    ready | on("click , mouse over") => event 
    function(){} | ()=>   => mession 
*/

$(document).ready(() => {
    /*validate form*/
    let validName = false,
        validEmail = false,
        validPhone = false,
        validMessage = false

    /*The keyup event is fired when a key is released.*/

    $("#fullName").on("keyup", () => {
        /*invalid name */
        if ($("#fullName").val() == "") {
            $(".name").text("A name is required.")
            $(".name").addClass("invalid")
            $("#fullName").addClass("border1")
            validName = false
            $(".in").prop('disabled', true);
        } else {
            /*valid name */
            $(".name").text("")
            $("#fullName").removeClass("border1")
            validName = true
            check()
        }

    })

    $("#email").on("keyup", () => {

        var regrex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (!regrex.test($("#email").val()) || $("#email").val() == "") {
            /*invalid email */
            $(".email").text("An email is required.")
            $(".email").addClass("invalid")
            $("#email").addClass("border1")
            validEmail = false
            $(".in").prop('disabled', true);

        } else {
            /*valid email */
            $(".email").text("")
            $("#email").removeClass("border1")
            validEmail = true
            check()
        }
    })

    $("#phonenumber").on("keyup", () => {
        if ($("#phonenumber").val() == "") {
            /*invalid phone */
            $(".phone").text("A phone number is required.")
            $(".phone").addClass("invalid")
            $("#phonenumber").addClass("border1")
            validPhone = false
            $(".in").prop('disabled', true);
        } else {
            /*valid phone */
            $(".phone").text("")
            $("#phonenumber").removeClass("border1")
            validPhone = true
            check()
        }

    })

    $("#message").on("keyup", () => {
        if ($("#message").val() == "") {
            /*invalid message */
            $(".messages").text("A message is required.")
            $(".messages").addClass("invalid")
            $("#message").addClass("border1")
            validMessage = false
            $(".in").prop('disabled', true);
        } else {
            /*valid message */
            $(".messages").text("")
            $("#message").removeClass("border1")
            validMessage = true
            check()
        }

    })
    /*check if all form are filled or not, if one of them empty send button will be disabled */
    function check() {
        if (validName && validEmail && validPhone && validMessage) {
            $(".in").removeAttr("disabled")
        }
    }
})