var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

const cellDescription = {
  1: {
    message: "The display case is broken, the ruby missing, shattered pieces of glass are scattered on the floor."
  },
  2: {
    message: "An ink bottle on the desk is upside down, ink cat paw prints are visible here and there."
  },

  3: {
    message: "The carpet has been moved, black fibers are on it."
  },

  4: {
    message: "Many books are scattered on the floor, one of them with the title 'Ancient gems of the world' misses a page."
  },

  5: {
    message: "A small round table is situated near the study's bay window. There's a glass on it that smells of whisky."
  },

  6: {
    message: "Black ink paw prints and a blood stain are on the window sill."
  },

  7: {
    message: "A big mantel clock is on the fireplace, it strikes one in the morning."
  },
  8: {
    message: "A red velvet ottoman is on the left of the desk, it's covered in rose petals."
  },
  9: {
    message: "Lady Ashton has green eyes and blond hair, thin and tall she wears a black crinoline dress with a rip in the hem. She is 20 years old. She fidgets with her hands all the time",
    interrogation: "Agatha asks Lady Ashton about the rip on her dress, she looks very nervous and says that while beeing in the study she tripped on the floor carpet and the dress got caught under her feet tearing the hem. Some books from the  desk fell on the floor. There were cat paw prints on the desk. She ringed the bell for a waitress to help her, who arrived and said she needed to follow her in the sewing room. So she leaved the study with the waitress.",
    culprit: "Miss Ashton is not the culprit, she is  very clumsy, but she is no thief."
  },
  10: {
    message: "Dr Granger wears a black evening suit. He is not very tall, but with a kind smile. He has a red rose tucked  on his jacket.",
    interrogation: "Agatha asks Dr Granger if he was in the study and where he got  the rose on his jacket that  looks exactly like the petals on the ottoman. Agatha notices that at this question Dr Granger touches the rose on his jacket and sighs. He tells that he was having a rendez-vous with Lady Sullivan . A rose fell on the ottoman from her hairdo, missing some petals. He picked up the rose and tucked it on his jacket. There were paw prints on the desk, and books scattered on the floor but he didn't saw the cat. He and the woman leaved the study at a distance of five minutes from each other.",
    culprit: "Dr Granger lives a forbidden love, he is a thief, but a romantic one, he stole Lady Sullivan heart."
  },

  11: {
    message: "Miss Lavander has big dreamy eyes and an intelligent expression. She wears a light green dress stained by black ink cat paw prints, she is in her 30s.",
    interrogation: "Agatha asks Miss Lavander about the cat paw prints on her dress, she says that she was searching for a book in the study, that Lord Snob talked her about and that that devilish creature of Faust jumped on her, dropping the ink bottle and staining her dress, scarying her to death,  so she leaved the study with no book whatsoever. There were no books on the floor. The ruby still intact.",
    culprit: "Miss  Lavander is an avid reader,  she loves books more then rubies,  she   certainly is not a thief."
  },
  12: {
    message: "Mr Brimbutton is a medium height man in his 40s, he wears a satin night blue evening suit, he fidgets with a big golden pocket watch in his hand",
    interrogation: "Agatha asks Mr Brimbutton if he was in the study. He tells Agatha that his clock stopped working, so he went in the study to look at the the mantel clock to know the hour. He sustains that there were no books on the floor and that he saw the cat licking at its fur, sitting on the window sill, the ink and the ruby still intact. He looked at the mantel clock, charged his clock and leaved the room.",
    culprit: "You catched him! Mr Brimbutton is the thief! He was in the study after everyone except Lord Sullivan! He stole the ruby. A lie was his mistake. Faust the cat is a Sphinx, it has no fur. So Mr Brimbutton couldn't possibly have seen it licking its fur!  The ruby was hidden in his clock! Agatha congrats you. You are a good observer! You catched the thief!"
  },

  13: {
    message: "Lady Sullivan is a young woman in her 20s, with sad blue eyes and an hairdo with real red roses. She is merried with Lord Sullivan",
    interrogation: "Agatha asks Lady Sullivan if she was in the study. Lady Sullivan looks very nervous  and touches her hair repeatedly. A spot in her hairdo misses a rose. She sighs then takes a seat on the ottoman . She was in the study to see a man other than her husband. There were books on the floor, ink paw prints on the desk and the cat on the window sill. The ruby was in its display case. She leaved the study before the man.",
    culprit: "Lady Sullivan is a woman in love. Love is the culprit here. She isn't a  ruby's thief!"
  },

  14: {
    message: "Lord Sullivan is a man of 70 years, dressed with an old damask gold evening suit. He has a stern angry look.",
    interrogation: "Agatha asks Lord Sullivan if he was in the study and why. Red in the face for the anger he says he suspcets his wife to have an affair and wanted to caught her in the act of betraying him to have proof. But arriving in the study he saw everything was a mess,  books everywhere, the ruby gone. He ringed the bell, but seeing no one coming he leaved the study in search of Lord Snob.",
    culprit: "Lord Sullivan is an angry man, but not a thief, the ruby was already gone when he got in the study."
  },
  15: {
    message: "Lord Stewart Grissom is a blond tall man, old school mate of Lord Snob from Eton. He has dark curious eyes and a piece of paper peeps from the pocket of his dark brown evening suit.",
    interrogation: "Agatha asks Lord Grissom if he was in the study. Lord Grissom tells Agatha that he suspected Snob was lying about the ruby. So he entered the study  to look at the ruby closely, books  were scattered on the floor and cat paw prints were on the desk, one opened book caught his attention. A page in the book revealed that the ruby was a false, finally his occasion of unmasking Lord Snob was in his hand!",
    culprit: "Lord Grissom has the only fault of hating Lord Snob, he found that the ruby was a false, he certainly didn't steal it."
  },

  16: {
    message: "Mr Strand is an old general, he wears a military evening dress. He has a bandage on his hand",
    interrogation: "Agatha asks Mr. Strand about the wound on his hand and why he was in the study. He tells that he came in the study to have a whisky and sit peacefully for a while. But entering the room he saw a mess. Books scattered on the floor, ink paw prints and rose petals everywhere. He then called for servants to come settle everything ringing the bell near the window, but he thinks the bell broke in that moment because it made a disturbing noise at which the cat, scared, scratched  him on the hand and run out of the room. Blood dripped on the window sill. He leaved the study to search for someone to bandage the wound.",
    culprit: "Mr Strand loves peace and good whisky, but definitively not a messy room. And surely not feisty cats. He is not the thief! "
  },
  17: {
    message: "Lord Benjamin Snob, owner of coral Mansion and party host. He has heavy eyelids and a pointy nose. Tall and elegant, he wears a black silk suit.",
    interrogation: "Agatha asks Lord Snob if he was in the study during the party. He tells her that  he was in the study at the beginning of the party, he leaved the study on the arrival of the guests. The study was in perfect order when he leaved. Agatha thinks he looks incredibly calm for a man who has been robbed of a gem worth 3 millions dollars.",
    culprit: "Lord Snob is a fraude. The ruby was a false, and the theft will guarantee him 3 million dollars of ensurance, or maybe not... He is not the thief!"
  },

  18: {
    message: "Lady Snob, small in height, wears a pink robe and white silk shoes, she loves to party",
    interrogation: "Agatha asks Lady Snob if she was in the study. Lady Snobs tells her that she  was not in the study,  she can't tolerate the sight of Faust the cat. She says she is not preoccupied for the gem, it in ensured for 3 million dollars in case of theft. But she is very upset to think that a thief is in her house.",
    culprit: "Lady Snob, didn't stole the ruby, she only wants to party!"
  },

  19: {
    message: "The butler wears a black suit. He is bald, tall and thin like an anchovy.",
    interrogation: "Agatha asks the butler if he was in the study. The butler tells her he welcomed the guests and controlled that thet servants did their work. He served whisky only to three people at the party:  Miss Laure Lavander , Mr BrimButton and Mr Strand. He hates the cook and thinks she can be the thief. No one who can cook a porridge so poorly done can be other than a criminal. He wasn't in the study he was too occupied.",
    culprit: "The butler hate the cook and her porridge, but he is a loyal servant. He is not the thief!"
  },

  20: {
    message: "The waitress, brunette petite and very pretty. She wears a waitress black uniform.",
    interrogation: "Agatha asks the waitress if she was in the study. The waitress tells her she was serving at the party all the time, except when a call came from the study. She entered the study and found Lady Ashton with a ripped hem on her dress. She accompanied her in the sewing room. There were books on the pavement and ink paw prints everywhere. She tought that stupid cat should have done the mess. She leaved the room with Lady Ashton.",
    culprit: "The waitress is a very busy waitress, she really has no time for stealing things. She is not the thief."
  },

  21: {
    message: "The cook, a big rounded woman in her 50, wears a white cotton dress and a big apron with full pockets.",
    interrogation: "Agatha asks the cook if she was in the study during the party. The cook huffs and tells her she is not enabled to enter the study. She only saw the boy in the kitchen stealing one of her sweet and leave. Isn't he an adorable rascal? She suspects the butler to be the thief, no one with such scarce appetite for porridge can be other than a thief.",
    culprit: "The cook loves cooking more then rubies. She is not the culprit. But she can cook his formidable porridge for you if you want! "
  },

  22: {
    message: "Faust, Lord Snob's sphinx cat. It always stays in Lord Snob study.",
    interrogation: "Meowwwww!",
    culprit: "Meooww Meoowww Purrrrr!!!"
  },

  23: {
    message: "The stableman, good-looking man in his 30, deep blue eyes and catchy smile. He wears a brown working suits.",
    interrogation: "Agatha asks the stableman if he was in the study during the party. He tells her he was in the stable to look after the horses. He entered the mansion in search of the waitress, but she saw her with a lady in the sewing room, so he leaved. He suspects that the boy could be the culprit, he has swollen pockets with apples from orchards or sweets from the kitchen all the time. He is a little scoundrel with a knack for stealing things.",
    culprit: "The stableman is too busy trying seducing the waitress, he didn't stole the ruby!"
  },
  24: {
    message: "The boy. Big smile and smart brown eyes, blue jacket and pants and shoes too big for him.",
    interrogation: "Agatha asks the boy if he was in the study that night. He tells her he was never in the study. He was in the kitchen to ask the cook if she needed help, but never entered the study. He thinks that the stableman could be the culprit, he is always too eager to enter the mansion for this reason ot that.",
    culprit: "The boy likes the cook's sweets more then gems. He didn't stole the ruby!"
  }
};

