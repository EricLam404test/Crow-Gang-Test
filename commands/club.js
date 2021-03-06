const Discord = require('discord.js');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

let club = {
  tag: '#CPVULCUY',
  name: 'Crow Gang',
  description: 'Crow Icon | Yellow Name | Be friendly | Do Clan League | Join Disc - 953VZxx',
  type: 'inviteOnly',
  badgeId: 8000019,
  requiredTrophies: 15000,
  trophies: 775124,
  members: [
    {
      tag: '#8VG8VGG2G',
      name: 'POTATO',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 39292,
      icon: [Object]
    },
    {
      tag: '#2CP2L9CY',
      name: 'CG | InterLC',
      nameColor: '0xfff9c908',
      role: 'vicePresident',
      trophies: 32598,
      icon: [Object]
    },
    {
      tag: '#VJCRGR99',
      name: 'Roasted Rooster',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 30925,
      icon: [Object]
    },
    {
      tag: '#8URP89R2C',
      name: 'fighter09',
      nameColor: '0xfff9c908',
      role: 'vicePresident',
      trophies: 30799,
      icon: [Object]
    },
    {
      tag: '#PV2U0YRPV',
      name: 'CaramelPotato2',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 30286,
      icon: [Object]
    },
    {
      tag: '#R8V0G280',
      name: 'anas',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 29273,
      icon: [Object]
    },
    {
      tag: '#2V982LQYQ',
      name: 'Blossom🌸',
      nameColor: '0xfff9c908',
      role: 'president',
      trophies: 29141,
      icon: [Object]
    },
    {
      tag: '#2J2V9820G',
      name: 'XIN',
      nameColor: '0xfff9c908',
      role: 'vicePresident',
      trophies: 28975,
      icon: [Object]
    },
    {
      tag: '#P8YR0P2PR',
      name: 'yo kids, daddy',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 28654,
      icon: [Object]
    },
    {
      tag: '#8YUV2CG29',
      name: 'Bubbles⚡️',
      nameColor: '0xfff9c908',
      role: 'vicePresident',
      trophies: 28600,
      icon: [Object]
    },
    {
      tag: '#PL8GY0G2L',
      name: '⛩|craittfa64🎋',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 28100,
      icon: [Object]
    },
    {
      tag: '#2LCP2PUCL',
      name: 'ΩΔSWDΩ',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 27558,
      icon: [Object]
    },
    {
      tag: '#8UYCYY8UC',
      name: 'KRAL',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 26930,
      icon: [Object]
    },
    {
      tag: '#PYLUYLJU',
      name: 'Buttercup✨',
      nameColor: '0xfff9c908',
      role: 'vicePresident',
      trophies: 26928,
      icon: [Object]
    },
    {
      tag: '#ULY9CQUQ',
      name: 'bob_the_hob',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 26393,
      icon: [Object]
    },
    {
      tag: '#UP008ULV',
      name: 'Manker',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 25961,
      icon: [Object]
    },
    {
      tag: '#88U220CV2',
      name: 'VAÑSHIKA',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 25281,
      icon: [Object]
    },
    {
      tag: '#8QRVQ20V9',
      name: '❄ice|luk;)❄',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 24959,
      icon: [Object]
    },
    {
      tag: '#2GR29PQ0',
      name: 'oof',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 24690,
      icon: [Object]
    },
    {
      tag: '#2C22YRQY2',
      name: 'Messi 123',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 23468,
      icon: [Object]
    },
    {
      tag: '#2R0LV90L8',
      name: 'ButterToast',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 23305,
      icon: [Object]
    },
    {
      tag: '#200UCGLGG',
      name: 'Samurai_33',
      nameColor: '0xff1ba5f5',
      role: 'member',
      trophies: 22522,
      icon: [Object]
    },
    {
      tag: '#8QGUVG29',
      name: 'WesleyTheLagger',
      nameColor: '0xfff9c908',
      role: 'senior',
      trophies: 22457,
      icon: [Object]
    },
    {
      tag: '#8J29JCL09',
      name: 'Seth',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 22113,
      icon: [Object]
    },
    {
      tag: '#8GV9R9C0Y',
      name: 'jack',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 20981,
      icon: [Object]
    },
    {
      tag: '#GGVUCQC8',
      name: 'Omayou69™',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 20031,
      icon: [Object]
    },
    {
      tag: '#8C9V8C982',
      name: '⚔️HORRIDツHENRY⚔',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 20018,
      icon: [Object]
    },
    {
      tag: '#8VG89UJY9',
      name: 'samurai',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 19709,
      icon: [Object]
    },
    {
      tag: '#2J9P0URY8',
      name: 'Aleksa520',
      nameColor: '0xfff9c908',
      role: 'member',
      trophies: 19201,
      icon: [Object]
    },
    {
      tag: '#GV2QQUP2',
      name: 'Teko',
      nameColor: '0xffcb5aff',
      role: 'member',
      trophies: 15976,
      icon: [Object]
    }
  ]
};

module.exports = function (msg, args){
    let str = "";
    for(let i = 0; i < club.members.length; i++){
      let name = "" + club.members[i].name;
      let trophies = "" + club.members[i].trophies;
      str += (i+1) + "." + name + ": " + trophies + "\n";
    }

    const embed = new Discord.MessageEmbed()
        .setTitle('Crow Gang')
        .setDescription(str)
    msg.channel.send({embeds: [embed]});
}
