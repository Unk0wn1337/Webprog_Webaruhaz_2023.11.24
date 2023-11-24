$(function() {
    init();
});



function init() {
    let osszeg = 0;
    osszegezendoArTartalom = $(".kosarTartalomBorder");
    osszegezendoArTartalom.append(osszeg);
    termekKirasa = $(".kosarAppend");


        const csodasTajButton = $("#csodasTajButton");
        const tiszalGeeButton = $("#tiszalGeeButton");
        const borzsonyButton = $("#borzsonyButton");
        const pleskaSziklaButton = $("#pleskaSziklaButton");
        const vladkutButton = $("#vladkutButton");
        const regiParkolhozButton = $("#regiParkolhozButton");
        const nyakassKoButton = $("#nyakassKoButton");
    
        csodasTajButton.on("click", function() {
            osszeg+=2300;
            osszeegFrissites();
            termekKirasa.append("Csodas taj - 2300Ft");
            termekKirasa.append("<br>");
            
        });
        tiszalGeeButton.on("click", function() {
            osszeg+=230000;
            osszeegFrissites();
            termekKirasa.append("tiszal Gee - 2300Ft");
            termekKirasa.append("<br>");
        });
        borzsonyButton.on("click", function() {
            osszeg+=260430;
            osszeegFrissites();
            termekKirasa.append("Borzsony - 260430");
            termekKirasa.append("<br>");
        });
        pleskaSziklaButton.on("click", function() {
            osszeg += 23302400;
            osszeegFrissites();
            termekKirasa.append("pleska szikla - 23302400");
            termekKirasa.append("<br>");
        });
        vladkutButton.on("click", function() {
            osszeg += 270000;
            osszeegFrissites();
            termekKirasa.append("vladkut - 23302400")
            termekKirasa.append("<br>");
        });
        regiParkolhozButton.on("click", function() {
            osszeg += 230000;
            osszeegFrissites();
            termekKirasa.append("Regi parkolohaz - 23302400");
            termekKirasa.append("<br>");
        });
        nyakassKoButton.on("click", function() {
            osszeg += 230000;
            osszeegFrissites();
            termekKirasa.append("nyakass ko - 23302400");
            termekKirasa.append("<br>");
        });

        function osszeegFrissites(){
            osszegezendoArTartalom.text(osszeg + "Ft");
        }      
    }

