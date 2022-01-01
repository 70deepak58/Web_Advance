//current lat and long
let lat=0;
let longi=0;

//initial lat and long
let ilat=0;
let ilongi=0;

//state
let state="";

//language selector
var a=[
    "WIKIPEDIA",
    "The English Wikipedia is the English-language edition of the free online encyclopedia Wikipedia. It was founded on 15 January 2001 as Wikipedia's first edition and, as of October 2021, has the most articles of any edition, at 6,399,692. As of October 2021, 11% of articles in all Wikipedias belong to the English-language edition. This share has gradually declined from more than 50 percent in 2003, due to the growth of Wikipedias in other languages. The edition's one-billionth edit was made on 13 January 2021. The English Wikipedia has received praise for its enablement of democratization of knowledge and extent of coverage.",
    "ENCYCLOPEDIA",
    "An encyclopedia (American English), encyclopædia, or encyclopaedia (British English) is a reference work or compendium providing summaries of knowledge either from all branches or from a particular field or discipline.[1] Encyclopedias are divided into articles or entries that are often arranged alphabetically by article name[2] and sometimes by thematic categories. Encyclopedia entries are longer and more detailed than those in most dictionaries.[2] Generally speaking, encyclopedia articles focus on factual information concerning the subject named in the article's title; this is unlike dictionary entries, which focus on linguistic information about words, such as their etymology, meaning, pronunciation, use, and grammatical forms.Encyclopedias have existed for around 2,000 years and have evolved considerably during that time as regards language (written in a major international or a vernacular language), size (few or many volumes), intent (presentation of a global or a limited range of knowledge), cultural perspective (authoritative, ideological, didactic, utilitarian), authorship (qualifications, style), readership (education level, background, interests, capabilities), and the technologies available for their production and distribution (hand-written manuscripts, small or large print runs, Internet). As a valued source of reliable information compiled by experts, printed versions found a prominent place in libraries, schools and other educational institutions.",
    "हिन्दी",
    "Go Up",
    "DARK",
    "LIGHT"
];
var b=[
    "विकिपीडिया",
    "विकिपीडिया सभी विषयों पर प्रामाणिक और उपयोग, परिवर्तन व पुनर्वितरण के लिए स्वतन्त्र ज्ञानकोश बनाने का एक बहुभाषीय प्रकल्प है। यह यथासम्भव निष्पक्ष दृष्टिकोण वाली सूचना प्रसारित करने के लिए कृतसंकल्प है। सर्वप्रथम अंग्रेज़ी विकिपीडिया जनवरी 2001 में आरम्भ किया गया था, और हिन्दी विकिपीडिया का शुभारम्भ जुलाई 2003 में हुआ। सहायता पृष्ठ पर जाएं और प्रयोगस्थल में प्रयोग करके देखें कि आप स्वयं किसी लेख को कैसे परिवर्तित कर सकते हैं।",
    "विश्वज्ञानकोश",
    "विश्वज्ञानकोश, विश्वकोश या ज्ञानकोश (अंग्रेज़ी: Encyclopedia) ऐसी पुस्तक को कहते हैं जिसमें विश्वभर की तरह तरह की जानने लायक बातों को समावेश होता है। विश्वकोश का अर्थ है विश्व के समस्त ज्ञान का भंडार। अत: विश्वकोश वह कृति है जिसमें ज्ञान की सभी शाखाओं का सन्निवेश होता है। इसमें वर्णानुक्रमिक रूप में व्यवस्थित अन्यान्य विषयों पर संक्षिप्त किंतु तथ्यपूर्ण निबंधों का संकलन रहता है[1]। यह संसार के समस्त सिद्धांतों की पाठ्यसामग्री है। विश्वकोश अंग्रेजी शब्द इनसाइक्लोपीडिया का समानार्थी है, जो ग्रीक शब्द इनसाइक्लियॉस (एन = ए सर्किल तथा पीडिया = एजुकेशन) से निर्मित हुआ है। इसका अर्थ शिक्षा की परिधि अर्थात् निर्देश का सामान्य पाठ्यविषय है। इस किस्म की बातें अनंत है, इस लिये किसी भी विश्वज्ञानकोश को कभी 'पूरा हुआ' घोषित नहीं किया जा सकता। विश्वज्ञानकोश में सभी विषयों के लेख हो सकते हैं किन्तु एक विषय वाले विश्वकोश भी होते हैं। विश्वकोष में उपविषय (टापिक), उस भाषा के वर्णक्रम के अनुसार व्यवस्थित किये गये होते हैं[2]।पहले विश्वकोष एक या अनेक खण्डों में पुस्तक के रूप में ही आते थे। कम्प्यूटर के प्रादुर्भाव से अब सीडी आदि के रूप में भी तरह-तरह के विश्वकोष उपलब्ध हैं। अनेक विश्वकोश अन्तरजाल (इंटरनेट) पर 'ऑनलाइन' भी उपलब्ध हैं। ऐतिहासिक दृष्टि से विश्वकोषों का विकास शब्दकोषों (डिकशनरी) से हुआ है। ज्ञान के विकास के साथ ऐसा अनुभव हुआ कि शब्दों का अर्थ एवं उनकी परिभाषा दे देने मात्र से उन विषयों के बारे में पर्याप्त जानकारी नहीं मिलती, तो विश्वकोषों का आविर्भाव हुआ। आज भी किसी विषय को समर्पित विश्वकोष को शब्दकोश [3]भी कहा जाता है; जैसे 'सूक्ष्मजीवविज्ञान का शब्दकोश' आदि।",
    "ENGLISH",
    "ऊपर जाना",
    "काला",
    "सफेद"
];

