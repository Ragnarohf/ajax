$(document).ready(function () {
  $(".userConnexion").submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "GET",
      url: "connexion.php",
      data: "email=" + $(".email").val() + "&password=" + $(".password").val(),
      dataType: "json",
      success: function (response) {
        console.log(response);
        $(".resultatRecherche").append(response.email);
        // if (response == "welcome in your profil") {
        //   $(".resultatRecherche").append(response);
        //   $(".userConnexion").hide();
        // } else if (response == "erreur de connexion") {
        //   console.log(response);
        //   $(".resultatRecherche").append(response);
        //   $(".userConnexion").show();
      },
      error: function () {
        console.log("error");
      },
    });
  });
});
