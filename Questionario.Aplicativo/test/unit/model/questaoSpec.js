describe("Questão", function () {

    var _escalas = ["Sim", "Não"];

    it("não deve criar sem descrição", function () {
        expect(Questao).toThrowError("Descrição deve ser informada");
    });

    it("não deve criar sem escalas", function () {
        expect(function () { new Questao(""); }).toThrowError("Escalas devem ser informadas");
    });

    it("deve criar com descrição", function () {
        var descricao = "Questão";

        var questao = new Questao(descricao, _escalas);

        expect(questao.descricao()).toBe(descricao);
    });

    it("deve criar com escalas", function () {
        var questao = new Questao("Questão 1", _escalas);

        expect(questao.escalas()).toBe(_escalas);
    });

    it("deve retornar o html com o seu conteúdo ao exibir", function () {
        var conteudoEsperado = "<div>" +
                                "<p>Questao1</p>" +
                                "<p>" +
                                    "<input type=\"radio\" name=\"EscalasQuestao1\" value=\"Sim\"/>" +
                                    "<label>Sim</label>" +
                                    "<input type=\"radio\" name=\"EscalasQuestao1\" value=\"Não\"/>" +
                                    "<label>Não</label>" +
                                "</p>" +
                               "</div>";
        var questao = new Questao("Questao1", _escalas);

        var conteudoDaQuestao = questao.exibir();

        expect(conteudoDaQuestao).toBe(conteudoEsperado);
    });
});