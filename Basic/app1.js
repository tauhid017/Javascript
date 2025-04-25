const subredits = ['soccer', 'cricket', 'tennis', 'baseball'];
// for (i of subredits){
//     console.log(`https://www.reddit.com/r/${i}`);
// }
const footballers={
    1:'Cristiano Ronaldo',
    2:'Lionel Messi',
    3:'Ronaldo Nazario',
    4:'Zinedin Zidane',
    5:'Andres Iniesta',
    6:'Luka Modric',
    7:'Manuel Neuer',
    8:'Xavi Hernandez',
    9:'Robert Lewandowski',
    10:'Sergio Ramos'
};
for (i in footballers){
    console.log(`The list of Greatest footballers of my genration are ${i} : ${footballers[i]}`);
}