import { toggleBackblur } from '../message/message.js';

class Qwiz {
    constructor() {
        this.currentQuestion = 0;
        this.selectedAnswers = {};
        this.showRequest = false;

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupErrorCleanup();
        this.updateUI();
    }

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            const answerItem = e.target.closest('.quiz__answers--item');
            if (answerItem) {
                const questionIndex = parseInt(answerItem.dataset.question);
                const answerIndex = parseInt(answerItem.dataset.answer);
                this.handleAnswerSelect(questionIndex, answerIndex);
            }
        });

        const backBtn = document.querySelector('.quiz__nav--btn-back');
        const nextBtn = document.querySelector('.quiz__nav--btn-next');

        if (backBtn) {
            backBtn.addEventListener('click', () => this.handleBack());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.handleNext());
        }

        const sendBtn = document.querySelector('.qwizRequest__btn');
        if (sendBtn) {
            sendBtn.addEventListener('click', (e) => {
                this.handleSubmitRequest();
            });
        }

        const toggleAgree = document.querySelector('.qwizRequest__toggleAgree--togle');
        toggleAgree.addEventListener('click', () => {
            this.toggleAgreement();
        });

        const phoneInput = document.querySelector('.qwizRequest__input--num input');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => this.handlePhoneChange(e));
        }
    }

    handleAnswerSelect(questionIndex, answerIndex) {
        if (this.selectedAnswers[questionIndex] === answerIndex) {
            delete this.selectedAnswers[questionIndex];
        } else {
            this.selectedAnswers[questionIndex] = answerIndex;
        }

        this.updateAnswerUI(questionIndex);
        this.updateUI();
    }

    updateAnswerUI(questionIndex) {
        const answerItems = document.querySelectorAll(`.quiz__answers--item[data-question="${questionIndex}"]`);

        answerItems.forEach((item, index) => {
            if (this.selectedAnswers[questionIndex] === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    handleNext() {
        if (this.currentQuestion < 3 && this.isAnswerSelected(this.currentQuestion)) {
            this.currentQuestion++;
            this.updateUI();
        } else if (this.currentQuestion === 3 && this.isAnswerSelected(this.currentQuestion)) {
            this.showRequest = true;
            this.currentQuestion++;
            this.updateUI();
        }
    }

    handleBack() {
        if (this.showRequest) {
            this.showRequest = false;
        } else if (this.currentQuestion > 0) {
            this.currentQuestion--;
        }
        this.updateUI();
    }

    isAnswerSelected(questionIndex) {
        return this.selectedAnswers[questionIndex] !== undefined;
    }

    updateUI() {
        this.updatePagination();
        this.updateNavigationButtons();
        this.updateSliderPosition();
        this.updateVisibility();
        this.updateRequestFormActive();
    }

    updateRequestFormActive() {
        const requestForm = document.querySelector('.qwizRequest');
        if (requestForm) {
            if (this.showRequest) {
                requestForm.classList.add('active');
                this.updatePagination();
            } else {
                requestForm.classList.remove('active');
            }
        }
    }

    updatePagination() {
        const paginationItems = document.querySelectorAll('.quiz__pagination--item');

        paginationItems.forEach((item, index) => {
            item.classList.remove('active', 'answered');

            if (this.isAnswerSelected(index)) {
                item.classList.add('answered');
            }

            if (index === this.currentQuestion) {
                item.classList.add('active');
            }
        });
    }

    updateNavigationButtons() {
        const backBtn = document.querySelector('.quiz__nav--btn-back');
        const nextBtn = document.querySelector('.quiz__nav--btn-next');

        if (backBtn) {
            backBtn.classList.toggle('disabled', this.currentQuestion === 0 && !this.showRequest);
        }

        if (nextBtn) {
            const isNextDisabled = !this.isAnswerSelected(this.currentQuestion) && !this.showRequest;
            nextBtn.classList.toggle('disabled', isNextDisabled);

        }

        const nav = document.querySelector('.quiz__nav');
        if (nav || this.showRequest) {
            nav.style = `display: ${this.showRequest ? 'none' : 'flex'}`;
        }
    }

    updateSliderPosition() {
        const elasticWindow = document.querySelector('.quiz__elastic-window');
        if (elasticWindow) {
            const translateX = this.showRequest
                ? -4 * 100 // 4 вопроса
                : -this.currentQuestion * 100;

            elasticWindow.style.transform = `translateX(${translateX}%)`;
        }
    }

    updateVisibility() {
        const qwizBlock = document.querySelector('.quiz__container');
        if (qwizBlock) {
            qwizBlock.classList.toggle('lastBlock', this.showRequest);
        }

        const nav = document.querySelector('.qwiz__nav');
        if (nav) {
            nav.style.display = this.showRequest ? 'none' : 'flex';
        }
    }

    handlePhoneChange(e) {
        const input = e.target;
        const newValue = input.value;
        const oldValue = input.getAttribute('data-old-value') || '';

        const isAdding = newValue.length > oldValue.length;

        if (isAdding) {
            let value = newValue.replace(/\D/g, '');

            if (value === '') {
                input.value = '';
                return;
            }

            if (value.startsWith('7')) {
                value = value.substring(1);
            }

            if (value.length > 10) {
                input.value = oldValue;
                return;
            }

            let formattedValue = '+7';

            if (value.length > 0) {
                formattedValue += ' (' + value.substring(0, 3);
            }
            if (value.length > 3) {
                formattedValue += ') ' + value.substring(3, 6);
            }
            if (value.length > 6) {
                formattedValue += '-' + value.substring(6, 8);
            }
            if (value.length > 8) {
                formattedValue += '-' + value.substring(8, 10);
            }

            input.value = formattedValue;
        }

        input.setAttribute('data-old-value', input.value);
    }

    toggleAgreement() {
        const toggle = document.querySelector('.qwizRequest__toggleAgree--togle');
        const btn = document.querySelector('.qwizRequest__btn');
        toggle.classList.toggle('active');
        btn.classList.toggle('disabled');
        btn.disabled = true ? !btn.disabled : false;
    }

    handleSubmitRequest() {
        const nameInput = document.querySelector('.qwizRequest__input--name input');
        const phoneInput = document.querySelector('.qwizRequest__input--num input');
        const toggle = document.querySelector('.qwizRequest__toggleAgree--togle');

        if (!nameInput || !phoneInput || !toggle) {
            console.error('Не найдены необходимые элементы формы');
            return;
        }

        let hasErrors = false;

        this.clearErrors();

        if (!nameInput.value.trim()) {
            this.showError(nameInput, 'Поле не заполнено');
            hasErrors = true;
        }

        if (!phoneInput.value.trim()) {
            this.showError(phoneInput, 'Поле не заполнено');
            hasErrors = true;
        } else if (phoneInput.value.replace(/\D/g, '').length < 11) {
            this.showError(phoneInput, 'Неверный формат телефона');
            hasErrors = true;
        }

        if (!hasErrors) {
            const requestCall = {
                name: nameInput.value.trim(),
                phone: phoneInput.value.replace(/\D/g, ''),
                question1: this.selectedAnswers[0],
                question2: this.selectedAnswers[1],
                question3: this.selectedAnswers[2],
                question4: this.selectedAnswers[3],
            };

            console.log('Отправка данных:', requestCall);
            toggleBackblur("Мы получили вашу заявку и позвоним в течении 15 минут, чтобы уточнить детали<br><br>Ждём вас на <span class='message__text-p_green'>бесплатной диагностике</span> до конца месяца.<br><br>Успейте пройти<br><span class='message__text-p_green'>детальное обследование за 0 ₽</span>");

            nameInput.value = '';
            phoneInput.value = '';
            toggle.classList.add('active');

        }
    }

    showError(element, message) {
        if (!element) return;

        const inputContainer = element.closest('.qwizRequest__form--item') || element;
        inputContainer.classList.add('unapprecial');

        if (element.tagName === 'INPUT') {
            element.placeholder = message;
        }
    }

    clearErrors() {
        document.querySelectorAll('.unapprecial').forEach(el => {
            el.classList.remove('unapprecial');
        });

        document.querySelectorAll('.qwizRequest__form--input').forEach(input => {
            const defaultPlaceholders = {
                'qwizRequest__input--name': 'Введите ваше имя',
                'qwizRequest__input--num': '+7 (___) - ___ - __ - __'
            };

            const inputContainer = input.closest('.qwizRequest__form--item');
            if (inputContainer) {
                const containerClass = Array.from(inputContainer.classList)
                    .find(cls => cls.includes('qwizRequest__form--item--'));

                if (containerClass && defaultPlaceholders[containerClass]) {
                    input.placeholder = defaultPlaceholders[containerClass];
                }
            }
        });
    }

    setupErrorCleanup() {
        const inputs = document.querySelectorAll('.qwizRequest__form--input');

        inputs.forEach(input => {
            input.addEventListener('input', (e) => {
                const inputContainer = e.target.closest('.qwizRequest__form--item');
                if (inputContainer && inputContainer.classList.contains('unapprecial')) {
                    inputContainer.classList.remove('unapprecial');

                    // Восстанавливаем оригинальный placeholder
                    const containerClass = Array.from(inputContainer.classList)
                        .find(cls => cls.includes('qwizRequest__form--item--'));

                    const defaultPlaceholders = {
                        'qwizRequest__input--name': 'Введите ваше имя',
                        'qwizRequest__input--num': '+7 (___) - ___ - __ - __'
                    };

                    if (containerClass && defaultPlaceholders[containerClass]) {
                        e.target.placeholder = defaultPlaceholders[containerClass];
                    }
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Qwiz();
});