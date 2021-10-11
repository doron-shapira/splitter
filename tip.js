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
        // console.log(total);
        if(total === 'Infinity' || total === 'NaN' || total === '0')
            $("#total").text("$0.00")     
        else {
            if(total.indexOf(".") !== -1)
                total = total.slice(0, total.indexOf(".") + 3);

            $("#total").text("$" + total);
        }
    })

    $(".select-tip button").on("focus", function() {
        let choice = $(this).text().substring(0, $(this).text().length - 1) / 100;
        // console.log(choice);
        let tip = String( $(".bill input").val() * choice / $(".num-ppl input").val() );
        // console.log(tip);
        if(tip === 'Infinity' || tip === 'NaN' || tip === '0')
            $("#tip-amount").text("$0.00");
        else {
            if(tip.indexOf(".") !== -1)
                tip = tip.slice(0, tip.indexOf(".") + 3);
            
            $("#tip-amount").text("$" + tip);
            let newTotal = Number( $("#total").text().substring(1) ) + Number(tip);
            if(String(newTotal).indexOf(".") !== -1)
                newTotal = String(newTotal).slice(0, String(newTotal).indexOf(".") + 3);
            
            $("#total").text("$" + newTotal);
        }
    })

    $(".select-tip button").on("blur", function() {
        let tip = $("#tip-amount").text().substring(1);
        let oldTotal = $("#total").text().substring(1) - tip;
        $("#total").text("$" + oldTotal);
        $("#tip-amount").text("$0.00");
    })
})
