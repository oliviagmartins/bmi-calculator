document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate");
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const resultDiv = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight)) {
            resultDiv.textContent = "Please enter valid values.";
            return;
        }

        const bmi = calculateBMI(height, weight);
        resultDiv.textContent = `Your BMI is ${bmi.toFixed(2)}`;
    });

    function calculateBMI(height, weight) {
        const bmi = weight / ((height / 100) ** 2);
        return bmi;
    }
});
