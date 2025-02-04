module.exports = {
    command: ['apk', 'apkdl', 'app'],
    desc: 'Download Android Apps',
    category: ['downloader'],
    async run(m, { Gifted, text, GiftedApkDl }) {
        const giftedMess = {
            wait: 'Please wait...',
            done: 'Download complete!',
            error: 'An error occurred.'
        };

        if (!text) return Gifted.reply({ text: `Provide an App Name ie ${global.prefix}apk Telegram` }, m);
        Gifted.reply({ text: giftedMess.wait }, m);

        try {
            const giftedAppData = await GiftedApkDl(text);
            if (!giftedAppData || !giftedAppData.link || !giftedAppData.appname) {
                return Gifted.reply({ text: 'Failed to fetch app data.' }, m);
            }

            let giftedButtons = [
                [
                    { text: 'App Link', url: `${giftedAppData.link}` },
                    { text: 'WaChannel', url: 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l' }
                ]
            ];

            Gifted.downloadAndSend({
                document: `${giftedAppData.link}`,
                fileName: `${giftedAppData.appname}`,
                mimetype: "application/vnd.android.package-archive",
                caption: giftedMess.done
            }, giftedButtons, m);
        } catch (e) {
            console.error('Error:', e); // Log the error for debugging
            Gifted.reply({ text: giftedMess.error }, m);
        }
    }
};
