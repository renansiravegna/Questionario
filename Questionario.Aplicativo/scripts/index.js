// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        var questao1 = new Questao("Questao1", ["Sim", "Não"]);
        var questao2 = new Questao("Questao2", ["Concordo", "Discordo"]);
        var bloco1 = new Bloco("Bloco 1");

        var questao3 = new Questao("Questao3", ["Sim", "Não"]);
        var questao4 = new Questao("Questao4", ["Possui", "Não possui"]);
        var bloco2 = new Bloco("Bloco 2");

        bloco1.adicionar(questao1);
        bloco1.adicionar(questao2);

        bloco2.adicionar(questao3);
        bloco2.adicionar(questao4);

        var blocoRaiz = new Bloco("Questionário");

        blocoRaiz.adicionar(bloco1);
        blocoRaiz.adicionar(bloco2);
        
        var questionario = new Questionario(blocoRaiz);
        questionario.exibir();

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();