const initialTableCell = document.querySelectorAll(".mistery-button");
initialTableCell.forEach((v, i) => {
  v.addEventListener("click", showDescription);
});

function showDescription(e) {
  let tableIndex = e.target.getAttribute("data-index");

  tableDescription(tableIndex);
}

const description = document.getElementById("description");

function tableDescription(index) {
  description.textContent = cellDescription[index].message;
}

function showInterrogation(e) {
  let tableData = e.target.getAttribute("data-index");
  description.textContent = cellDescription[tableData].interrogation;
}

const mansionInhabitants = document.querySelector(".interrogate-inhabitants");

mansionInhabitants.addEventListener("click", interrogateInhabitants);

const partyGoers = document.querySelector(".interrogate-goers");
partyGoers.addEventListener("click", interrogatePartyGoers);

const misteryButtons = document.querySelectorAll(".mistery-button");
const inhabitants = document.querySelectorAll(".inhabitants");
const partyPeople = document.querySelectorAll(".party-goers");

function interrogateInhabitants() {
  misteryButtons.forEach(v => {
    v.removeEventListener("click", showDescription);
    v.style.opacity = "0";
  });

  partyPeople.forEach(v => {
    v.removeEventListener("click", showInterrogation);
  });
  inhabitants.forEach(v => {
    v.addEventListener("click", showInterrogation);
    v.style.opacity = "1";
  });

  description.textContent = "Click a name to let Agatha interrogate him/her";
}

