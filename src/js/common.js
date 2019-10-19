
$(document).ready(function() {
	// Popup
	$('.js-open-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup').fadeIn(300);
		$('html').addClass('is-fixed');
	});


	$('.js-close-popup-btn').on('click',function(e) {
		e.preventDefault();
		$(this).parents('.js-popup').fadeOut(300);
		$('html').removeClass('is-fixed');
	});

	$('.popup__overflow').on('click', function(e) {
		e.stopPropagation();

		var content = $(this).find('.popup__body');

		if(!content.is(e.target) && content.has(e.target).length === 0) {
			$('html').removeClass('is-fixed');
			$('.js-popup').fadeOut(300);
		}

	});
	// ========= =========== =========== ===========

// =========== Variables
	var quizStep = $('.js-quiz-step'), // quiz step
			quizControls = quizStep.find($('.js-quiz-controls')); //quiz control buttons; 
	// ===============================


	var firstQuestionAnswers = [
		{
			'img': 'img/quiz/question-1/1.png',
			'text': 'Практика йоги даёт телу гибкость, красоту, грацию движений. Формируется стройная фигура и красивое тело. Организм избавляется от токсинов, улучшается пищеварение, за счет чего кожа становится чистой и гладкой. Появляется свежий цвет лица. Внутреннее состояние легкости, искренняя улыбка и сияющий свет в глазах.'
		},
		{
			'img': 'img/quiz/question-1/2.png',
			'text': 'Человек в процессе занятия йогой, правильного питания и духовного развития обретает контроль над своим телом и снимает эмоциональное напряжение. Он полон энергии дающей жизненную силу, вдохновение, желание к воплощению идей и принятию решений.'
		},
		{
			'img': 'img/quiz/question-1/3.png',
			'text': 'Философия и практики йоги вырабатывают позитивное мышление и уверенность в себе. Появляется оптимизм и мотивация. Человек легко выстраивает коммуникациии чувствует людей. Исчезают проблемы. Формируется правильное отношение к себе и другим людям. Самоуважение и вера в свои силы.'
		},
		{
			'img': 'img/quiz/question-1/4.png',
			'text': 'Философия и практики йоги вырабатывают позитивное мышление и уверенность в себе. Появляется оптимизм и мотивация. Человек легко выстраивает коммуникации и  чувствует людей. Исчезают проблемы. Формируется правильное отношение к себе и другим людям. Самоуважение и вера в свои силы.'
		},
		{
			'img': 'img/quiz/question-1/5.png',
			'text': 'Практика йоги приводит к пересмотру негативных чувств к любимому человеку. Появляются душевные силы и уверенность для выстраивания отношений.  Ревность сменяется любовью. Взаимные упрёки трансформируются в уважение. Эмоциональная близость приносит счастье и удовлетворение.'
		},
		{
			'img': 'img/quiz/question-1/6.png',
			'text': 'Практики йоги восстанавливают равновесие систем организма и положительно сказываются на самочувствии. Нормализуется давление и улучшается крово-обращение, что даёт жизненную энергию. Снижение веса снимает нагрузку на позвоночник и суставы. Нормализация пищеварения улучшает настроение и повышается стрессоустойчивость. Отступают недомогания органов брюшной полости. Организм быстрее восстанавливается после родов. Расслабление подсознания избавляет от психосоматических заболеваний.'
		}

	];

	var secondQuestionAnswers = [
		{
			'img': 'img/quiz/question-2/1.png',
			'text': 'Для Вас допустима интенсивная практика выполнения асан, без ограничений. Если нет перенесённых травм и других противопоказаний. '
		},
		{
			'img': 'img/quiz/question-2/2.png',
			'text': 'В этом возрасте организм претерпевает изменения, но ещё очень крепок. Программа строится более размеренная, чтобы практика была корректной и безопасной для организма.'
		},
		{
			'img': 'img/quiz/question-2/3.png',
			'text': 'Для более зрелого возраста подбираем щадящую программу и заменяем либо исключаем сложные асаны, чтобы практика проходила с максимальным результатом.'
		}

	];

	$('.js-quiz-answers-first input[type=radio]').on('change', function(e) {
		e.stopPropagation();
		showAnswerContent($(this), firstQuestionAnswers);

		var id = showAnswerContent($(this), firstQuestionAnswers);

		$('.js-quiz-answers-second').parents('.js-quiz').find('.quiz__step--info-content_block').css('background-image', 'url(' + firstQuestionAnswers[id]['img'] + ')').find('p').html(firstQuestionAnswers[id]['text']);
		$('.js-quiz-answers-second').parents('.js-quiz').find('.quiz__step--info-content_block').addClass('is-active');


	});

	$('.js-quiz-answers-second input[type=radio]').on('change', function(e) {
		e.stopPropagation();
		showAnswerContent($(this), secondQuestionAnswers);
	});

	function showAnswerContent(elem, answers) {
		var id = parseInt(elem.attr('data-quiz-answer-id')) - 1;

		var answerContentBlock = elem.parents('.js-quiz-step').find('.quiz__step--info-content');
	
		answerContentBlock.find('.quiz__step--info-content_block').css('background-image', 'url(' + answers[id]['img'] + ')').find('p').html(answers[id]['text']);
		answerContentBlock.find('.quiz__step--info-content_start-block').addClass('is-hidden');
		answerContentBlock.find('.quiz__step--info-content_block').addClass('is-active');

		return id;
	}

	$('.js-quiz input').on('change', function() {
		if($(this).val()) {
			$(this).parents('.js-quiz-step').find('.quiz__btn').removeClass('is-disabled').attr('disabled', false);
		}
	});
	// =========== Hide all steps except the first
	quizStep.not(":nth-child(1)").hide();
	quizStep.first().addClass('is-active');

	quizStep.last().find('.js-quiz-controls').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var btn = $(e.target);

		if(btn.prop('tagName') !== 'BUTTON') {return};

		$('.js-quiz-body').hide();
		$('.js-quiz-result').fadeIn();
	});



	$('.quiz__methods--row input[type=radio]').on('change', function() {
		var method = $(this).attr('data-quiz-method');

		$('.quiz__input').removeClass('is-error');

		if(method === 'messanger') {

			$('.js-quiz-inputs-email').find('.quiz__input').each(function() {
				$(this).removeClass('js-input');
			});

			$('.js-quiz-inputs-email').hide();

			$('.js-quiz-inputs-socials').find('.quiz__input').each(function() {
				$(this).addClass('js-input');
			});

			$('.js-quiz-inputs-socials').stop().slideDown(200);

		} else if(method === 'email') {
			$('.js-quiz-inputs-socials').find('.quiz__input').each(function() {
				$(this).removeClass('js-input');
			});

			$('.js-quiz-inputs-socials').hide();
			
			$('.js-quiz-inputs-email').find('.quiz__input').each(function() {
				$(this).addClass('js-input');
			});

			$('.js-quiz-inputs-email').stop().slideDown(200);
		}
	});
	// =========== Show next / prev quiz step
	

	$('.js-quiz-controls').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();

		var btn = $(e.target);
		var flag;

		if(btn.prop('tagName') !== 'BUTTON') {return};

		var radios = $(this).parents('.quiz__step--answers-col').find('input[type=radio]:checked').length;
		var textarea = $(this).parents('.quiz__step--answers-col').find('.js-quiz-textarea');


		if(radios > 0 || textarea.val()) {
			flag = true;
		} else {
			flag = false;
		}

		if(!flag) {return};


		btn.parents('.js-quiz-step').removeClass('is-active').hide();
		btn.parents('.js-quiz-step').next().addClass('is-active').fadeIn();

	});


	
	
