

var maleA = {
    
    id: "1",
    preferences: ["F1", "F2"],
    male: true,
    interests: "Hockey, Canada, Making homemade soda.",
    matched: false,
    currentMatch: "",
    done: false
    
};
var maleB = {
    
    id: "2",
    preferences: ["F2", "F1"],
    male: true,
    interests: "Ghandi",
    matched: false,
    currentMatch: "",
    done: false

};

var maleC = {
    
    id: "3",
    preferences: ["F2"],
    male: true,
    interests: "Saying K to people",
    matched: false,
    currentMatch: "",
    done: false

};

var femaleA = {
    
    id: "F1",
    preferences: ["2","1"],
    male: false,
    interests: "Dr.Pepper",
    matched: false,
    currentMatch: "",
    done: false

};
var femaleB = {
    
    id: "F2",
    preferences: ["3", "2","1"],
    male: false,
    interests: "Canadian Opera",
    matched: false,
    currentMatch: "",
    done: false

};


var maleIDs = ["1","2","3"];


var males_Map = new Map();
var females_Map = new Map();

males_Map.set("1", maleA);
males_Map.set("2", maleB);
males_Map.set("3", maleC);

females_Map.set("F1", femaleA);
females_Map.set("F2", femaleB);




function stableMarriage(males_Map) {
    var alldone = false;
    
    while (alldone == false) {
        alldone = true;

        for (h=0;h<maleIDs.length;h++) {
            if(males_Map.get(maleIDs[h]).done == false) {
                propose(males_Map.get(maleIDs[h]));
            }
        }
         for (h=0;h<maleIDs.length;h++) {
             if(males_Map.get(maleIDs[h]).done == false) alldone=false;
         }
    }
}


function propose(male) {

     for(i=0;i<male.preferences.length;i++) {

         var onlist = false;
         for(j=0;j<females_Map.get(male.preferences[i]).preferences.length;j++) {

            if(females_Map.get(male.preferences[i]).preferences[j] == male.id) {
                onlist = true;
                break;

            }
         }

         if(onlist==true) {
            if(females_Map.get(male.preferences[i]).matched == false) {

                 females_Map.get(male.preferences[i]).matched=true;
                 females_Map.get(male.preferences[i]).currentMatch=male.id;
                 male.matched=true;
                 male.currentMatch=females_Map.get(male.preferences[i]).id;
                 male.done=true;
            }
         
             else {
                var pref_is_before=false;
                for(j=0;j<females_Map.get(male.preferences[i]).preferences.length;j++) {
                    if(females_Map.get(male.preferences[i]).preferences[j]==male.id) {
                        pref_is_before=true;
                        break;
                        document.write("hey");
                    }
                    else if (females_Map.get(male.preferences[i]).preferences[j]==females_Map.get(male.preferences[i]).currentMatch) {
                        pref_is_before=false;
                        break;
                    }
                }
                if(pref_is_before) {
                    males_Map.get(females_Map.get(male.preferences[i]).currentMatch).matched=false;
                    males_Map.get(females_Map.get(male.preferences[i]).currentMatch).done=false;
                    males_Map.get(females_Map.get(females_Map.get(male.preferences[i]).id).currentMatch).currentMatch="";
                    females_Map.get(male.preferences[i]).currentMatch=male.id;
                    male.matched=true;
                    male.done=true;
                    male.currentMatch=male.preferences[i];
                }
            }
         }
         if(male.matched==true) break;
         
        }

    if(male.matched==false) male.done=true;

};

stableMarriage(males_Map);

document.write("Male1 Match: " + males_Map.get("1").currentMatch+"<br />");

document.write(" Male2 Match: " + males_Map.get("2").currentMatch+"<br />");

document.write(" Male3 Match: " + males_Map.get("3").currentMatch+"<br />");

document.write(" Female1 Match: " + females_Map.get("F1").currentMatch+"<br />");

document.write(" Female2 Match: " + females_Map.get("F2").currentMatch+"<br />");






