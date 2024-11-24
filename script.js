// const exerciseData = {
//     subject: {
//         title: "ڕاهێنانی دۆزینەوەی بکەر",
//         description: "لەم ڕستانەدا بکەر دەربهێنە:",
//         sentences: [
//             {
//                 text: "١- مەلەوانەکە لە ڕووبارەکە پەڕییەوە.",
//                 answer: "مەلەوانەکە",
//                 explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
//             },
//             {
//                 text: "٢- ئازاد لە سلێمانی دەژی.",
//                 answer: "ئازاد",
//                 explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
//             },
//             {
//                 text: "٣- هاژە بۆ خانەقین دەچێت.",
//                 answer: "هاژە",
//                 explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
//             },
//             {
//                 text: "٤- پیرۆت زەوییەکەی کێڵا.",
//                 answer: "پیرۆت",
//                 explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
//             },
//             {
//                 text: "٥- دانا هاریکاری باوکی دەکات.",
//                 answer: "دانا",
//                 explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
//             },
//             {
//                 text: "٦- ڕەنجبەر کار دەکات.",
//                 answer: "ڕەنجبەر",
//                 explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
//             }
//         ]
//     },
//     verb: {
//         title: "ڕاهێنانی دۆزینەوەی کار",
//         description: "لەم ڕستانەدا کار دەربهێنە:",
//         sentences: [
//             {
//                 text: "١- ئافرەتەکە دەسکە گوڵێکی کڕی.",
//                 answer: "کڕی",
//                 explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
//             },
//             {
//                 text: "٢- پۆلیسەکە دزەکەی گرت.",
//                 answer: "گرت",
//                 explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
//             },
//             {
//                 text: "٣- ئاسنگەر داس دروست دەکات.",
//                 answer: "دروست دەکات",
//                 explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
//             },
//             {
//                 text: "٤- تاڤگە وانەکانی خوێند.",
//                 answer: "خوێند",
//                 explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
//             },
//             {
//                 text: "٥- من ڕێزانم دیت.",
//                 answer: "دیت",
//                 explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
//             },
//             {
//                 text: "٦- نانەوا هەویر دەشێلێت.",
//                 answer: "دەشێلێت",
//                 explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
//             }
//         ]
//     },
//     homework: {
//         title: "ئەرکی ماڵەوە",
//         description: "لەم دە ڕستەیەدا بکەر و کار دەربهێنە:",
//         sentences: [
//             "١- قوتابییەکان بە وردی گوێ لە وانەکە دەگرن.",
//             "٢- کێ ئەم وێنە جوانەی کێشاوە؟",
//             "٣- باخەوانەکە دارەکانی ئاو دەدات.",
//             "٤- چۆن ئەم کارە جوانەت ئەنجام دا!",
//             "٥- خوشکەکەم بە سەرکەوتوویی دەرچوو.",
//             "٦- بۆچی درەنگ هاتی بۆ پۆل؟",
//             "٧- پزیشکەکە نەخۆشەکەی چارەسەر کرد.",
//             "٨- چەند جوان دەخوێنیت!",
//             "٩- مامۆستاکە پرسیارەکانی وەڵام دایەوە.",
//             "١٠- کەی دەگەڕێیتەوە بۆ ماڵەوە؟"
//         ]
//     }
// };

// // باقی کۆدەکە وەک خۆی دەمێنێتەوە

const exerciseData = {
    subject: {
        title: "ڕاهێنانی دۆزینەوەی بکەر",
        sentences: [
            {
                text: "١- مەلەوانەکە لە ڕووبارەکە پەڕییەوە.",
                answer: "مەلەوانەکە"
            },
            {
                text: "٢- ئازاد لە سلێمانی دەژی.",
                answer: "ئازاد"
            },
            {
                text: "٣- هاژە بۆ خانەقین دەچێت.",
                answer: "هاژە"
            }
        ]
    },
    verb: {
        title: "ڕاهێنانی دۆزینەوەی کار",
        sentences: [
            {
                text: "١- ئافرەتەکە دەسکە گوڵێکی کڕی.",
                answer: "کڕی"
            },
            {
                text: "٢- پۆلیسەکە دزەکەی گرت.",
                answer: "گرت"
            },
            {
                text: "٣- ئاسنگەر داس دروست دەکات.",
                answer: "دروست دەکات"
            }
        ]
    },
    homework: {
        title: "ئەرکی ماڵەوە",
        sentences: [
            "١- قوتابییەکان بە وردی گوێ لە وانەکە دەگرن.",
            "٢- کێ ئەم وێنە جوانەی کێشاوە؟",
            "٣- باخەوانەکە دارەکانی ئاو دەدات."
        ]
    }
};

let currentExercise = '';
let currentIndex = 0;

function startExercise(type) {
    currentExercise = type;
    currentIndex = 0;
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('exercise-view').style.display = 'block';
    updateUI();
}

function showAnswer() {
    document.getElementById('answer-container').style.display = 'block';
}

function nextSentence() {
    currentIndex = (currentIndex + 1) % exerciseData[currentExercise].sentences.length;
    updateUI();
}

function goBack() {
    document.getElementById('main-menu').style.display = 'block';
    document.getElementById('exercise-view').style.display = 'none';
    document.getElementById('answer-container').style.display = 'none';
}

function updateUI() {
    const exercise = exerciseData[currentExercise];
    document.getElementById('exercise-title').textContent = exercise.title;
    
    if (currentExercise === 'homework') {
        document.getElementById('sentence-container').textContent = exercise.sentences[currentIndex];
        document.getElementById('answer-container').innerHTML = 'بکەر و کار بدۆزەرەوە و لە دەفتەرەکەت بینووسە';
    } else {
        const sentence = exercise.sentences[currentIndex];
        document.getElementById('sentence-container').textContent = sentence.text;
        document.getElementById('answer-container').innerHTML = `
            <span class="highlight">${sentence.answer}</span>
        `;
    }
    document.getElementById('answer-container').style.display = 'none';
}