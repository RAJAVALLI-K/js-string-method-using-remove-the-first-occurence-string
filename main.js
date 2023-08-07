// remove the first occurence of a given 'search string' from a string

let names = 'javascript is a programming is javascript language';
function removeFirst(names, str) {

    let result = names.indexOf(str);
    if (result === -1) {
        return names;
    }
    return names.slice(1,result) + names.slice(result + str.length);

}
console.log(removeFirst(names, 'javascript'));