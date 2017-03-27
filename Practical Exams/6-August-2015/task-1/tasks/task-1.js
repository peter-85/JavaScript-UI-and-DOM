function solve() {
    return function(selector, isCaseSensitive) {
        isCaseSensitive = isCaseSensitive || false;
        var root = document.querySelector(selector);
        root.className = "items-control";

        //add controls
        var addControls = document.createElement("div");
        addControls.className += "add-controls";
        var textEnter = document.createTextNode("Enter text");
        var inputEnter = document.createElement("input");
        var button = document.createElement("button");
        button.className += "button";
        button.innerHTML = "Add";
        addControls.appendChild(textEnter);
        addControls.appendChild(inputEnter);
        addControls.appendChild(button);
        root.appendChild(addControls);

        // result controls
        var resultControls = document.createElement("div");
        resultControls.className += "result-controls";
        var ulList = document.createElement("ul");
        ulList.className += "items-list";

        resultControls.appendChild(ulList);


        // search controls
        var searchControl = document.createElement("div");
        searchControl.className += "search-controls";
        var textSearch = document.createTextNode("Search");
        var inputSearch = document.createElement("input");
        searchControl.appendChild(textSearch);
        searchControl.appendChild(inputSearch);
        root.appendChild(searchControl);
        root.appendChild(resultControls);

        // events

        inputSearch.addEventListener("input", function(ev) {
            var targetText = ev.target.value;
            var itemsName = document.getElementsByTagName("span");
            for (var i = 0; i < itemsName.length; i++) {
                var currentItemName = itemsName[i];
                if (!isCaseSensitive) {
                    if (currentItemName.innerHTML.toLowerCase().indexOf(targetText.toLowerCase()) >= 0) {
                        currentItemName.parentNode.style.display = '';
                    } else {
                        currentItemName.parentNode.style.display = 'none';
                    }
                } else {
                    if (currentItemName.innerHTML.indexOf(targetText) >= 0) {
                        currentItemName.parentNode.style.display = '';
                    } else {
                        currentItemName.parentNode.style.display = 'none';
                    }
                }
            }

        }, false);

        button.addEventListener('click', function() {
            var item = document.createElement("li");
            item.className += "list-item";
            var textInput = document.createElement("span");
            textInput.innerHTML = inputEnter.value;
            var buttonX = document.createElement("button");
            buttonX.innerHTML = "X";
            buttonX.className += "button";
            item.appendChild(buttonX);
            item.appendChild(textInput);
            ulList.appendChild(item);
            resultControls.appendChild(ulList);
        }, false);

        ulList.addEventListener("click", function(ev) {
            var target = ev.target;
            if (target.className === "button") {
                var itemToRemove = target.parentNode;
                ulList.removeChild(itemToRemove);
            }
        }, false);

    };
}

module.exports = solve;