//twitch: wearethevr
//YT: TheVR Streamek Official
//insta: TheVR

const puppeteer = require('puppeteer')

class Influencer{
    name = "The VR"
    ig = "TheVR"
    yt = "TheVR Streamek Official" //UCSFMCn1xtj_4kOy6KNK_fNg
    twitch = "wearethevr"

    ig_follow = -1
    yt_follow = -1
    twitch_follow = -1

    async getData(){
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://socialblade.com/instagram/user/${this.ig}`);

        await page.goto(`https://socialblade.com/youtube/channel/${this.yt}`);

        await page.goto(`https://socialblade.com/twitch/user/${this.twitch}`);


        //console.log(page)

        //await page.screenshot({ path: 'example.png' });
      
        await browser.close();
      }
}

let influencer = new Influencer();

influencer.getData()

