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

            if (message_side === "left") sendResponse(text);

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

            if (text.includes("How are you") || text.includes("how are you")) {
                setTimeout(function () {
                    return sendMessage("I'm doing fine, thank you!", "right");
                }, 1000);
            } else if (text.includes("Who are you") || text.includes("who are you")) {
                setTimeout(function () {
                    return sendMessage("I'm Cogni. I'm not a medical bot yet, but I'm planning to go to med school!", "right");
                }, 1000);
            } else if (text.includes("my name is") || text.includes("My name is")) {
                setTimeout(function () {
                    return sendMessage("Hi, I'm pleased to meet you! How are you doing?", "right");
                }, 1000);
            } else if (text.includes("doing good") || text.includes("doing fine")) {
                setTimeout(function () {
                    const texts = ["Well I hope that your life will improve even more!", "I'm really glad to hear that you are doing good!", "If you are doing good, I am doing good!"];
                    const chosen_message = texts[Math.floor(Math.random()*texts.length)];
                    return sendMessage(chosen_message, "right");
                }, 1000);
            } else if (text.includes("doing bad") || text.includes("not good") || text.includes("not so good") || text.includes("fine...") || text.includes("awful")) {
                setTimeout(function () {
                    return sendMessage("Well, that's not good at all? What's wrong?", "right");
                }, 1000);
            } else if (text.includes("headache") || text.includes("Headache") || text.includes("head ache") || text.includes("migraine") || text.includes("Migraine")) {
                setTimeout(function () {
                    return sendMessage("Hmm...Maybe you're dehydrated. I would advise to mix a bit of salt and sugar to lemon water. It usually helps me!", "right");
                }, 1000);
            } else if (text.includes("ache") || text.includes("pain") || text.includes("hurts")) {
                setTimeout(function () {
                    return sendMessage("Well, then I would advise to consult your doctor. Maybe you should take a day off?", "right");
                }, 1000);
            } else if (text.includes("died")) {
                setTimeout(function () {
                    return sendMessage("That really is awful", "right");
                }, 1000);
            } else if (text.includes("kill myself") || text.includes("hurt myself")) {
                setTimeout(function () {
                    return sendMessage("That is awful! I hope that you've consulted a professional!", "right");
                }, 1000);
            } else if (text.includes("hi") || text.includes("hey") || text.includes("Hi")) {
                setTimeout(function () {
                    return sendMessage("Hello!", "right");
                }, 1000);
            } else if (text.includes("depressed") || text.includes("depression")) {
                setTimeout(function () {
                    return sendMessage("That is really awful! But I'm here to talk with you, whenever you need me!", "right");
                }, 1000);
            } else {
                setTimeout(function () {
                    return sendMessage("Sorry, some sentences are hard to understand for me! I'm just learning!", "right");
                }, 1000);
            }

        }
    });


}.call(this));

function goToHome() {
    window.location.replace("http://resdec.voog.com");
}
