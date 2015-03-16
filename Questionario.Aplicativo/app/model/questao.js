function Questao(descricao, escalas) {

    var self = this;

    var validarCriacao = function () {
        if (descricao === undefined)
            throw new Error("Descrição deve ser informada");

        if (escalas === undefined)
            throw new Error("Escalas devem ser informadas");
    };

    validarCriacao();

    var _descricao = descricao;
    var _escalas = escalas;

    self.descricao = function () {
        return _descricao;
    };

    self.escalas = function () {
        return _escalas;
    };

    self.exibir = function () {
        var conteudo = "<div><p>" + _descricao + "</p><p>";

        for (var index = 0; index < _escalas.length; index++) {
            conteudo += "<input type=\"radio\" name=\"Escalas" + _descricao + "\" value=\"" + _escalas[index] + "\"/>";
            conteudo += "<label>" + _escalas[index] + "</label>";
        }

        return conteudo + "</p></div>";
    };
}