// ========= Ajax form ===========
$('.js-input').on('focus',function() {
	if($(this).hasClass('is-error')) {
		$(this).removeClass('is-error');
	}
});

$('.js-form').submit(function(e) {
	e.preventDefault();

	var self = $(this),
		inputs = self.find('.js-input'),
		flag = true;

	$(inputs).each(function() {
		if(!$(this).val() || $(this).val() == "") {
			$(this).addClass('is-error');
			flag = false;
		}
	});

	if(!flag) {return false;}
	

	$.ajax({
		type: "POST",
		url: "mail-new.php",
		data: self.serialize()
	}).done(function() {
		self.trigger("reset");

		self.find('.js-quiz-final').hide();
		self.find('.js-quiz-success').fadeIn();

	});

});
// ========= =========== =========== ===========

// ========= In p u t   t e l e p h o n e   m a s k ===========
$('.js-input-phone').mask('+7 (999) 999-99-99');
// ========= =========== =========== ===========

$(".btn, .quiz__btn, .btn__submit").append('<span class="anim-btn1 animate1"></span>');
     $(".btn, .quiz__btn, .btn__submit").each(function() {
		var B = $(this);
		var A, C, z, D;
		setInterval(function() {
			if (B.find(".anim-btn1").length===0) {
				B.prepend("<span class='anim-btn1'></span>");
			} 
			A = B.find(".anim-btn1");
			A.removeClass("animate1");
			if (!A.height() && !A.width()) {
				C = Math.max(B.outerWidth(), B.outerHeight());
				A.css({height: C, width: C});
			}
			z = Math.round(Math.random() * A.width() - A.width() / 2);
			D = Math.round(Math.random() * A.height() - A.height() / 2);
			A.css({top: D + "px", left: z + "px"}).addClass("animate1");
		}, 1000);
	});



});