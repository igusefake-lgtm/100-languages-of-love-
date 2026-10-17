const languages = [
["I love you","English","The words are simple. The feeling isn't."],
["Je t’aime","French","A little phrase, an entire universe."],
["Te amo","Spanish","For every version of tomorrow."],
["Ich liebe dich","German","Even the strongest words feel soft with you."],
["Ti amo","Italian","Like a warm sunset that never ends."],
["Eu te amo","Portuguese","My heart finds its way to you."],
["愛してる (Aishiteru)","Japanese","愛してる — Aishiteru"],
["사랑해 (Saranghae)","Korean","사랑해 — Saranghae"],
["我爱你 (Wǒ ài nǐ)","Chinese (Mandarin)","Wǒ ài nǐ"],
["मैं तुमसे प्यार करता हूँ","Hindi","Main tumse pyaar karta hoon."],
["میں تم سے محبت کرتا ہوں","Urdu","Main tum se mohabbat karta hoon."],
["أنا أحبك (Ana uhibbuka)","Arabic","Ana uhibbuka (to a man) / Ana uhibbuki (to a woman)."],
["Te iubesc","Romanian","A love that feels like home."],
["Seni seviyorum","Turkish","Seni seviyorum."],
["Я тебя люблю","Russian","Ya tebya lyublyu."],
["Σ’ αγαπώ (S’agapó)","Greek","S’agapó."],
["Ik hou van jou","Dutch","Ik hou van jou."],
["Jag älskar dig","Swedish","Jag älskar dig."],
["Jeg elsker deg","Norwegian","Jeg elsker deg."],
["Jeg elsker dig","Danish","Jeg elsker dig."],
["Rakastan sinua","Finnish","Rakastan sinua."],
["Kocham cię","Polish","Kocham cię."],
["Miluji tě","Czech","Miluji tě."],
["Ľúbim ťa","Slovak","Ľúbim ťa."],
["Szeretlek","Hungarian","Szeretlek."],
["Volim te","Croatian","Volim te."],
["Volim te","Serbian","Volim te."],
["Те сакам (Te sakam)","Macedonian","Te sakam."],
["Обичам те (Obicham te)","Bulgarian","Obicham te."],
["Te iubesc","Moldovan","Te iubesc."],
["Të dua","Albanian","Të dua."],
["T'estimo","Catalan","T'estimo."],
["Quérote","Galician","Quérote."],
["Maite zaitut","Basque","Maite zaitut."],
["Ik hou van jou","Afrikaans","Ek is lief vir jou."],
["Ek is lief vir jou","Afrikaans","Ek is lief vir jou."],
["Ngiyakuthanda","Zulu","Ngiyakuthanda."],
["Ndiyakuthanda","Xhosa","Ndiyakuthanda."],
["Ninakupenda","Swahili","Ninakupenda."],
["Nakupenda","Swahili","Nakupenda."],
["A hụrụ m gị n’anya","Igbo","A hụrụ m gị n’anya."],
["Mo nifẹ rẹ","Yoruba","Mo nifẹ rẹ."],
["Ina son ka/ki","Hausa","Ina son ka (to a man) / ki (to a woman)."],
["እወድሃለሁ (Ewedihalehu)","Amharic","Ewedihalehu."],
["በጣም እወድሻለሁ","Amharic","A tender way to say it."],
["मी तुझ्यावर प्रेम करतो","Marathi","Mi tuzyavar prem karto."],
["હું તને પ્રેમ કરું છું","Gujarati","Hu tane prem karu chhu."],
["હું તને ચાહું છું","Gujarati","Hu tane chahu chhu."],
["আমি তোমাকে ভালোবাসি","Bengali","Ami tomake bhalobashi."],
["আমি তোমায় ভালোবাসি","Bengali","Ami tomay bhalobashi."],
["நான் உன்னை காதலிக்கிறேன்","Tamil","Naan unnai kaadhalikkiren."],
["నేను నిన్ను ప్రేమిస్తున్నాను","Telugu","Nenu ninnu premistunnanu."],
["ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ","Kannada","Naanu ninnannu preetisuttene."],
["ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു","Malayalam","Njaan ninne snehikkunnu."],
["ମୁଁ ତୁମକୁ ଭଲ ପାଏ","Odia","Mu tumaku bhala pae."],
["মই তোমাক ভাল পাওঁ","Assamese","Moi tumak bhal pao."],
["म तिमीलाई माया गर्छु","Nepali","Ma timilai maya garchhu."],
["म तुझ्यावर प्रेम करतो","Konkani","Mhaka tuzo mog asa (regional usage varies)."],
["Mahal kita","Filipino","Mahal kita."],
["Gihigugma tika","Cebuano","Gihigugma tika."],
["Palangga ta ka","Hiligaynon","Palangga ta ka."],
["Ay-ayaten ka","Ilocano","Ay-ayaten ka."],
["Anh yêu em","Vietnamese","Anh yêu em (typically man to woman)."],
["ខ្ញុំស្រឡាញ់អ្នក","Khmer","Knhom sralanh anak."],
["ຂ້ອຍຮັກເຈົ້າ","Lao","Khoy hak chao."],
["ฉันรักคุณ","Thai","Chan rak khun."],
["Aku cinta kamu","Indonesian","Aku cinta kamu."],
["Saya cinta padamu","Malay","Saya cinta padamu."],
["Saya sayang kamu","Malay","A gentle, affectionate way."],
["Mahal kita","Tagalog","Mahal kita."],
["Nakupenda","Kinyarwanda","Nakupenda."],
["Ndagukunda","Kinyarwanda","Ndagukunda."],
["Ndagukunda","Kirundi","Ndagukunda."],
["Ke a go rata","Sotho","Ke a go rata."],
["Kea u rata","Tswana","Kea u rata."],
["Ndza ku rhandza","Tsonga","Ndza ku rhandza."],
["Ndi a ni funa","Venda","Ndi a ni funa."],
["Ndinokuda","Shona","Ndinokuda."],
["Ndimakukonda","Chichewa","Ndimakukonda."],
["Nalingi yo","Lingala","Nalingi yo."],
["Mi amas vin","Esperanto","Mi amas vin."],
["Te dua","Luxembourgish","Ech hunn dech gär."],
["Jeg elsker deg","Icelandic","Ég elska þig."],
["Tá grá agam duit","Irish","Tá grá agam duit."],
["Tha gaol agam ort","Scottish Gaelic","Tha gaol agam ort."],
["Dw i'n dy garu di","Welsh","Dw i'n dy garu di."],
["Me az kar","Cornish","Me az kar."],
["Ti tengu caru","Corsican","Ti tengu caru."],
["Te quiero","Spanish (Latin America)","Te quiero."],
["Aloha wau iā ʻoe","Hawaiian","Aloha wau iā ʻoe."],
["Aroha ahau ki a koe","Māori","Aroha ahau ki a koe."],
["ʻOku ou ʻofa ʻiate koe","Tongan","ʻOku ou ʻofa ʻiate koe."],
["Au domoni iko","Fijian","Au domoni iko."],
["Ou te alofa ia te oe","Samoan","Ou te alofa ia te oe."],
["Ua here vau ia oe","Tahitian","Ua here vau ia oe."],
["Kuv hlub koj","Hmong","Kuv hlub koj."],
["Kocham cię","Polish","A familiar phrase, a new petal."],
["Ég elska þig","Icelandic","Ég elska þig."],
["Miluji tě","Czech","Miluji tě."],
["Te amo","Latin","Amō tē."],
["我愛你 (Ngóh oi néih)","Cantonese","Ngóh oi néih."],
["愛してます (Aishitemasu)","Japanese (polite)","Aishitemasu."],
["사랑합니다 (Saranghamnida)","Korean (formal)","Saranghamnida."],
["أحبك (Uhibbuki)","Arabic (to a woman)","Uhibbuki."],
["أحبك (Uhibbuka)","Arabic (to a man)","Uhibbuka."],
["S'agapó para polý","Greek","I love you very much."]
];

