const createMessage = () => {
    const startPhraseArr = ['You are', 'You are a', 'Have a','Today will be a'];
    const endPhraseArr = ['!', 'person!', 'day!'];
    const adjArr = ['incredible', 'great', 'awesome', 'amazing', 'exhilarating', 'bright','fun', 'extraordinary'];
    const message = [];

    const phraseIndex = Math.floor(Math.random() * startPhraseArr.length);
    message.push(startPhraseArr[phraseIndex]);
    const adj = adjArr[Math.floor(Math.random() * adjArr.length)];
    message.push(adj);
    if(adj.charAt(0) === 'a' || adj.charAt(0) ===  'e' || adj.charAt(0) ===  'i' || adj.charAt(0) ===  'o' || adj.charAt(0) === 'u') {
        if(message[0][message[0].length - 1] === 'a') {
        message[0] += 'n';
        }
    }
    if(endPhraseArr[phraseIndex] !== '!') {
        if (phraseIndex === 3){
            message.push(endPhraseArr[2]);
        } else {
            message.push(endPhraseArr[phraseIndex]);
    }}

    let messageStr = message.join(' ');

    if(endPhraseArr[phraseIndex] === '!') {
        messageStr += '!';
    }

    return messageStr;
}

const sayMessage = () => {   
    console.log(`${createMessage()} \n`);
}

sayMessage();
