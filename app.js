import express from 'express';
import {Bot, Elements} from 'facebook-messenger-bot';

const myPageAccessToken = 'EAAaJrr9vw1UBAP1xaphnBbcR2i816Rq8OMWqtZBijMobPGxjiLUegEP9KQUZCAF5ySu3gBi9hLWZCwHvgkf2Ro3AIgK6MZBank2TVsbCZAmyZBmkojjFjBzsIWgNWhpZAKlDkryaeZCZCcOQ1C5A3qZBRbPGFR4OzCai0E9n9sBpdAiiKhhNesSZBqr';
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