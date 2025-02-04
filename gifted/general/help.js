let Giftedd = async (m, { Gifted }) => {

    let giftedButtons = [
          [
            { text: 'WaChannel', url: 'https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l' }
        ]
    ];

    Gifted.reply({ text: `Need help? Kindly Consult my Owner: @${global.ownerUsername}\nEspecially incase a Command is not Working` }, giftedButtons, m)
}

Giftedd.command = ['help']
Giftedd.desc = 'Get Help'
Giftedd.category = ['general']

module.exports = Giftedd
