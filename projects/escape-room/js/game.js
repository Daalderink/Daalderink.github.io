
let keycard = 0;

let code=0;

let key = 0;

let scanner = 0;

let crowbar = 0;

let crate = 0;

function numberPad(){
code=prompt('vul de code in(let op: de code moet aan elkaar zijn geschreven)')
        if(code == '260784'){
        alert('toegang geaccepteerd')
    } else {
        alert('toegang geweigerd')
    }
    }
    function clickCouch(){
        if(keycard==0 && scanner==0){
        alert('je hebt een keycard gevonden')
        keycard = keycard + 1;
        } else if(keycard==1||scanner==1){
            alert('er ligt niks meer onder de bank')
        }
        };
        
        function keycardScanner(){
            if(keycard == 1&& scanner==0){
                alert('je hebt de keycard gebruikt')
                
                scanner = scanner + 1;
                keycard = keycard - 1;
            } else if (scanner==0 && keycard==0){
                alert('je hebt nog geen keycard')
            } else if(scanner==1 && keycard==0){
                alert('je hebt de keycard al gebruikt')
            }
        }
        
        function openFridge(){
            if(key==0){
            alert('je hebt de sleutel gevonden');
            key = key + 1;
            }else if(key==1){
                alert('er is niks meer in de koelkast')
            }
        }
        
        
        function cabinet(){
            alert('een deel van de code is 26')
        }
        function opencrate(){
            if(crowbar==1){
            alert('een deel van de code is 84')
            crate = crate + 1;
            } else if(crowbar==0){
                alert('je hebt nog een crowbar nodig')
            }
        }

function clickFrontDoor(){
    console.log('clickFrontDoor()');
    if(key == 0 && code == '' && scanner == 0){//alles niet
    alert('je hebt een sleutel, een keycard en een code nodig')
    } else if(key == 1 && code == '260784' && scanner==1){//alles wel
        document.getElementById('opendoor').style.display = 'inline';
    }else if(key == 1 && code == '' && scanner==1){//code mist
        alert('je hebt nog een code nodig')
    } else if(key==0 && code == '' && scanner==1){//code en key missen
        alert('je hebt nog een sleutel en een code nodig')
    } else if(key==1&&code==''&&scanner==0){//code en keycard missen
        alert('je hebt nog een code en een keycard nodig')
    } else if(key==1&&code=='260784'&&scanner==0){//alleen keycard mist
        alert('je hebt nog een keycard nodig')
    } else if(key==0&&code=='260784'&&scanner==0){//keycard en key missen
        alert('je hebt nog een sleutel en keycard nodig')
    } else if(key==0&&code=='260784'&&scanner==1){//key mist 
        alert('je hebt nog een sleutel nodig')
    }
};

function findCrowbar(){
if(crate=0||crowbar==0){
    alert('je hebt de crowbar gevonden')
    crowbar = crowbar + 1;
} else if(crate=1 || crowbar==1){
    alert('er is niks meer in de kast')
}
}
