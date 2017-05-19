var horoscopes = [
  {
    name: "libra", 
    text: "Today you may be anxious to spend time with your family, Libra, but there could be some chores you need to do first. This could stress you out quite a bit if you let it. Roll up your sleeves and handle whatever needs to be done and then hightail it back to your hEarth. Relax and enjoy the company of your loved ones!",
    picture: "img/libra.jpg"
  },
   {
    name: "taurus", 
    picture: "img/taurus.jpg",
    text: "Today you may try to contact several people, Taurus, none of whom may be available. You might particularly want to reach a female friend or relative who lives far away. This could prove frustrating, as you have some interesting news for her. Keep trying. You will eventually manage to connect, and she will be glad to hear from you. She might even invite you to visit!"
  },
   {
    name: "gemini", 
    picture: "img/gemini.jpg",
    text: "Whether or not you should make a specific expenditure could cause some tension between you and a partner, Gemini. You may think that it isn't feasible now, while your friend is determined to go for it. This isn't the day to try to reach an agreement in this matter. Neither of you is likely to give in. Wait a couple days until you're both a bit less tense."
  },
   {
    name: "cancer", 
    picture: "img/cancer.jpg",
    text:"A friend may be throwing a party and you might be expected to attend. You've probably had a stressful day and really don't feel up to it. Your friend may try to induce you to come by making you feel guilty. Don't fall into that trap. Go only if you feel that the value of the occasion overrides your need to rest. Your friend will forgive you if you say no."
  },
   {
    name: "leo", 
    picture: "img/leo.jpg",
    text:"Today you might receive some uncomfortable intuitive signals from one or more of your friends, Leo. Perhaps someone doesn't feel well but came out to play anyway. Sensing the tension in others could save you some grief, as people may be stressed and likely to lash out over nothing. It's best to focus on solitary pursuits if you can." 
  },
   {
    name: "virgo", 
    picture: "img/virgo.jpg",
    text:"Today you may attain a goal you've been hoping to reach for a long time, Virgo. Oddly enough, friends, family, and even your significant other may not seem as happy as you expected. They've probably suffered too many frustrations recently, and your success only reminds them of this. Give them some time to settle their own affairs and they will congratulate you. They're only human."
  },
   {
    name: "scorpio", 
    picture: "img/scorpio.jpg", 
    text:" Today it might be more difficult than usual for you to deal with words, Scorpio. Someone might lend you a book on a rather obscure subject that you can't understand. In fact, you might find the book - or anything else you try to read - boring! You don't want to hurt your friend's feelings. Put the book aside and try again later. The words should be clearer to you then."
  }, 
  {
    name: "sagittarius", 
    picture: "img/sagittarius.jpg",
    text:" Today it might be more difficult than usual for you to deal with words, Scorpio. Someone might lend you a book on a rather obscure subject that you can't understand. In fact, you might find the book - or anything else you try to read - boring! You don't want to hurt your friend's feelings. Put the book aside and try again later. The words should be clearer to you then."  
  },
  {
    name: "capricorn", 
    picture: "img/capricorn.jpg",
    text:"Today you may see that nearly every couple you know is quarreling, Capricorn. You may have a few differences with a current or potential partner, but this is nothing to worry about. You're tense and edgy because of outside pressure, so your fuse might be a bit shorter than usual. Try to stretch your patience a little further, just for today. All should be well by tomorrow." 
  },
  {
    name: "aquarius", 
    picture: "img/aquarius.jpg",
    text:" Today you may be in a very stressful atmosphere. Your entourage is likely to be tense and anxious, and you're no exception. You may need to stay in the environment until you've accomplished your objectives. You will probably want to spend your evening at home in front of the TV, doing and thinking absolutely nothing. Relax!"
  },
  {
    name: "pisces", 
    picture: "img/pisces.jpg",
    text:"You and a current or potential partner may disagree on whether to spend some time together alone or go out with friends, Pisces. If you've both had a rough day, you're likely to be rather tense and apt to snap at each other. A compromise may be the best answer. Spend an hour or two with your friends and then come home and relax. That way, everyone's happy."
  },
  {
    name: "aries", 
    picture: "img/aries.jpg",
    text:"A relaxing evening at home may be just what you need, Aries, but a colleague might ask you to attend a business-related event. You may have had a stressful few days. Such a party may be the last thing you want to do. Don't be afraid to say no. There will be plenty of colleagues there. At the most, put in a quick appearance and then leave. Right now you need rest more than contacts." 
  },
]

function getInfo() {
  var input = document.getElementById("input").value;
  var name = document.getElementById("name");
  var description = document.getElementById("description");
  console.log(input.value)
  
  for(var i = 0; i < horoscopes.length; i++) {
    if(input == horoscopes[i].name) {
      name.textContent = horoscopes[i].name;
      picture.src = horoscopes[i].picture;
      description.textContent = horoscopes[i].text;
    } 

  }

}



