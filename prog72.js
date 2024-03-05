text='hai hello all hello world all'
//w.a.p to find the word count in the given string
//op:{hai:1, hello:2, all:2, world:1}

wordarr=text.split(' ');
count={ }
//console.log(word);
for( i of wordarr){

    (i in count)?count[i]++:count[i]=1;

}
console.log(count);

console.log('--------------------');
wc={}
text.split(' ').map(ele => ele in wc?wc[ele]+=1:wc[ele]=1)
console.log(wc);

