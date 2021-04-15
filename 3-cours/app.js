$(document).ready(function () {
  $(".userConnexion").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: "connexion.php",
      data: "email=" + $(".email").val() + "&password=" + $(".password").val(),
      dataType: "html",
      success: function (response) {
        console.log(response);
        $(".resultatRecherche").append(response);
        $(".userConnexion").hide();
      },
      error: function () {
        console.log("error");
      },
    });
  });
});
