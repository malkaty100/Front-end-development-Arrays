const data = [ 
{ 
name: "John", 
birthday: "1-1-1995", 
favoriteFoods: { 
meats: ["hamburgers", "sausages"], 
fish: ["salmon", "pike"], 
}, 
}, 
{ 
name: "Mark", 
birthday: "10-5-1980", 
favoriteFoods: { 
meats: ["hamburgers", "steak", "lamb"], 
fish: ["tuna", "salmon", "barracuda"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["cow", "chicken"], 
fish: ["pike"], 
},
}, 
{ 
name: "Thomas", 
birthday: "1-10-1990", 
favoriteFoods: { 
meats: ["bird", "rooster"], 
fish: ["salmon"], 
}, 
}, 
{ 
name: "Mary", 
birthday: "1-10-1977", 
favoriteFoods: { 
meats: ["hamburgers", "lamb"], 
fish: ["bass", "tuna"], 
}, 
}, 
];

    
//1
function names(){
    return data.map(i=>{
        return i.name
    })

}
//2
function before1990(){
    return data.filter(i=>{
        let a=i.birthday.split('-')
        console.log(a[2]+0);
        
     return 1990 > Number(a[2]) 
    })
}
//3
function cntFood(){
    let food={}
for(let i in data){
    
    for(let j in data[i].favoriteFoods){
        
       for(let k in data[i].favoriteFoods[j] ){
         if(food[data[i].favoriteFoods[j][k]])
        food[data[i].favoriteFoods[j][k]]++
        else
        food[data[i].favoriteFoods[j][k]]=1

    
    }
   for(let k in j.fish){
    if(food[data[i].favoriteFoods[j][k]])
        food[data[i].favoriteFoods[j][k]]++
    else
        food[data[i].favoriteFoods[j][k]]=1

    }}
}
return food
}
console.log(`get names ${names()}`);
const foods=cntFood()
console.log(`who was born before 1990 ${before1990()}`);
console.log(`count each food`);
for(let x in foods){
    console.log(x,foods[x]);
    
}


