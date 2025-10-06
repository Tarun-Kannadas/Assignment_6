function checkDetails() {
    const Nname = $.trim($("#Name").val());
    const PhnNum = $.trim($("#PhnNum").val());
    const Mailid = $.trim($("#mailid").val());
    const Loc = $.trim($("#loc").val());
    const warning = $("#warning");

    if (!Nname || !PhnNum || !Mailid || !Loc) 
    {
        warning.html("Please enter all the details before submitting!");
        warning.css("color", "red");
        return false;
    } 
    else 
    {
        warning.html("Form submitted successfully!");
        warning.css("color", "green");

        $("#formbody")[0].reset(); //reset form using plain JS object

        setTimeout(() => {
            warning.html("");
        }, 3000);

        return false; //stop actual submission
    }
}
