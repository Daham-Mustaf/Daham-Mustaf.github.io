const sentences = [
    {
        text: "مەلەوانەکە لە ڕووبارەکە پەڕییوە",
        subject: "مەلەوانەکە",
        explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
    },
    {
        text: "ئازاد لە سڵێمانی دەژیت",
        subject: "ئازاد",
        explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
    },
    {
        text: "مامۆستا وانەکە دەڵێتەوە",
        subject: "مامۆستا",
        explanation: "بکەر ئەو کەسەیە کە کردارەکە ئەنجام دەدات"
    }
];

let currentIndex = 0;

function showAnswer() {
    const answer = document.getElementById('answer');
    answer.style.display = 'block';
}

function nextSentence() {
    currentIndex = (currentIndex + 1) % sentences.length;
    const sentence = sentences[currentIndex];
    
    // Update sentence
    document.getElementById('sentence').textContent = sentence.text;
    
    // Update answer
    const answerHTML = `
        <div class="sentence">
            <span class="highlight">${sentence.subject}</span>${sentence.text.substring(sentence.subject.length)}
        </div>
        <div class="explanation">
            ${sentence.explanation}
        </div>
    `;
    
    const answer = document.getElementById('answer');
    answer.innerHTML = answerHTML;
    answer.style.display = 'none';
}