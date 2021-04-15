$(document).ready(function () {
  $(".userConnexion").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: "connexion.php",
      data: "data",
      dataType: "dataType",
      success: function (response) {},
    });
  });
});
