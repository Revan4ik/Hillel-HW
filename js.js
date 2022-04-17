// Task
var sum = '';
var str = '';
for (var i = 0; i < 7; i++){
    str = str + '#';
    sum = sum + str + '\n'
}
console.log(sum)

// bonus Task
var sum = ''
for (var i = 0; i < 27; i++){

    if(i == 0) sum = sum + '############################'  + '\n'
    if(i == 1){
        for (var j = 0; j < 2; j++){
            sum = sum + '####' + "                    "
        }
        sum = sum + '\n'
    } 
        if(i == 2) {
        for (var j = 0; j < 1; j++){
            sum = sum + '##' + "   " + '***' + "                " + '**' + '##'
        }
        sum = sum + '\n'
    } 
        if(i == 3){
        for (var j = 0; j < 1; j++){
            sum = sum + '#' + "   " + "*##**" + "         " + "**" + "  " + "0" + "  " + "*##"
        }
        sum = sum + '\n'
    }
    if(i == 4){
        for (var j = 0; j < 1; j++){
            sum = sum + '#' + "    " + "***" + "     " + "0" + "    " + "##**" + "    " + "*#"
        }
        sum = sum + '\n'
    }
    if(i == 5){
        for (var j = 0; j < 1; j++){
            sum = sum + '#' + "       " + "0" + "         " + "##***" + "    " + "#"
        }
        sum = sum + '\n'
    }
    if(i == 6){
        for (var j = 0; j < 1; j++){
            sum = sum + '#' + "                 " + "##**" + "     " + "#"
        }
        sum = sum + '\n'
    }
    if(i == 7){
        for (var j = 0; j < 1; j++){
            sum = sum + '#' + "   " + "0" + "       " + "#*" + "             " + "#"
        }
        sum = sum + '\n'
    }
    if(i == 8){
        for (var j = 0; j < 1; j++){
            sum = sum + '#***' + "        " + "##**" + "    " + "0" + "    " + "**#"
        }
        sum = sum + '\n'
    }
    if(i == 9){
        for (var j = 0; j < 1; j++){
            sum = sum + '##****' + "     " + "###***" + "       " + "*###"
        }
        sum = sum + '\n'
    }
    if(i == 10) sum = sum + '############################'  + '\n'
}
console.log(sum)