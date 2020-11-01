export class Button {
    constructor(buttonSelector, enSelectors, ruSelectors){
        this._button = document.querySelector(buttonSelector);
        this._selector = buttonSelector;
        this._enText = enSelectors;
        this._enSelectors = Object.keys(enSelectors);
        this._ruText = ruSelectors;
        this._ruSelectors = Object.keys(ruSelectors);
    }

    setEventListeners(){
        this._button.addEventListener('click', this._toggleClass);
        
    }

    _toggleClass = (evt) => {
        const parent = this._button.closest('.header__links');
        const buttons = Array.from(parent.querySelectorAll('.header__lang-link'));
        buttons.forEach((item) => {
            if (!item.classList.contains(this._selector)){
                item.classList.remove('header__lang-link_type_active');
            }
        });
        this._button.classList.toggle('header__lang-link_type_active');
        if (document.querySelector('.header__lang-link_EN').classList.contains('header__lang-link_type_active')){
            this._changeEngText();
        }
        else{
            this._changeRuText();
        }
        
    }

    _changeEngText(){
        this._enSelectors.forEach((selector) => {
            const sel = String('.'+ selector);
            document.querySelector(sel).textContent = this._enText[selector];

        })
    }

    _changeRuText(){
        this._ruSelectors.forEach((selector) => {
            const sel = String('.'+ selector);
            document.querySelector(sel).textContent = this._ruText[selector];

        })
    }

}