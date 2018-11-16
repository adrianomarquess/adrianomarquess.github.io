const services = {
  courses: [
    {
      thumbnail: 'NR1',
      title: 'NR1 - Ordem de Serviço',
      description:
        'Course description test Course description test Course description test',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    },
    {
      thumbnail: 'NR6',
      title: 'NR6 - EPIs',
      description:
        'Norma que regulamenta e estabelece condições para o uso de Equipamentos de Proteção Individual (EPI).',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    },
    {
      thumbnail: 'NR10',
      title: 'NR10',
      description:
        'Norma regulamentadora que engloba todas as fases de transformação de energia elétrica e trabalhos com eletricidade.',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    },
    {
      thumbnail: 'NR12',
      title: 'NR12',
      description:
        'Norma regulamentadora que caracteriza como responsabilidade do empregador a tomada de medidas protetivas para o uso seguro de máquinas e equipamentos.',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    },
    {
      thumbnail: 'NR18',
      title: 'NR18',
      description:
        'Norma que objetiva a implementação de medidas de controle e sistemas preventivos de segurança nos processos, nas condições e no meio ambiente de trabalho na Indústria.',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    },
    {
      thumbnail: 'NR20',
      title: 'NR20',
      description:
        'Segurança e saúde no trabalho com inflamáveis e combustíveis.',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    },
    {
      thumbnail: 'NR33',
      title: 'NR33',
      description:
        'Espaço confinado é qualquer área ou ambiente não projetado adequadamente para ocupação humana contínua, que possua meios limitados de entrada e saída.',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    },
    {
      thumbnail: 'NR35',
      title: 'NR35 - Trabalho em altura',
      description: 'Norma regulamentadora de trabalho em altura.',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    }
  ],
  trainings: [
    {
      thumbnail: 'Brigada de Incêndio',
      title: 'BRIGADA DE INCÊNDIO',
      description:
        'Treinamento com objetivo de habilitar pessoas realizar atendimento em situação de emergência',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    },
    {
      thumbnail: 'Primeiros Socorros',
      title: 'PRIMEIROS SOCORROS',
      description:
        'Treinamento com finalidade de capacitar pessoas a prestar os primeiros socorros',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    },
    {
      thumbnail: 'Treinamento CIPA',
      title: 'TREINAMENTO CIPA',
      description:
        'Treinamento para formação de membros para Comissão Interna de Prevenção de Acidentes',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    },
    {
      thumbnail: 'PCMAT',
      title: 'PCMAT',
      description:
        'Programa de Condições e Meio Ambiente de Trabalho na Indústria na Construção Civil',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    },
    {
      thumbnail: 'PCMSO',
      title: 'PCMSO',
      description: 'Programa de Controle Médico de Saúde Ocupacional',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    },
    {
      thumbnail: 'PPRA',
      title: 'PPRA',
      description: 'Programa de Prevenção de Riscos Ambientais',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    }
  ],
  services: [
    {
      thumbnail: 'Laudo de Aterramento',
      title: 'LAUDO DE ATERRAMENTO',
      description:
        'Analisar alguns parâmetros relacionados a proteção contra choques elétricos.',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    },
    {
      thumbnail: 'Laudo de Ergonomia (NR17)',
      title: 'LAUDO DE ERGONOMIA (NR17)',
      description:
        'Documento obrigatório para as empresas cujos funcionários estejam expostos a riscos decorrentes de esforços físicos repetitivos ou, ainda, por posturas inadequadas, entre outros fatores.',
      html_url: 'https://www.hotmart.com/pt/hotpay/'
    }
  ]
};

const getServices = filter => {
  let list = '';

  services[filter].map(item => {
    list += `
      <li class="course-item hvr-shrink">
        <div class="course-thumbnail"><h1>${item.thumbnail}</h1></div>
        <div class="course-content">
          <div>
            <h1>${item.title}</h1>
            <p>${item.description}</p>
          </div>
          <div>
            <a href="${item.html_url}" target="_blank">Saber mais</a>
          </div>
        </div>
      </li>
    `;
  });

  return new Promise(function(resolve, reject) {
    resolve(list);
  });
};

$(document).ready(function() {
  $('.menu-anchor').on('click', function(e) {
    $('.menu').slideToggle('fast');
  });

  $('#banner-fade').bjqs({
    width: '100%',
    height: '100%',
    animtype: 'fade',
    showcontrols: false,
    animspeed: 5500,
    hoverpause: false,
    responsive: true
  });

  $('.services .filter-list li .filter').on('click', function(e) {
    const buttons = $('.services .filter-list li .filter');
    $(buttons).removeClass('service-menu-active');
    $(this).addClass('service-menu-active');

    const filter = $(this).attr('data-filter');
    getServices(filter).then(res => {
      $('.course-list').html(res);
    });
  });

  getServices('courses').then(res => {
    $('.course-list').html(res);
  });

  $('.menu a').on('click', function(event) {
    const parent = $(this)
      .parent()
      .parent();

    if ($(window).width() < 1024 && $(parent).attr('id') !== 'menu-footer') {
      $('.menu-anchor').click();
    }

    const sectionToScroll = this.hash;

    $('html, body').animate(
      { scrollTop: $(sectionToScroll).offset().top - 140 },
      700,
      function() {
        window.location.hash = sectionToScroll;
      }
    );
  });
});

const hamburgers = document.getElementsByClassName('hamburger');

hamburgers[0].addEventListener(
  'click',
  function() {
    this.classList.toggle('is-active');
  },
  false
);
