module.exports = { 
    isPalindrome: function(word){
        var re = /[\W_]/g;
        //removes accentuation
        var normalized = word.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        //pass all letters to lower case and remove characters invalids
        var lowRegStr = normalized.toLowerCase().replace(re, '');
                
        var reverseStr = lowRegStr.split('').reverse().join(''); 
        return reverseStr === lowRegStr;
    }
};