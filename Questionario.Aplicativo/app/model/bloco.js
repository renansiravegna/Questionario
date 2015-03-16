function Bloco(descricao) {
    var self = this,
        _descricao = "",
        _itensDoQuestionario = [];

    var validarCriacao = function () {
        if (descricao === undefined)
            throw new Error("Descrição deve ser informada");
    };

    validarCriacao();

    _descricao = descricao;

    self.descricao = function() {
        return _descricao;
    };

    self.itensDoQuestionario = function() {
        return _itensDoQuestionario;
    };

    self.adicionar = function(itemDoQuestionario) {
        _itensDoQuestionario.push(itemDoQuestionario);
    };

    self.exibir = function () {
        var conteudo = "<div><p>" + _descricao + "</p>";

        for (var index = 0; index < _itensDoQuestionario.length; index++)
            conteudo += _itensDoQuestionario[index].exibir();

        return conteudo + "</div>";
    };
}