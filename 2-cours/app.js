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
          // $(".resultatRecherche").append(response[1].nom);
          $i = 0;
          while ($i < response.length) {
            $(".resultatRecherche").append(response[$i].nom + "<br>");
            $(".resultatRecherche").append(response[$i].prenom + "<br>");
            $i++;
          }
        },
      });
    })
  );
});
