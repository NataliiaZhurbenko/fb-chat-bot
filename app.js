import express from 'express';
import {Bot, Elements} from 'facebook-messenger-bot';

const myPageAccessToken = 'EAAaJrr9vw1UBACM9BZBdRtw1JRa6xccprEYCgkNaIrUbJ6lxorizLH03IG8jlbawjuSx2u1ud3gGAEnKyJZCadXO1d2DKYlsEM7GGcaGD7lJknMbLgMBNGm5wsgvwYQZBpWUc8vH2BCJR77ZAveLii1Xyd1MLL9KVhKtjXZASC8c9bC2epxJj';
const myVerification = 'secret';

const bot = new Bot(myPageAccessToken, myVerification);

bot.on('message', async message => {
    const {sender} = message;
    await sender.fetch('first_name');

    const out = new Elements();
    out.add({text: `hey ${sender.first_name}, how are you!`});

    await bot.send(sender.id, out);
});

const app = express();
app.use('/facebook', bot.router());
app.listen(3000);