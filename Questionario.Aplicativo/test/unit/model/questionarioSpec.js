describe("Questionário", function () {

    it("não deve criar sem bloco raiz", function () {
        expect(Questionario).toThrowError("Bloco raiz deve ser informado");
    });

    it("deve criar com um bloco raiz", function () {
        var blocoRaiz = new Bloco("Bloco raiz");

        var questionario = new Questionario(blocoRaiz);

        expect(questionario.blocoRaiz()).toBe(blocoRaiz);
    });

    it("deve exibir inicialmente com o bloco raiz", function () {
        var blocoRaizSpy = new Bloco("Bloco raiz");
        spyOn(blocoRaizSpy, "exibir");
        var questionario = new Questionario(blocoRaizSpy);

        questionario.exibir();

        expect(blocoRaizSpy.exibir).toHaveBeenCalled();
    });

    it("deve exibir na body", function () {
        var conteudoDoBlocoRaiz = "<div><p>Bloco raiz</p></div>";
        var blocoRaiz = new Bloco("Bloco raiz");
        var questionario = new Questionario(blocoRaiz);
        spyOn($.fn, "append");

        questionario.exibir("body");

        expect($.fn.append).toHaveBeenCalledWith(conteudoDoBlocoRaiz);
    });

    xit("não deve exibir se o container não for informado", function() {});
});