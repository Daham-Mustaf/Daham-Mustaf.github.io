const exerciseData = {
    subject: {
        title: "ڕاهێنانی دۆزینەوەی بکەر",
        description: "لەم ڕستانەدا بکەر دەربهێنە:",
        sentences: [
            {
                text: "مەلەوانەکە لە ڕووبارەکە پەڕییەوە",
                answer: "مەلەوانەکە",
                explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
            },
            {
                text: "ئازاد لە سلێمانی دەژی",
                answer: "ئازاد",
                explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
            },
            {
                text: "هاژە بۆ خانەقین دەچێت",
                answer: "هاژە",
                explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
            },
            {
                text: "پیرۆت زەوییەکەی کێڵا",
                answer: "پیرۆت",
                explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
            },
            {
                text: "دانا هاریکاری باوکی دەکات",
                answer: "دانا",
                explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
            },
            {
                text: "ڕەنجبەر کار دەکات",
                answer: "ڕەنجبەر",
                explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
            }
        ]
    },
    verb: {
        title: "ڕاهێنانی دۆزینەوەی کار",
        description: "لەم ڕستانەدا کار دەربهێنە:",
        sentences: [
            {
                text: "ئافرەتەکە دەسکە گوڵێکی کڕی",
                answer: "کڕی",
                explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
            },
            {
                text: "پۆلیسەکە دزەکەی گرت",
                answer: "گرت",
                explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
            },
            {
                text: "ئاسنگەر داس دروست دەکات",
                answer: "دروست دەکات",
                explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
            },
            {
                text: "تاڤگە وانەکانی خوێند",
                answer: "خوێند",
                explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
            },
            {
                text: "من ڕێزانم دیت",
                answer: "دیت",
                explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
            },
            {
                text: "نانەوا هەویر دەشێلێت",
                answer: "دەشێلێت",
                explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
            }
        ]
    },
    homework: {
        title: "ئەرکی ماڵەوە",
        description: "لەم دە ڕستەیەدا بکەر و کار دەربهێنە:",
        sentences: [
            "قوتابییەکان بە وردی گوێ لە وانەکە دەگرن",
            "کتێبخانەکە هەموو ڕۆژێک کراوەیە",
            "باخەوانەکە دارەکانی ئاو دەدات",
            "هونەرمەندەکە تابلۆیەکی جوانی کێشا",
            "خوشکەکەم بە سەرکەوتوویی دەرچوو",
            "دایکم چیرۆکێکی خۆشی بۆ گێڕامەوە",
            "پزیشکەکە نەخۆشەکەی چارەسەر کرد",
            "کچەکە بە خۆشحاڵییەوە پێدەکەنی",
            "مامۆستاکە پرسیارەکانی وەڵام دایەوە",
            "کوڕەکە یارمەتی هاوڕێکەی دەدات"
        ]
    }
};

let currentExercise = null;
let currentIndex = 0;

function startExercise(type) {
    currentExercise = type;
    currentIndex = 0;
    document.querySelector('.container').style.display = 'none';
    document.getElementById('exercise-container').style.display = 'block';
    updateUI();
}

function showAnswer() {
    const answer = document.getElementById('answer');
    answer.style.display = 'block';
}

function nextSentence() {
    if (currentExercise === 'homework') {
        currentIndex = (currentIndex + 1) % exerciseData[currentExercise].sentences.length;
    } else {
        currentIndex = (currentIndex + 1) % exerciseData[currentExercise].sentences.length;
    }
    updateUI();
}

function goBack() {
    document.querySelector('.container').style.display = 'grid';
    document.getElementById('exercise-container').style.display = 'none';
    currentExercise = null;
    currentIndex = 0;
}

function updateUI() {
    const exercise = exerciseData[currentExercise];
    
    document.getElementById('exercise-title').textContent = exercise.title;
    document.getElementById('exercise-description').textContent = exercise.description;
    
    if (currentExercise === 'homework') {
        document.getElementById('sentence').textContent = exercise.sentences[currentIndex];
        document.getElementById('answer').innerHTML = `
            <div class="sentence">
                بکەر و کار بدۆزەرەوە و لە دەفتەرەکەت بینووسە
            </div>
        `;
    } else {
        const sentence = exercise.sentences[currentIndex];
        document.getElementById('sentence').textContent = sentence.text;
        document.getElementById('answer').innerHTML = `
            <div class="sentence">
                <span class="highlight">${sentence.answer}</span>
            </div>
            <div class="explanation">
                ${sentence.explanation}
            </div>
        `;
    }
    
    document.getElementById('answer').style.display = 'none';
}