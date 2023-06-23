'use strict';

(function () {
  var _private = {};
  var _public = {};

  let fraseAppend = [
    "Carta de um recém-nascido à sua mãe:",
    "Mãe, que eu vou mudar sua vida inteira você já sabe, o que você ainda não descobriu é quão maravilhosa ela será com a minha chegada. Eu vou te mostrar o que significa aquele amor incondicional de mãe que você sempre quis saber.",
    "Você vai aprender que é possível sentir o que o outro sente e amar alguém mais do que a você mesma. Eu vou te apresentar um mundo totalmente novo e diferente de tudo que você já conheceu.",
    "Vou fazer você descobrir qual é o seu dom. Vou te ensinar muito mais do que aprender. Mesmo tão pequeno, vou ser o centro das suas atenções e nada mais será tão importante para você.",
    "Vou fazer você enxergar grávidas e mães na rua o tempo inteiro.",
    "Mas para isso, eu vou te dar muito trabalho. Vou tirar suas noites de sono. Vou sujar minhas roupas com uma rapidez inacreditável. Vou querer sua atenção só para mim.",
    "Vou te ensinar que paciência é uma virtude e que é preciso treiná-la todos os dias.",
    "Vou precisar de cuidados em tempo integral.",
    "Vou querer fazer coisas que não são certas e você que terá que me avisar disso. Sei que não será fácil para você mãe, mas é nesse momento que mais vou precisar da sua ajuda, pois serão suas atitudes perante as minhas que me ensinarão como a vida é.",
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
                if(i == 9){
                  var div2 = document.createElement('div');
                  div2.innerHTML = '<a id="btnRevelar" class="quiz-button btn-quiz">REVELAR!</a>';
                  $("#div_frasebebe").append(div2);
                  _private.ClickBtnRevelacao();
                }
              } else clearInterval(interval);
            }, 1000);
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
            'q': 'Primera pergunta?',
            'options': [
              'Esta é uma resposta <br/ > a ser colocada.',
              'Esta é uma resposta a ser colocada.',
              'Esta é uma resposta a ser colocada.',
              'Esta é uma resposta a ser colocada.'
            ],
            'correctIndex': 1,
            'correctResponse': fraseEscolha,
            'incorrectResponse':  fraseEscolha
          },
          {
            'q': 'Segunda Pergunta? <img src="https://picsum.photos/100/100">',
            'options': [
              'Esta é uma resposta a ser colocada.',
              'Esta é uma resposta a ser colocada.',
              'Esta é uma resposta a ser colocada.',
              'Esta é uma resposta a ser colocada.'
            ],
            'correctIndex': 1,
            'correctResponse': fraseUltEscolha,
            'incorrectResponse':  fraseUltEscolha
          },
          // {
          //   'q': 'Terceira pergunta?',
          //   'options': [
          //     '<img src="https://picsum.photos/100/100">',
          //     '<img src="https://picsum.photos/100/100">'
          //   ],
          //   'correctIndex': 0,
          //   'correctResponse': 'Perfeito! estamos verificando na lista de bebês...',
          //   'incorrectResponse':  'Perfeito! estamos verificando na lista de bebês...'
          // },
          // {
          //   'q': 'Quarta pergunta?',
          //   'options': [
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.'
          //   ],
          //   'correctIndex': 1,
          //   'correctResponse': 'Perfeito! estamos verificando na lista de bebês...',
          //   'incorrectResponse':  'Perfeito! estamos verificando na lista de bebês...'
          // },
          // {
          //   'q': 'Quinta pergunta?',
          //   'options': [
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.'
          //   ],
          //   'correctIndex': 3,
          //   'correctResponse': 'Perfeito! estamos verificando na lista de bebês...',
          //   'incorrectResponse':  'Perfeito! estamos verificando na lista de bebês...'
          // },
          // {
          //   'q': 'Sexta pergunta?',
          //   'options': [
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.'
          //   ],
          //   'correctIndex': 3,
          //   'correctResponse': 'Perfeito! estamos verificando na lista de bebês...',
          //   'incorrectResponse':  'Perfeito! estamos verificando na lista de bebês...'
          // },
          // {
          //   'q': 'Sétima pergunta?',
          //   'options': [
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.'
          //   ],
          //   'correctIndex': 3,
          //   'correctResponse': 'Perfeito! estamos verificando na lista de bebês...',
          //   'incorrectResponse':  'Perfeito! estamos verificando na lista de bebês...'
          // },
          // {
          //   'q': 'Oitava pergunta?',
          //   'options': [
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.'
          //   ],
          //   'correctIndex': 3,
          //   'correctResponse': 'Perfeito! estamos verificando na lista de bebês...',
          //   'incorrectResponse':  'Perfeito! estamos verificando na lista de bebês...'
          // },
          // {
          //   'q': 'Nona pergunta?',
          //   'options': [
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.',
          //     'Esta é uma resposta a ser colocada.'
          //   ],
          //   'correctIndex': 3,
          //   'correctResponse': 'Perfeito! estamos verificando na lista de bebês...',
          //   'incorrectResponse':  'Perfeito! estamos verificando na lista de bebês...'
          // }
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
    
})();