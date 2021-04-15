$(document).ready(function () {
  $(
    $("input").keyup(function (e) {
      $.ajax({
        type: "GET",
        url: "data.json",
        data: "data",
        dataType: "json",
        success: function (response) {
          console.log(response);
          $(".resultatRecherche").append(response);
        },
      });
    })
  );
});
