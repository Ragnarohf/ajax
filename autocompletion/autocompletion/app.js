$(document).ready(function () {
    var myArr = [];
    // myArr= ["Alabama", "District of Columbia", "Delaware", "Florida"]
    $.ajax({
        type: "GET",
        url: "states.xml",
        dataType: "XML",
        success: function (response) {

            // $("#inputDefault").empty();
            $(response).find("state").each(function () {
                myArr.push($(this).attr("label"));
            });
            // if (myArr != "") {
            //     console.log(myArr);
            //     $("#reponserecherche").append(myArr);
            // } else {
            //     $("#reponserecherche").html("aucun element!");
            // }


        },
        complete: function () {
            $("#inputDefault").autocomplete({
                source: myArr,
                minLength: 1,
                select: function (ui) {
                    $("input#inputDefault").val(ui.item.value);
                    $("#formRecherche").submit();
                }
                // messages: {
                //     noResults: '',
                //     results: function() {}
                // }

            });

        }


    });


});