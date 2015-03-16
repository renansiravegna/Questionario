describe("Bloco", function () {

    it("não deve criar sem descrição", function() {
        expect(Bloco).toThrowError("Descrição deve ser informada");
    });

    it("deve criar com descrição", function () {
        var descricao = "Bloco raiz";

        var bloco = new Bloco(descricao);

        expect(bloco.descricao()).toBe(descricao);
    });

    it("deve adicionar um item do questionário", function () {
        var bloco = new Bloco("Bloco filho");
        var blocoFilho = new Bloco("Bloco raiz");

        bloco.adicionar(blocoFilho);

        expect(bloco.itensDoQuestionario()[0]).toBe(blocoFilho);
    });

    xit("não deve adicionar se não for um tipo compatível", function () {
    });

    it("deve retornar o html com o seu conteúdo ao exibir", function () {
        var conteudoEsperado = "<div><p>Bloco raiz</p></div>";
        var bloco = new Bloco("Bloco raiz");

        var conteudoDoBloco = bloco.exibir();

        expect(conteudoDoBloco).toBe(conteudoEsperado);
    });

    it("deve incluir o html dos itens filhos ao exibir", function () {
        var conteudoEsperado = "<div>" +
                                "<p>Bloco raiz</p>" +
                                "<div>" +
                                    "<p>Questao1</p>" +
                                    "<p>" +
                                        "<input type=\"radio\" type=\"radio\" name=\"EscalasQuestao1\" value=\"Sim\"/>" +
                                        "<label>Sim</label>" +
                                        "<input type=\"radio\" name=\"EscalasQuestao1\" value=\"Não\"/>" +
                                        "<label>Não</label>" +
                                    "</p>" +
                               "</div>" +
                               "<div>" +
                                    "<p>Questao2</p>" +
                                    "<p>" +
                                        "<input type=\"radio\" name=\"EscalasQuestao2\" value=\"Sim\"/>" +
                                        "<label>Sim</label>" +
                                        "<input type=\"radio\" name=\"EscalasQuestao2\" value=\"Não\"/>" +
                                        "<label>Não</label>" +
                                    "</p>" +
                               "</div>" +
                               "</div>";
        var escalas = ["Sim", "Não"];
        var questao1 = new Questao("Questao1", escalas);
        var questao2 = new Questao("Questao2", escalas);
        var bloco = new Bloco("Bloco raiz");
        bloco.adicionar(questao1);
        bloco.adicionar(questao2);

        var conteudoDoBloco = bloco.exibir();

        expect(conteudoDoBloco).toBe(conteudoEsperado);
    });
});