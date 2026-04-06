const url = 'https://youtu.be/mUln-7dZvWI?si=0V5lLMdouJ7Fe_DS';
const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
const match = url.match(regExp);
console.log('Match2:', match ? match[2] : null, 'Len:', match ? match[2].length : null);
