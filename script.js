let first, second, third;

// lets generate the first number 
let random = Math.random()
// 0 - 0.33, 0.33-0.66, 0.66-1
if(random < 0.33){
    first = "crazy" 
}
else if(random < 0.66 && random >= 0.33){
    first = "Amazing"
}
else {
    first = "Fire"
}

// lets generate second word
random = Math.random()
if(random < 0.33){
    second = "engine" 
}
else if(random < 0.66 && random >= 0.33){
    second = "foods"
}
else {
    second = "Garments"
}

// lets generate third word
random = Math.random()
if(random < 0.33){
    third = "Bros" 
}
else if(random < 0.66 && random >= 0.33){
    third = "Limited"
}
else {
    third = "hub"
}


console.log(`${first} ${second} ${third}`)