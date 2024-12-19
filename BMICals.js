const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#Height").value)
    const weight = parseInt(document.querySelector("#Weight").value)
    const result = document.querySelector("#result")

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "plesase enter valid height"
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "plesase enter valid height"
    }
    else {
        const form = document.querySelector('form')

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const height = parseInt(document.querySelector("#Height").value)
            const weight = parseInt(document.querySelector("#Weight").value)
            const result = document.querySelector("#result")

            if (height === '' || height < 0 || isNaN(height)) {
                result.innerHTML = "plesase enter valid height"
            }
            else if (weight === '' || weight < 0 || isNaN(weight)) {
                result.innerHTML = "plesase enter valid height"
            }
            else {
                const BMI = (weight / (height / 100) ** 2).toFixed(2);
                result.innerHTML = `<span>Your BMI is ${BMI} kg/m² </span>`
            }

        })
    }

})