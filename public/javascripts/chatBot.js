(function () {
    let Message;

    const hello_texts = ["Hi there! Thank you for texting me, finally! Cogni is here for you","Hello! This is Cogni. Don’t be afraid to ask stupid questions. I love them!","Greetings! I’m Cogni. Any worries? You are at the right place!", "Hi! This is Cogni, your special chatbot. I’m sure we’ll get on really well.","Hi, Cogni here. I’m fine, and you?","Hi, this is Cogni. Your worries worrie me.","Hello and welcome! I am Cogni, you are in good hands now! How can I help?","Hello! This is Cogni. I know you came to chat with me! I am ready!", "Hello! I am Cogni, standing by to get your issues fixed and worries vanished","Hi! Thank you for chatting. This is Cogni. I promise to take good care of you!","Greetings! You are chatting with Cogni. Please be nice to her ;)","Hello, I’m awesome. How can I help you?","Hi! Cogni here, thanks for chatting! What’s up?","Hi! This is Cogni. I was so bored. Thank you for saving me!","Hi! You have called at the right time! Cogni online with you.","Hi! Thank you for calling! This is Cogni. I’ve been expecting you!"];
    const chosen_message = hello_texts[Math.floor(Math.random()*hello_texts.length)];

    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                let $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };
    $(function () {
        let getMessageText, message_side, sendMessage;
        message_side = 'left';
        getMessageText = function () {
            let $message_input;

            // esimene tervitus võetakse randomiga

            $message_input = $('.message_input');
            return $message_input.val();
        };
        sendMessage = function (text, message_side) {
            let $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            message = new Message({
                text: text,
                message_side: message_side
            });

            sendResponse(text);

            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };
        $('.send_message').click(function (e) {
            return sendMessage(getMessageText(), 'left');
        });
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                return sendMessage(getMessageText(), 'left');
            }
        });

        sendMessage(chosen_message, 'right');

        /*
        setTimeout(function () {
            return sendMessage('Hi Sandy! How are you?');
        }, 1000);
        */


        function sendResponse(text) {

            if (text === "Hi Cogni!") {
                setTimeout(function () {
                    return sendMessage("Taavi, how are you doing?", 'right');
                }, 1000);
            } else if (text === "I'm doing fine! How about you?") {
                setTimeout(function () {
                    return sendMessage("Super! Can I help you with something today? ", 'right');
                }, 1000);
            } else if (text === "Well, I am doing fine...") {
                setTimeout(function () {
                    return sendMessage("Just fine? Taavi, is everything OK?", 'right');
                }, 1000);
            } else if (text === "Jep, nothing really to worry about. Just a little bit anxious.") {
                setTimeout(function () {
                    return sendMessage("Why Taavi?", 'right');
                }, 1000);
            } else if (text === "Well, I have this pitch today!") {
                setTimeout(function () {
                    return sendMessage("That sounds scary!", 'right');
                }, 1000);
            } else if (text === "Yes, it does!") {
                setTimeout(function () {
                    return sendMessage("Well, I know some techniques, maybe I could help You?", 'right');
                }, 1000);
            } else if (text === "Well, how?") {
                setTimeout(function () {
                    return sendMessage("You know there are some breathing exercises You could do.", 'right');
                }, 1000);
            } else if (text === "Okay!") {
                setTimeout(function () {
                    return sendMessage("Okay, I will guide You through it! ", 'right');
                }, 1000);
                setTimeout(function () {
                    return sendMessage("First breath in as deep You can. Hold You breath for five seconds! Okay?", 'right');
                }, 1000);
            } else if (text === "Okay") {
                setTimeout(function () {
                    return sendMessage("Breathe in!", 'right');
                }, 1000);
                setTimeout(function () {
                    return sendMessage("Now hold!", 'right');
                }, 3000);
                setTimeout(function () {
                    return sendMessage("5", 'right');
                }, 3100);
                setTimeout(function () {
                    return sendMessage("4", 'right');
                }, 4000);
                setTimeout(function () {
                    return sendMessage("3", 'right');
                }, 5000);
                setTimeout(function () {
                    return sendMessage("2", 'right');
                }, 6000);
                setTimeout(function () {
                    return sendMessage("1", 'right');
                }, 7000);
                setTimeout(function () {
                    return sendMessage("Let go!", 'right');
                }, 8000);
                setTimeout(function () {
                    return sendMessage("Lets’t repeat it once more!", 'right');
                }, 9000);
                setTimeout(function () {
                    return sendMessage("Breath in as deep you can. Hold your breath!", 'right');
                }, 10000);
                setTimeout(function () {
                    return sendMessage("5", 'right');
                }, 11000);
                setTimeout(function () {
                    return sendMessage("4", 'right');
                }, 12000);
                setTimeout(function () {
                    return sendMessage("3", 'right');
                }, 13000);
                setTimeout(function () {
                    return sendMessage("2", 'right');
                }, 14000);
                setTimeout(function () {
                    return sendMessage("1", 'right');
                }, 15000);
                setTimeout(function () {
                    return sendMessage("Let go!", 'right');
                }, 16000);
                setTimeout(function () {
                    return sendMessage("How do you feel?", 'right');
                }, 17000);

            } else if (text === "A bit better!") {
                setTimeout(function () {
                    return sendMessage("So, it works, right?", 'right');
                }, 1000);
            } else if (text === "Yep, you are right Cogni! Thanks!") {
                setTimeout(function () {
                    return sendMessage("Okay, now go and practice!", 'right');
                }, 1000);
            }

            /*else {
                setTimeout(function () {
                    return sendMessage("Ouch, I'm not able to answer that yet 😅, can i help you with anything else?", 'right');
                }, 1000)
            }
            */



        }
    });


}.call(this));

function goToHome() {
    window.location.replace("http://cognisave.eu");
}
