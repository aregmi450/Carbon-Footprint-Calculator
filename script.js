
 function success() {
	 if(document.getElementById("kWh").value==="" &&
      document.getElementById("mileage").value==="" &&
      document.getElementById("householdgas").value==="" &&
      document.getElementById("dailyCommutePerWeek").value==="") {
            document.getElementById('button').disabled = true;
        } else {
            document.getElementById('button').disabled = false;
        }
    }

function gasEmissions() {
    var mpg = document.getElementById("mileage").value
    var dailyCommutePerWeek = document.getElementById("dailyCommutePerWeek").value
    var result = 0;

    if (mpg < 0 || dailyCommutePerWeek < 0) {
      alert("Invalid number")
    }
    else if (mpg == 0 || dailyCommutePerWeek == 0) {
      result = 0;
    }
    else{
    result = (parseFloat(dailyCommutePerWeek)/parseFloat(mpg)* 8887);
      document.getElementById("gasEmissionAnswer").innerHTML = result.toFixed(2) + " grams of CO₂ emitted during your weekly commute";
    }
        return result;
  }

  function electricEmissions() {
    var kWh = document.getElementById("kWh").value

    if (kWh < 0) {
      alert("Invalid number")
    }

    if (kWh >= 0) {
      var result = parseFloat(kWh)/3243.24;
    }

    document.getElementById("electricEmissionAnswer").innerHTML = result.toFixed(4) + " tons of CO₂ emitted from household electricity";
    return result;
  }


  function householdgasEmissions() {

    var householdgas = document.getElementById("householdgas").value

    if (householdgas < 0) {
      alert("Invalid number")

    }

    if (householdgas >= 0) {
      var result = parseFloat(householdgas)/ 4918.03;
    }

    //var result = parseFloat(householdgas) * .12
    document.getElementById("householdEmissionAnswer").innerHTML = result.toFixed(4) + " tons of CO₂ emitted from household gas";
    return result;
  }

  function averageEmissions()
  {
    var final = (4*householdgasEmissions()) + electricEmissions() + (gasEmissions()/1000000)
    document.getElementById("myTag").innerHTML = "Total monthly carbon footprint: " + final.toFixed(4) + " tons";
  }
