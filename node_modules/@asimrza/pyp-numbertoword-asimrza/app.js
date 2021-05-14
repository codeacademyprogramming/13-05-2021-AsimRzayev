var th = ['','min','milyon', 'milyard','tirlon'];
var dg = ['sifir','bir','iki','uc','dord', 'bes','alti','yeddi','sekkiz','doqquz'];
 var tn = ['on','on bir','on iki','on uc', 'on dord','on bes','on alti', 'on yeddi','on sekkiz','on doqquz'];
 var tw = ['iyirmi','otuz','qirx','elli', 'altmis','yetmis','seksen','doxsan'];
 function toWords(s) {
    s = s.toString();
    s = s.replace(/[\, ]/g,'');

    if (s != parseFloat(s)) return 'reqem deyil';
    var x = s.indexOf('.');  //x=4

    if (x == -1)
        x = s.length; //4

    if (x > 15)
        return 'too big';
    var n = s.split('');  //[5,6,7,8]

    var str = '';
    var sk = 0;
    for (var i=0;   i < x;  i++) {  //0   //1  //2
        if ((x-i)%3==2) {  //1.4-0%3==2  //2.yox //3.yox  
            if (n[i] == '1') {
                str += tn[Number(n[i+1])] + ' ';
                i++;
                sk=1;
            } else if (n[i]!=0) {
                str += tw[n[i]-2] + ' ';
                sk=1;
            }
        } else if (n[i]!=0) { //1.yes //2.yes  //yes
            str += dg[n[i]] +' ';  //1."5"  //2."5 min 6 yuz 7"
            if ((x-i)%3==0) str += 'yuz ';  
            sk=1;
        }
        if ((x-i)%3==1) {
            if (sk)
                str += th[(x-i-1)/3] + ' ';
            sk=0;
        }
    }
    
    if (x != s.length) {
        var y = s.length;
        str += 'tam noqte ';
        for (var z=x+1; z<y; z++){
            

             if ((y-z)%3==2) {  //1.4-0%3==2  //2.yox //3.yox  
            if (n[z] == '1') {
                str += tn[Number(n[z+1])] + ' ';
                z++;
                sk=1;
            } else if (n[z]!=0) {
                str += tw[n[z]-2] + ' ';
                sk=1;
            }
        } else if (n[z]!=0) { //1.yes //2.yes  //yes
            str += dg[n[z]] +' ';  //1."5"  //2."5 min 6 yuz 7"
            if ((y-z)%3==0) str += 'yuz ';  
            sk=1;
        }
        if ((y-z)%3==1) {
            if (sk)
                str += th[(y-z-1)/3] + ' ';
            sk=0;
        }

          }
        
    }
    return str.replace(/\s+/g,' ');
}

// 5678
export{
    toWords
}