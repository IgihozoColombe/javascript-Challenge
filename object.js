
function ObjectGenerator(arr){
    let members = {};
    for(let i=0; i<arr.length; i++){
        let names = arr[i].split(",")[0];
        let age = parseInt(arr[i].split(",")[1]);
        members[names.split(" ")[0]]={
            "second-name": names.split(" ")[1],
            "age": age
        }
    }
    return members;
}

console.log(ObjectGenerator([ "Patrick Wayne, 32", "lily Wayne, 21","Eric mimi, 21", "Dodos deck, 21","Alien Dwine ,22" ]));