require('dotenv').config()
module.exports = {
    images: {
        domains: ['pbs.twimg.com','sarari.go5.run'],
    },
    env: {
        serviceName: 'Sarari(サラリ)', //大文字小文字を区別する正式名称
        serviceNamePlain: 'sarari', //大文字小文字を区別しない正式名称
        serviceDomain: 'sarari.go5.run', //httpsや語尾の/無しのドメインのみ(例:pennso.com)
        serviceDescription: '💸10ms給を表示して嬉しくなれるサービスです', //サービスの説明文を入力
        serviceIcon: 'https://twemoji.maxcdn.com/v/latest/72x72/1f4b8.png',
    }
};