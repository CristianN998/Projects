var images = [];
images["Gamin"] = "bulbasaur.png";
images["Pokacho"] = "charmander.png";
images["Stefi"] = "squirtle.png";

var collection = [];
collection.push(new Pakiman("Gamin", "agua", 200, 50));
collection.push(new Pakiman("Pokacho", "tierra", 300, 100));
collection.push(new Pakiman("Stefi", "rainbow", 1000, 1000));


for (freddito in collection) {

    console.log(collection[freddito]);
}
for (var freddito of collection) {
    freddito.show();
}
for (var x in images) {
    console.log(x);
}