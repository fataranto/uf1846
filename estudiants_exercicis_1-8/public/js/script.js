{
    async function getCountryDetails(country) {

        const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);

        const data = await response.json();

        return data;

    }

    /**
     * Exercici 5b. Haz que las opciones del array de objetos 'optionsValues' se carguen dinàmicamente cuando la pàgina se renderice en el navegador
     */
    function setDynamicOptions() {
        const optionsValues = [{
            value: 'spain',
            label: 'España'
        }, {
            value: 'venezuela',
            label: 'Venezuela',
        }, {
            value: 'peru',
            label: 'Perú'
        }]

        const country = document.querySelector('#country');

        optionsValues.forEach(option => {
            country.appendChild(new Option(option.label, option.value));
            //console.log(option.label);
        });

    }


    setDynamicOptions();

    /** 
     * 
     * EJERCICIO 6
     */

    async function setCountryFlag(event) {
        let countryName = event.target.value;
        //console.log(countryName);
       

        let countryData = await getCountryDetails(countryName)
        console.log(countryData);

        let population = countryData[0].population;
        let flagUrl = countryData[0].flags.png;
        console.log(flagUrl);
        console.log(population);

        document.querySelector('#urlFlag').value = flagUrl;
        document.querySelector('#population').value = population;

        //cargo flagUrl en la imagen con id 'imatgeSeleccionada'
        document.querySelector('#imatgeSeleccionada').src = flagUrl;
        






            



        // Descomenta la següent línia si no has aconseguit implementar la primera part de l'exercici. Comenta la línia anterior també.   
        //let countryData = await getCountryDetailsFake(countryName);

    }

    function getCountryDetailsFake(countryName) {
        const data = {
            spain: "https://flagcdn.com/es.svg",
            france: "https://flagcdn.com/fr.svg",
            italy: "https://flagcdn.com/it.svg"
        }

        return data.countryName;
    }



    // Descomentar para probar el Ejercicio 6
    //console.log("Información sobre España:", getCountryDetails('spain'));

    document.querySelector('.w3-select').onchange = setCountryFlag;

}