$(document).ready(function () {
  myArr = [];
  $.ajax({
    type: "GET",
    url: "states.xml",
    // data: "data",
    dataType: "xml",
    success: function (response) {
      // console.log(response);
      $(response)
        .find("state")
        .each(function () {
          myArr.push($(this).attr("label"));
        });
      console.log(myArr);
    },
    complete: function () {
      $("input.state").autocomplete({
        source: myArr,
        minLength: 1,
        select: function (ui) {
          $("input.state").val(ui.item.value);
          $("#formRecherche").submit();
        },
      });
    },
    error: function () {
      console.log("error");
    },
  });
});
