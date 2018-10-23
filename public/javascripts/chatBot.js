(function () {
    let Message;

    const hello_texts = ["Hi there! Thank you for texting me, finally! Olivia is here for you","Hello! This is Irene. Don’t be afraid to ask stupid questions. I love them!","Greetings! I’m Megan. Any worries? You are at the right place!", "Hi! This is Maria, your special chatbot. I’m sure we’ll get on really well.","Hi, Irene here. I’m fine, and you?","Hi, this is Julie. Your worries worrie me.","Hello and welcome! I am Olga, you are in good hands now! How can I help?","Hello! This is Olivia. I know you came to chat with me! I am ready!", "Hello! I am Alexa, standing by to get your issues fixed and worries vanished","Hi! Thank you for chatting. This is Mary. I promise to take good care of you!","Greetings! You are chatting with Helen. Please be nice to her 😉","Hello, I’m awesome. How can I help you?","Hi! Julie here, thanks for chatting! What’s up?","Hi! This is Mary. I was so bored. Thank you for saving me!","Hi! You have called at the right time! Megan online with you.","Hi! Thank you for calling! This is Maria. I’ve been expecting you!"];
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

            if (text === "Peavalu") {
                setTimeout(function () {
                    return sendMessage("Oh no, I'm sorry to hear that!", 'right');
                }, 1000);
            }
        }
    });


}.call(this));