console.log(typeof(lat));
var x = document.getElementById("demo");

function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else { 
x.innerHTML = "Geolocation is not supported by this browser.";
}
}
getLocation();

function showPosition(position) {
x.innerHTML = "Latitude: " + position.coords.latitude + 
"<br>Longitude: " + position.coords.longitude;
//testing api
lat=position.coords.latitude;
longi=position.coords.longitude;

positioning();
console.log("hyhsyhd");
}


function positioning(){
   // console.log("hyhsyhd");
    if((lat>21.6&&lat<26.3)&&(longi>74.9&&longi<82.5)){
        document.getElementById('loc').innerHTML="Madhya Pradesh";
        console.log("MP");
        state="Madhya Pradesh";
        document.getElementById("l0").innerHTML=b[0];
        document.getElementById("l1").innerHTML=b[1];
        document.getElementById("l2").innerHTML=b[2];
        document.getElementById("l3").innerHTML=b[3];
        }
        
        if((lat>21.25&&lat<27.13)&&(longi>85.5&&longi<89.5)){
        document.getElementById('loc').innerHTML="Bengal";
        console.log("Bengal");
        state="Bengal";
        document.getElementById("l0").innerHTML=a[0];
        document.getElementById("l1").innerHTML=a[1];
        document.getElementById("l2").innerHTML=a[2];
        document.getElementById("l3").innerHTML=a[3];
        }

        if((lat>24.2&&lat<27.3)&&(longi>83.19&&longi<8.17)){
            document.getElementById('loc').innerHTML="Bihar";
            console.log("Bihar");
            state="Bihar";
            document.getElementById("l0").innerHTML=b[0];
        document.getElementById("l1").innerHTML=b[1];
        document.getElementById("l2").innerHTML=b[2];
        document.getElementById("l3").innerHTML=b[3];
        //document.getElementById("l4").innerHTML=a[4];
            }
}

function take_loc(){
 
    ilat=document.getElementById('latit').value;
    ilongi=document.getElementById('logit').value;
    console.log("taken location successfully");
    console.log(ilat,ilongi);
}