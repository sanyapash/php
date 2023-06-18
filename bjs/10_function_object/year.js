birthYearJson: `{  
    "count": 10,
    "list": {
        "id_1": "2000",
        "id_2": "1989",
        "id_3": "1988",
        "id_4": "1987",
        "id_5": "1991",
        "id_6": "1992",
        "id_7": "1993",
        "id_8": "1995",
        "id_9": "1994",
        "id_10": "2020",
    }
}`,

document.getElementById(' birthYearOutput').innerText = initPerson. birthYear;

randombirthYear: function() {

    return this.randomValue(this.birthYearJson);
},

this.person.birthYear = this.randombirthYear();
