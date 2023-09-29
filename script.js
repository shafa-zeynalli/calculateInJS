let $ = (param) => document.querySelector(param);
let $All = (param) => document.querySelectorAll(param);
const specialChars = ['%', '-', '+', '*', '/', '=', '+/-'];
let output = $("#answer").textContent;
let result = $("#result").textContent;
let isClick = false;

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
        if (!isClick) {
            output += value;
            isClick = true;
        } else {
            return
        }
    }else {
        if (((output === '' || output === '0') && specialChars.includes(value))) {
            // console.log(specialChars.includes(value))
            return
        }
        if ((!specialChars.includes(value))) {
            isClick = false
        }
        if (output === '0') {
            output = '';
            result=''
        }
        output += value;
        result = ''
        // isClick=true;
    }
}

$All('p').forEach(p => {
    p.addEventListener('click', (e) => {
        calculate(e.target.textContent);
        $("#answer").textContent = output;
        $("#result").textContent = result;
    })
})