import express from 'express';
import {Bot, Elements} from 'facebook-messenger-bot';

const myPageAccessToken = 'EAAaJrr9vw1UBABoydZBakKtaf9bdjSx81nFtDwmZAhoLc5ZBKMuDvRUoFstHQGUjmarHYSYVZCqKVgYAeO4k0ADumkb3FgtktsiYKs3t5vGNBwgFfL80Fq9BEV2PmsIUU3qGAXu3Nd9EXqnFOy9F1xrZBXXsPN5Wjj0cVDuCkhauPIkGpDbVG';
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