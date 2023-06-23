'use strict';

(function () {
  var _private = {};
  var _public = {};

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
          var arrText = 
          ["Mamãe esse é um texto final para mostrar o tanto que é importante eu na sua vida (bebê falando).",
          "Papai mimimi mimimi mimimi mimimimimimimimimi mimimi mimimi mimimimimimimimimi mimimi mimimi mimimi",
          "Os dois mimimi mimimi mimimimimimimimimi mimimi mimimi mimimi mimimi mimimi mimimimimimi mimimi mimimi",
          "Ultimo texto? se quiser pode colocar bem mais coisas coisascoisascoisas coisas coisas coisas coisas"];
          var i = 0;
          var interval = setInterval(function() {
            if (i < arrText.length) {
                var div = document.createElement('div');
                div.innerHTML = arrText[i];
                $("#div_frasebebe").append(div);
                
                i++;
                if(i == 4){
                  _private.ShowRevelacao();
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
        nextButtonText:'PRÓXIMA PERGUNTA!',
        finishButtonText:'FINALIZAR!',
        resultsScreen:'#quiz-results-screen',
        finishCallback: function () {
          $("#divValidacao1").css('display','block');
          // setInterval(() => {
          //   var div = document.createElement('div');
          //   div.innerHTML = '<h3>É UM MENINO</h3>';
          //   $("#div_revelacao").apped(div);
          // }, 2000);

          //FRASE FINAL
          // var arrText = 
          // ["Mamãe esse é um texto final para mostrar o tanto que é importante eu na sua vida (bebê falando).",
          // "Papai mimimi mimimi mimimi mimimimimimimimimi mimimi mimimi mimimimimimimimimi mimimi mimimi mimimi",
          // "Os dois mimimi mimimi mimimimimimimimimi mimimi mimimi mimimi mimimi mimimi mimimimimimi mimimi mimimi",
          // "Ultimo texto? se quiser pode colocar bem mais coisas coisascoisascoisas coisas coisas coisas coisas"];
          // var i = 0;
          // var interval = setInterval(function() {
          //   if (i < arrText.length) {
          //       var div = document.createElement('div');
          //       div.innerHTML = arrText[i];
          //       $("#quiz-results-screen #div_frasebebe").append(div);
                
          //       i++;
          //     } else clearInterval(interval);
          //   }, 5000);
          
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
              'Esta é uma resposta a ser colocada.',
              'Esta é uma resposta a ser colocada.',
              'Esta é uma resposta a ser colocada.',
              'Esta é uma resposta a ser colocada.'
            ],
            'correctIndex': 1,
            'correctResponse': 'Perfeito! estamos verificando na lista de bebês...',
            'incorrectResponse':  'Perfeito! estamos verificando na lista de bebês...'
          }//,
          // {
          //   'q': 'Segunda Pergunta? <img src="https://picsum.photos/100/100">',
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

    _private.ShowRevelacao = function () {
      setInterval(() => {
        $("#div_frasebebe").css('display','none');
        $("#div_revelacao").css('display','block');
      }, 1000);
    }
    
})();