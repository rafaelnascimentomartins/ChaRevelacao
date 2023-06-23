'use strict';

$(function () {
    $('.quiz-container').quiz({
        counterFormat: 'Questões %current of %total',
        nextButtonText:'PRÓXIMA PERGUNTA!',
        finishButtonText:'FINALIZAR!',
        resultsScreen:'#quiz-results-screen',
        finishCallback: function () {
          $("#pFraseFinal").innerHTML = 'olaa'
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
                $("#quiz-results-screen #div_frasebebe").append(div);
                
                i++;
              } else clearInterval(interval);
            }, 5000);
          
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
});