$(document).ready(function () {
  $("button").click(function (e) {
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: "donnee.txt",
      data: "data",
      dataType: "html",
      success: function (response) {
        $(".resultatRecherche").append(response);
      },
      error: function () {
        console.log("error");
      },
    });
  });
});
