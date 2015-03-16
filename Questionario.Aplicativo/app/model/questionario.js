function Questionario(blocoRaiz) {
    var self = this;

    function validarCriacao() {
        if (blocoRaiz === undefined)
            throw new Error("Bloco raiz deve ser informado");
    }

    validarCriacao();

    var _blocoRaiz = blocoRaiz;

    self.blocoRaiz = function () {
        return _blocoRaiz;
    };

    self.exibir = function () {
        var conteudo = _blocoRaiz.exibir();

        $("body").append(conteudo);
    };
}