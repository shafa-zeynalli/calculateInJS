let $ = (param) => document.querySelector(param);
let $All = (param) => document.querySelectorAll(param);
const specialChars = ['%', '-', '+', '*', '/', '=', '+/-'];
let output = $("#answer").textContent;
let result = $("#result").textContent;


// $("#answer").addEventListener('click',()=>{
//     console.log('jhsdbcjhbdbcbcd');
// })

let calculate = (value) => {
    if (value === '=' && output !== '') {
        result = eval(output);
    } else if (value === 'C') {
        output = '0';
        result = ''
    } else if (value === '+/-' && output !== '' && output !== '0') {
        if (output.startsWith('-')) {
            output = output.substring(1);
        } else {
            output = '-' + output;
        }
    } else if (value === '<=') {
        output = output.toString().slice(0, - 1);

    }else if (specialChars.includes(value) && output !== '' && output !== '0') {
        let endValue = output[output.length-1];
        if(specialChars.includes(endValue)) {
            output = output.slice(0, -1) + value
           console.log( output = output.slice(0, -1) + value)
        }
        else{
            output+=value
        }
    }else {
        if (((output === '' || output === '0') && specialChars.includes(value))) {
            // console.log(specialChars.includes(value))
            return
        }

        if (output === '0') {
            output = '';
            result=''
        }
        output += value;
        result = ''
    }
}

$All('p').forEach(p => {
    p.addEventListener('click', (e) => {
        calculate(e.target.textContent);
        $("#answer").textContent = output;
        $("#result").textContent = result;
    })
})