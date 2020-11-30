$(function () {

    var valeur = "",
    affichage = $(".saisie,.resultat");
    
    $("#chiffres p,#operation p").
    click(function () {
        var chiffre = $(this).text();
        if (chiffre!="=" && chiffre!="EFF") {
            $(".saisie").append(chiffre);
            if (chiffre == "x") {
                valeur += "*";
            } else if (chiffre == "÷") {
                valeur += "/";
            } else {
                valeur += $(this).text();
            }
        } else if ($(this).text()=="EFF") {
            valeur = "";
            $(".saisie").text("");
            $(".resultat").text("");
            affichage.removeClass("erreur");
        } else if ($(this).text()=="=") {
            resultat();
        }
    });
    
    function resultat() {
        try {
            valeur = eval(valeur);
            $(".resultat").text(valeur);
            affichage.removeClass("erreur")
        } catch(e) {
            $(".resultat").text("ERREUR");
            affichage.addClass("erreur");
        }
    }
});