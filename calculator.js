const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
let expersion = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "Clear") {
            expersion = "";
            input.value = expersion;
        }
        else if (value === "clean") {
            expersion = expersion.slice(0, -1);
            input.value = expersion;
        }
        else if (value === "=") {
            try {
                expersion = eval(expersion).toString();
                input.value = expersion;
            } catch {
                input.value = "Error"
            }
        }
        else {
            expersion += value;
            input.value = expersion;
        }
    })
});