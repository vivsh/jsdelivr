ej.addCulture( "co", {
	name: "co",
	englishName: "Corsican",
	nativeName: "Corsu",
	language: "co",
	numberFormat: {
		",": " ",
		".": ",",
		"NaN": "Micca numericu",
		negativeInfinity: "-Infinitu",
		positiveInfinity: "+Infinitu",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["dumenica","luni","marti","mercuri","ghjovi","venneri","sabbatu"],
				namesAbbr: ["dum.","lun.","mar.","mer.","ghj.","ven.","sab."],
				namesShort: ["du","lu","ma","me","gh","ve","sa"]
			},
			months: {
				names: ["ghjennaghju","ferraghju","marzu","aprile","maghju","ghjunghju","lugliu","aostu","settembre","ottobre","nuvembre","dicembre",""],
				namesAbbr: ["ghje","ferr","marz","apri","magh","ghju","lugl","aost","sett","otto","nuve","dice",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd d MMMM yyyy",
				t: "HH:mm",
				T: "H:mm:ss",
				f: "dddd d MMMM yyyy HH:mm",
				F: "dddd d MMMM yyyy H:mm:ss",
				M: "d' di 'MMMM",
				Y: "MMMM' di u 'yyyy"
			}
		}
	}
});
