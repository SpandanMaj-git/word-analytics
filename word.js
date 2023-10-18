const textareaEl = document.querySelector('.textarea');
const charEl = document.querySelector('.num-char');
const wordEl = document.querySelector('.num-word');
const twitterEl = document.querySelector('.num-twit');
const facebookEl = document.querySelector('.num-fb');


textareaEl.addEventListener('input', function() {
    const charLength = textareaEl.value.length;
    let wordLength = textareaEl.value.split(' ').length;
    if (textareaEl.value.length === 0){
        wordLength = 0
    }
    const twitterCharLeft = 280 - charLength;
    const fbCharLeft = 2000 - charLength

    if (twitterCharLeft < 0){
        twitterEl.classList.add('num-twit--limit')
    } else {
        twitterEl.classList.remove('num-twit--limit')
    }

    if (fbCharLeft < 0){
        twitterEl.classList.add('num-fb--limit')
    } else {
        twitterEl.classList.remove('num-fb--limit')
    }
    
    charEl.textContent = charLength; 
    twitterEl.textContent = twitterCharLeft;
    facebookEl.textContent = fbCharLeft
    wordEl.textContent = wordLength
})
