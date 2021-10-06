$(document).ready( () => {
    console.log("jQuery has Loaded!");

    $("#reset").on("click", () => {
        $(".bill input").val("");
        $(".num-ppl input").val("");
        $("#tip-amount").text("$0.00");
        $("#total").text("$0.00");
    })

    $(".bill input, .num-ppl input").on("keyup", () => {
        let total = String( $(".bill input").val() / $(".num-ppl input").val() );
        console.log(total);
        if(total === 'Infinity' || total === 'NaN' || total === '0')
            $("#total").text("$0.00")     
        else {
            if(total.indexOf(".") !== -1)
                total = total.slice(0, total.indexOf(".") + 3);

            $("#total").text("$" + total);
        }
    })
})