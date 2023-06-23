'use strict';

(function () {
  var _private = {};
  var _public = {};

  let fraseAppend = [
    "NOSSA EMPRESA RECEBEU ESTA CARTA:",
    "Já fui avisado que fui escolhido e estou arrumando minhas malas!",
    "Que eu vou virar a vida de vocês ao avesso, vocês já sabem, o que vocês ainda não descobriram é quão maravilhosa ela será com a minha chegada.",
    "Vou fazer vocês enxergarem grávidas e mães na rua o tempo inteiro.",
    "Vou te ensinar muito mais do que aprender.",
    "Mas para isso, vou dar muito trabalho.",
    "Vou tirar noites de sono. Vou sujar minhas roupas com uma rapidez inacreditável.",
    "Vou ensinar que paciência é uma virtude e que é preciso treiná-la todos os dias.",
    "Vou querer fazer coisas que não são certas e vocês que terão que me avisar disso.",
    "Sei que não será fácil, mas é nesse momento que mais vou precisar de ajuda e atenção, pois serão suas atitudes perante as minhas que me ensinarão como a vida é.",
    ];

    let fraseEscolha = `
    Obrigado pela sua escolha! <br/>
    Estamos verificando a compatibilidade de acordo com nossa fila, favor aguardar.
    `;

    let fraseUltEscolha = `
    Obrigado pelo seu empenho até aqui!
    Nosso match já foi definido e será revelado. <br/>
    Quando estiverem prontos, basta FINALIZAR!
    `;

    $(function () {
      _public.LoadQuiz();
      _public.ClickBtnsValidacoes();
      _public.NoClickButton();
      _public.CheckedImageRevelacao();
    });
  
    _public.ClickBtnsValidacoes = function () {
      $("#btnValidacao1").on('click', function (e) {
        e.preventDefault();
        $("#divValidacao1").css('display','none');
        $("#divValidacao2").css('display','block');
      });
      $("#btnValidacao2").on('click', function (e) {
        e.preventDefault();
        $("#divValidacao2").css('display','none');
        $("#divValidacao3").css('display','block');
      });
      $("#btnValidacao3").on('click', function (e) {
        e.preventDefault();
        $("#divValidacao3").css('display','none');
        $("#div_frasebebe").css('display','block');

         //FRASE FINAL
          var arrText = fraseAppend;
          
          var i = 0;
          var interval = setInterval(function() {
            if (i < arrText.length) {
                var div = document.createElement('div');
                div.innerHTML = arrText[i];
                $("#div_frasebebe").append(div);
                
                i++;
                if(i == 10){
                  var div2 = document.createElement('div');
                  div2.innerHTML = '<a id="btnRevelar" class="quiz-button btn-quiz">REVELAR</a>';
                  $("#div_frasebebe").append(div2);
                  _private.ClickBtnRevelacao();
                }
              } else clearInterval(interval);
            }, 3000);
      });
    };

    _public.NoClickButton = function () {
      var btns = document.querySelectorAll(".noClick");
      btns.forEach(f => {
        f.addEventListener("mouseover", function () {
          let h = window.innerHeight;
          let w = window.innerWidth;
  
          console.log(this.style.top)
          //TABLETS E CELULARES
          if(window.innerWidth <= 1025){
            h -= 50;
            w -= 50; 
          }else{
            h -= 320;
            w -= 1000;
          }
         
          this.style.position = "absolute";
          this.style.top = Math.random() * h + "px";
          this.style.left = Math.random() * w + "px";
        });
      });
    };

    _public.LoadQuiz = function () {
      $('.quiz-container').quiz({
        counterFormat: 'Questões %current of %total',
        nextButtonText:'PRÓXIMA',
        finishButtonText:'FINALIZAR',
        resultsScreen:'#quiz-results-screen',
        finishCallback: function () {
          $("#divValidacao1").css('display','block');
        },
        // nextCallback: function () {
        //   setTimeout(function (e) {
        //     e.stopPropagation();
        //     alert('AGUARDA')
        //   }, 5000);
        // },
        questions: [
          {
            'q': 'A mamãe acha que o bebê vai pesar...',
            'options': [
              '2kg a 2,8kg',
              '2,9kg a 3,5kg',
              'Mais de 3,5kg'
            ],
            'correctIndex': 1,
            'correctResponse': fraseEscolha,
            'incorrectResponse':  fraseEscolha
          },
          {
            'q': 'O papai acha que o bebê vai medir...',// <img src="https://picsum.photos/100/100">
            'options': [
              'Menos de 46cm',
              'Entre 47cm e 49cm',
              'Mais de 49cm'
            ],
            'correctIndex': 1,
            'correctResponse': fraseEscolha,
            'incorrectResponse':  fraseEscolha
          },
          {
            'q': 'Os papais acham que o bebê vai chegar...',
            'options': [
              'Antes da hora',
              'Na semana prevista',
              'Depois da hora',
              'Vão programar o parto'
            ],
            'correctIndex': 0,
            'correctResponse': fraseEscolha,
            'incorrectResponse': fraseEscolha
          },
          {
            'q': 'Da mamãe, o bebê vai puxar...',
            'options': [
              'Os olhos',
              'O nariz',
              'A boca',
              'A altura'
            ],
            'correctIndex': 1,
            'correctResponse': fraseEscolha,
            'incorrectResponse':  fraseEscolha
          },
          {
            'q': 'Do papai, o bebê vai puxar...',
            'options': [
              'Os olhos',
              'O nariz',
              'A boca',
              'A altura'
            ],
            'correctIndex': 1,
            'correctResponse': fraseEscolha,
            'incorrectResponse':  fraseEscolha
          },
          {
            'q': 'Depois que o bebê nascer, vai...',
            'options': [
              'Ser bonzinho e dormir <br/> bastante',
              'Ser preguiçoso, mas quando <br/> chorar será bem alto',
              'Vai ser agitado e dormir <br/> pouco'
            ],
            'correctIndex': 3,
            'correctResponse': fraseEscolha,
            'incorrectResponse':  fraseEscolha
          },
          {
            'q': 'Quem suspeitou da gravidez primeiro?',
            'options': [
              'Mamãe',
              'Papai',
              'Ninguém suspeitou'
            ],
            'correctIndex': 3,
            'correctResponse': fraseEscolha,
            'incorrectResponse':  fraseEscolha
          },
          {
            'q': 'Quem vai ser mais coruja?',
            'options': [
              'Mamãe',
              'Papai',
              'Vovô e vovó',
              'Titio',
              'Maninha'
            ],
            'correctIndex': 3,
            'correctResponse': fraseEscolha,
            'incorrectResponse':  fraseEscolha
          },
          {
            'q': 'Quem vai segurar na hora das vacinas?',
            'options': [
              'Mamãe',
              'Papai',
              'Vovô e vovó',
              'Titio',
              'Todo mundo agarradinho'
            ],
            'correctIndex': 3,
            'correctResponse': fraseUltEscolha,
            'incorrectResponse': fraseUltEscolha
          }
        ]
      });
    };

    _private.ClickBtnRevelacao = function () {
      $("#btnRevelar").on('click', function (e) {
        e.preventDefault();

        $("#div_frasebebe").css('display','none');
        $("#div_revelacao").css('display','block');
      });
     
    }

    _public.CheckedImageRevelacao = function () {
      $("#switch").on('click', function () {
        $(".quiz").css('background','linear-gradient(45deg,#87cefa,#87cefa)');
        $("#titulo_revelacao").text('O AMOR É AZULZINHO!');
      });
    }
    
})();