const petals = document.getElementById('petals');
const current = document.getElementById('current');
const phrase = document.getElementById('phrase');
const language = document.getElementById('language');
const transliteration = document.getElementById('transliteration');
let index = 0;
const petalEls = [];
for (let i=0;i<100;i++){
  const p=document.createElement('div');
  p.className='petal';
  const angle=i*3.6;
  p.style.transform=`translate(-50%,-100%) rotate(${angle}deg) translateY(-18%)`;
  p.style.zIndex=String(100-i);
  petals.appendChild(p);
  petalEls.push(p);
}
function render(){
  const item=languages[index % languages.length];
  current.textContent=String(index+1).padStart(2,'0');
  phrase.style.opacity='0';
  phrase.style.transform='translateY(5px)';
  setTimeout(()=>{
    phrase.textContent=item[0];
    language.textContent=item[1];
    transliteration.textContent=item[2];
    phrase.style.opacity='1';
    phrase.style.transform='translateY(0)';
  },130);
  petalEls.forEach((p,i)=>p.classList.toggle('active',i===index));
}
function go(step){
  index=(index+step+100)%100;
  render();
}
document.getElementById('next').addEventListener('click',()=>go(1));
document.getElementById('prev').addEventListener('click',()=>go(-1));
document.getElementById('reveal').addEventListener('click',()=>go(1));
document.getElementById('sunflower').addEventListener('click',()=>go(1));
document.getElementById('sunflower').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go(1)}});
const sparkleRoot=document.getElementById('sparkles');
for(let i=0;i<24;i++){
 const s=document.createElement('i');s.className='spark';
 s.style.left=(Math.random()*100)+'%';s.style.top=(Math.random()*100)+'%';
 s.style.setProperty('--dur',(7+Math.random()*11)+'s');s.style.animationDelay=(-Math.random()*15)+'s';
 sparkleRoot.appendChild(s);
}
render();