function interrogatePartyGoers() {
  misteryButtons.forEach(v => {
    v.removeEventListener("click", showDescription);
    v.style.opacity = "0";
  });

  inhabitants.forEach(v => {
    v.removeEventListener("click", showInterrogation);
    v.style.opacity = "0";
  });

  partyPeople.forEach(v => {
    v.addEventListener("click", showInterrogation);
    v.style.opacity = "1";
  });
  description.textContent = "Click a name to let Agatha interrogate him/her";
}

const resetButton = document.querySelector(".reset");

resetButton.addEventListener("click", resetGame);

function resetGame() {
  window.location.href = window.location.href;
}

document.querySelector(".culprit").addEventListener("click", chooseCulprit);

function chooseCulprit() {
  misteryButtons.forEach(v => {
    v.removeEventListener("click", showDescription);
    v.style.opacity = "0";
  });

  /*              partyPeople.forEach(v => {
                  v.removeEventListener("click", showInterrogation);
                  v.addEventListener("click", showCulprit);
                  v.style.opacity = "1";
                });

                inhabitants.forEach(v => {
                  v.removeEventListener("click", showInterrogation);
                  v.addEventListener("click", showCulprit);
                  v.style.opacity = "1";
                });
              }

              function showCulprit(e) {
                let tableData = e.target.getAttribute("data-index");

                if (tableData === "12") {
                  const ruby = document.createElement("img");
                  ruby.src = "https://s19.postimg.cc/jtzq4yhgz/ruby_small.png";

                  misteryButtons.forEach(v => {
                    v.style.opacity = "0";
                  });

                  inhabitants.forEach(v => {
                    v.removeEventListener("click", showCulprit);
                  });

                  partyPeople.forEach(v => {
                    v.removeEventListener("click", showCulprit);
                  });
                  document.querySelector(".mistery").style.opacity = 1;
                  document.querySelector(".mistery").textContent = "";
                  document.querySelector(".mistery").appendChild(ruby);
                }

                description.textContent = cellDescription[tableData].culprit;
              }
