function pt(myHand){
    
        var handArray=["ストレートを投げた","変化球を投げた","ボールになる変化球で誘った"];
      
    console.log(handArray[myHand]);
    
    var random= Math.random()*3;
    console.log(random);
    
    var randomNum =Math.floor(random);
    console.log(randomNum);
    
    var computerHand= randomNum % 3;
    console.log(computerHand);
    

    if (myHand == 0){
        if(computerHand == 0){
            alert("小川は"+handArray[computerHand]+"ので、ホームラン！");
        } else if(computerHand == 1){
            alert("小川は"+handArray[computerHand]+"ので、タイミングが合わず凡退");
        } else if(computerHand == 2){
            alert("小川は"+handArray[computerHand]+"ので、相手の術中にはまり三振");
        }
        }
    
    
else if (myHand == 1){
        if(computerHand == 0){
            alert("小川は"+handArray[computerHand]+"ので、詰まってしまい内野フライ");
        } else if(computerHand == 1){
            alert("小川は"+handArray[computerHand]+"ので、狙い通り打ちヒット！");
        } else if(computerHand == 2){
            alert("小川は"+handArray[computerHand]+"ので、しっかり見極めた。＋1ボールからリトライ　2ストライクと追い込まれている場合、ゾーンが広いため三振");
            }
    }
    
    
    else if (myHand == 2){
        if(computerHand == 0){
            alert("小川は"+handArray[computerHand]+"ので、見逃しストライク　＋1ストライクからリトライ");
        } else if(computerHand == 1){
            alert("小川は"+handArray[computerHand]+"ので、見逃しストライク　＋1ストライクからリトライ");
        } else if(computerHand == 2){
            alert("小川は"+handArray[computerHand]+"ので、見逃しボール　＋1ボールからリトライ");
        }
    }
    

}

function rs(select1){
    
    var handArray=["打撃結果"];
      
    console.log(handArray[select1]);
    
     var random= Math.random()*1000;
    console.log(random);
    
    var randomNum2 =Math.floor(random);
    console.log(randomNum2);
    
if (select1 == 0){
     if( randomNum2 < 548){
            alert(handArray[select1]+":凡打");
        } else if(randomNum2 <644){
            alert(handArray[select1]+":三振");
        } else if(randomNum2 <754){
            alert(handArray[select1]+":四球");
        }else if(randomNum2 <850){
            alert(handArray[select1]+":本塁打");
        } else if(randomNum2 <905){
            alert(handArray[select1]+":二塁打");
        }else if(randomNum2 <1000){
            alert(handArray[select1]+":一塁打");
        } 
}
}