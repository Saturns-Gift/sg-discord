const nodeHtmlToImage = require('node-html-to-image');
const { MessageAttachment } = require('discord.js-light');
const fs = require('fs');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const embedCache = {};
const getEmbedFromCache = async (template) => {
   if (embedCache[template]) {
      return embedCache[template];
   }
   try {
      const image = await readFile(path.resolve(__dirname, `./templates/${template}.html`), 'utf8');
      embedCache[template] = image;
      return image;
   } catch (err) {
      console.error(err);
      return getEmbedFromCache('error');
   }
};

module.exports = {
   async getEmbedFromTemplate(template, fileName) {
      const html = await getEmbedFromCache(template);
      // TODO: find a faster way to do this
      const image = await nodeHtmlToImage({
         html,
         quality: 100,
         type: 'jpeg',
         puppeteerArgs: {
            args: ['--no-sandbox'],
         },
         encoding: 'buffer',
      });
      return new MessageAttachment(image, fileName);
   },
};
