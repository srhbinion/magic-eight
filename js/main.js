$('.magicE').on('click', function() {
var answer = ["Yes.", "No.", "Ask me later.", "Outlook not so good.", "Don't leave your house today, you don't want to know.", "Can I tell you later?", "Can you repeat that I didn't hear you.", "No (En Espanol)."];
var randomValue = answer[Math.floor(answer.length * Math.random())];
$('#wisdom').html(randomValue);   
});