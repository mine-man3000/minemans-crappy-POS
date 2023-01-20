var menu = [ "Peperoni Pizza", "Supreme Pizza", "Five Meat Pizza", "Veggie Pizza", "Gluten Free Pizza", "Wings", "Cheesy Bread", "French Fries", "App Sampler", "Vanilla Cake", "Chocolate Cake", "Giant Warm Cookie", "Dippen' Dots" ]
var order = []
document.getElementById("CompleteOrder").addEventListener("click", completeOrder);
var parsedOrder = ""
for (let i = 0; i <= menu.length - 1; i++) {
    let button = document.createElement("button");
    let body = document.getElementById("button")
    var orderElement = document.getElementById("order")
    
    button.innerHTML = menu[i];


    button.addEventListener ("click", function() {
        parsedOrder = ""
        order.push(this.innerHTML)
        console.log(order)

        const counts = {};
        console.log(typeof(counts))
        order.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

        for(i in counts) {
            console.log(counts)
            parsedOrder += (counts[i] + "x " + i + "<br>")
        }
        orderElement.innerHTML = parsedOrder
        });
    body.appendChild(button);
    function complete() {
        orderElement.innerHTML = "Thank you for your business!"
        parsedOrder = ""
        order = []
    };
    
}

function completeOrder() {
    //mineman: send the order to a server somehow
    //autumn: use your brain as the server
    console.log("sending this to server, put that here at some point :p")
    complete()

}