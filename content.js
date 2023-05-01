const sanitizeBookTitle = (t) => {
  return t.replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  }).replaceAll('【期間限定価格】', '').replaceAll(/　+/g, ' ').replace(/\s+([0-9])/, "$1");
}
let breadCrumbs = Array.from(document.querySelectorAll('.topic-path-animation li'));
let bookTitle = sanitizeBookTitle(breadCrumbs.pop().textContent);
let urlForKindleUnlimited = `https://www.amazon.co.jp/s?k=${encodeURIComponent(bookTitle)}&rh=n%3A2250738051%2Cp_n_feature_nineteen_browse-bin%3A3169286051`;
let urlForAllKindle = `https://www.amazon.co.jp/s?k=${encodeURIComponent(bookTitle)}&rh=n%3A2275256051`

let [rightArea] = document.getElementsByClassName('stRightArea');
let wrapper = document.createElement('div');
wrapper.classList.add('find-in-kindle-wrapper');

let kuLinkButton = document.createElement('a');
kuLinkButton.innerText = 'Kindle Unlimited で探す';
kuLinkButton.href = urlForKindleUnlimited;
kuLinkButton.target = '_blank';

let kindleLinkButton = document.createElement('a');
kindleLinkButton.innerText = 'すべての Kindle で探す';
kindleLinkButton.href = urlForAllKindle;
kindleLinkButton.target = '_blank';

wrapper.appendChild(kuLinkButton);
wrapper.appendChild(kindleLinkButton);
rightArea.appendChild(wrapper);
