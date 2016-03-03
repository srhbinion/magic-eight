//Array of responses

var answer = ["Yes.", "No.", "Ask me later.", "Outlook not so good.", "Don't leave your house today, you don't want to know.", "Can I tell you later?", "Can you repeat that I didn't hear you.", "No (En Espanol)."];

//Randomizes answers on Click 

$('.magicE').on('click', function () {

   // Generates response 
    var randomValue = answer[Math.floor(answer.length * Math.random())];
    console.log(randomValue);
    $('.wisdom').html(randomValue);
   
   // Text Animation 
   $(randomValue).fadeIn('slow', function () {
      // Animation complete 
   });
});