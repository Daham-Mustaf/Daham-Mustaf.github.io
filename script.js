const exercises = {
    subject: {
        title: "ڕاهێنانی یەکەم - دۆزینەوەی بکەر",
        description: "لەم ڕستانە بکەر دەربهێنە:",
        sentences: [
            {
                text: "ئافرەتەکە دەسکە گوڵێکی کڕی",
                subject: "ئافرەتەکە",
                explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
            },
            {
                text: "پۆلیسەکە دزەکەی گرت",
                subject: "پۆلیسەکە",
                explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
            },
            {
                text: "ئاسنگەر داس دروست دەکات",
                subject: "ئاسنگەر",
                explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
            },
            {
                text: "تاڤگە وانەکانی خوێند",
                subject: "تاڤگە",
                explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
            },
            {
                text: "من ڕێزانم دیت",
                subject: "من",
                explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
            },
            {
                text: "نانەوا هەویر دەشێلێت",
                subject: "نانەوا",
                explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
            }
        ]
    },
    verb: {
        title: "ڕاهێنانی دووەم - دۆزینەوەی کار",
        description: "لەم ڕستانە کار دەربهێنە:",
        sentences: [
            {
                text: "ئافرەتەکە دەسکە گوڵێکی کڕی",
                verb: "کڕی",
                explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
            },
            {
                text: "پۆلیسەکە دزەکەی گرت",
                verb: "گرت",
                explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
            },
            {
                text: "ئاسنگەر داس دروست دەکات",
                verb: "دروست دەکات",
                explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
            },
            {
                text: "تاڤگە وانەکانی خوێند",
                verb: "خوێند",
                explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
            },
            {
                text: "من ڕێزانم دیت",
                verb: "دیت",
                explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
            },
            {
                text: "نانەوا هەویر دەشێلێت",
                verb: "دەشێلێت",
                explanation: "کار ئەو وشەیەیە کە کردارەکە دەردەخات"
            }
        ]
    }
};

let currentExercise = 'subject'; // یان 'verb'
let currentIndex = 0;

function showAnswer() {
    const answer = document.getElementById('answer');
    answer.style.display = 'block';
}

function nextSentence() {
    currentIndex = (currentIndex + 1) % exercises[currentExercise].sentences.length;
    updateUI();
}

function switchExercise(type) {
    currentExercise = type;
    currentIndex = 0;
    updateUI();
}

function updateUI() {
    const exercise = exercises[currentExercise];
    const sentence = exercise.sentences[currentIndex];
    
    // Update title and description
    document.getElementById('exercise-title').textContent = exercise.title;
    document.getElementById('exercise-description').textContent = exercise.description;
    
    // Update sentence
    document.getElementById('sentence').textContent = sentence.text;
    
    // Update answer
    const highlightedWord = currentExercise === 'subject' ? sentence.subject : sentence.verb;
    const answerHTML = `
        <div class="sentence">
            ${highlightAnswer(sentence.text, highlightedWord)}
        </div>
        <div class="explanation">
            ${sentence.explanation}
        </div>
    `;
    
    const answer = document.getElementById('answer');
    answer.innerHTML = answerHTML;
    answer.style.display = 'none';
}

function highlightAnswer(text, word) {
    return text.replace(word, `<span class="highlight">${word}</span>`);
}

// Initialize UI when page loads
window.onload = updateUI;