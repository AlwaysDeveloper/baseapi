'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    queryInterface.bulkInsert('countries', [
      {
        "name": "Afghanistan",
        "phoneCode": "+93",
        "code": "AF",
        "continent": "Asia"
      },
      {
        "name": "Aland Islands",
        "phoneCode": "+358",
        "code": "AX",
        "continent": "Asia"
      },
      {
        "name": "Albania",
        "phoneCode": "+355",
        "code": "AL",
        "continent": "Asia"
      },
      {
        "name": "Algeria",
        "phoneCode": "+213",
        "code": "DZ",
        "continent": "Asia"
      },
      {
        "name": "AmericanSamoa",
        "phoneCode": "+1684",
        "code": "AS",
        "continent": "Asia"
      },
      {
        "name": "Andorra",
        "phoneCode": "+376",
        "code": "AD",
        "continent": "Asia"
      },
      {
        "name": "Angola",
        "phoneCode": "+244",
        "code": "AO",
        "continent": "Asia"
      },
      {
        "name": "Anguilla",
        "phoneCode": "+1264",
        "code": "AI",
        "continent": "Asia"
      },
      {
        "name": "Antarctica",
        "phoneCode": "+672",
        "code": "AQ",
        "continent": "Asia"
      },
      {
        "name": "Antigua and Barbuda",
        "phoneCode": "+1268",
        "code": "AG",
        "continent": "Asia"
      },
      {
        "name": "Argentina",
        "phoneCode": "+54",
        "code": "AR",
        "continent": "Asia"
      },
      {
        "name": "Armenia",
        "phoneCode": "+374",
        "code": "AM",
        "continent": "Asia"
      },
      {
        "name": "Aruba",
        "phoneCode": "+297",
        "code": "AW",
        "continent": "Asia"
      },
      {
        "name": "Australia",
        "phoneCode": "+61",
        "code": "AU",
        "continent": "Asia"
      },
      {
        "name": "Austria",
        "phoneCode": "+43",
        "code": "AT",
        "continent": "Asia"
      },
      {
        "name": "Azerbaijan",
        "phoneCode": "+994",
        "code": "AZ",
        "continent": "Asia"
      },
      {
        "name": "Bahamas",
        "phoneCode": "+1242",
        "code": "BS",
        "continent": "Asia"
      },
      {
        "name": "Bahrain",
        "phoneCode": "+973",
        "code": "BH",
        "continent": "Asia"
      },
      {
        "name": "Bangladesh",
        "phoneCode": "+880",
        "code": "BD",
        "continent": "Asia"
      },
      {
        "name": "Barbados",
        "phoneCode": "+1246",
        "code": "BB",
        "continent": "Asia"
      },
      {
        "name": "Belarus",
        "phoneCode": "+375",
        "code": "BY",
        "continent": "Asia"
      },
      {
        "name": "Belgium",
        "phoneCode": "+32",
        "code": "BE",
        "continent": "Asia"
      },
      {
        "name": "Belize",
        "phoneCode": "+501",
        "code": "BZ",
        "continent": "Asia"
      },
      {
        "name": "Benin",
        "phoneCode": "+229",
        "code": "BJ",
        "continent": "Asia"
      },
      {
        "name": "Bermuda",
        "phoneCode": "+1441",
        "code": "BM",
        "continent": "Asia"
      },
      {
        "name": "Bhutan",
        "phoneCode": "+975",
        "code": "BT",
        "continent": "Asia"
      },
      {
        "name": "Bolivia, Plurinational State of",
        "phoneCode": "+591",
        "code": "BO",
        "continent": "Asia"
      },
      {
        "name": "Bosnia and Herzegovina",
        "phoneCode": "+387",
        "code": "BA",
        "continent": "Asia"
      },
      {
        "name": "Botswana",
        "phoneCode": "+267",
        "code": "BW",
        "continent": "Asia"
      },
      {
        "name": "Brazil",
        "phoneCode": "+55",
        "code": "BR",
        "continent": "Asia"
      },
      {
        "name": "British Indian Ocean Territory",
        "phoneCode": "+246",
        "code": "IO",
        "continent": "Asia"
      },
      {
        "name": "Brunei Darussalam",
        "phoneCode": "+673",
        "code": "BN",
        "continent": "Asia"
      },
      {
        "name": "Bulgaria",
        "phoneCode": "+359",
        "code": "BG",
        "continent": "Asia"
      },
      {
        "name": "Burkina Faso",
        "phoneCode": "+226",
        "code": "BF",
        "continent": "Asia"
      },
      {
        "name": "Burundi",
        "phoneCode": "+257",
        "code": "BI",
        "continent": "Asia"
      },
      {
        "name": "Cambodia",
        "phoneCode": "+855",
        "code": "KH",
        "continent": "Asia"
      },
      {
        "name": "Cameroon",
        "phoneCode": "+237",
        "code": "CM",
        "continent": "Asia"
      },
      {
        "name": "Canada",
        "phoneCode": "+1",
        "code": "CA",
        "continent": "Asia"
      },
      {
        "name": "Cape Verde",
        "phoneCode": "+238",
        "code": "CV",
        "continent": "Asia"
      },
      {
        "name": "Cayman Islands",
        "phoneCode": "+ 345",
        "code": "KY",
        "continent": "Asia"
      },
      {
        "name": "Central African Republic",
        "phoneCode": "+236",
        "code": "CF",
        "continent": "Asia"
      },
      {
        "name": "Chad",
        "phoneCode": "+235",
        "code": "TD",
        "continent": "Asia"
      },
      {
        "name": "Chile",
        "phoneCode": "+56",
        "code": "CL",
        "continent": "Asia"
      },
      {
        "name": "China",
        "phoneCode": "+86",
        "code": "CN",
        "continent": "Asia"
      },
      {
        "name": "Christmas Island",
        "phoneCode": "+61",
        "code": "CX",
        "continent": "Asia"
      },
      {
        "name": "Cocos (Keeling) Islands",
        "phoneCode": "+61",
        "code": "CC",
        "continent": "Asia"
      },
      {
        "name": "Colombia",
        "phoneCode": "+57",
        "code": "CO",
        "continent": "Asia"
      },
      {
        "name": "Comoros",
        "phoneCode": "+269",
        "code": "KM",

        "continent": "Asia"
      },
      {
        "name": "Congo",
        "phoneCode": "+242",
        "code": "CG",
        "continent": "Asia"
      },
      {
        "name": "Congo, The Democratic Republic of the Congo",
        "phoneCode": "+243",
        "code": "CD",
        "continent": "Asia"
      },
      {
        "name": "Cook Islands",
        "phoneCode": "+682",
        "code": "CK",
        "continent": "Asia"
      },
      {
        "name": "Costa Rica",
        "phoneCode": "+506",
        "code": "CR",
        "continent": "Asia"
      },
      {
        "name": "Cote d'Ivoire",
        "phoneCode": "+225",
        "code": "CI",
        "continent": "Asia"
      },
      {
        "name": "Croatia",
        "phoneCode": "+385",
        "code": "HR",
        "continent": "Asia"
      },
      {
        "name": "Cuba",
        "phoneCode": "+53",
        "code": "CU",
        "continent": "Asia"
      },
      {
        "name": "Cyprus",
        "phoneCode": "+357",
        "code": "CY",
        "continent": "Asia"
      },
      {
        "name": "Czech Republic",
        "phoneCode": "+420",
        "code": "CZ",
        "continent": "Asia"
      },
      {
        "name": "Denmark",
        "phoneCode": "+45",
        "code": "DK",
        "continent": "Asia"
      },
      {
        "name": "Djibouti",
        "phoneCode": "+253",
        "code": "DJ",
        "continent": "Asia"
      },
      {
        "name": "Dominica",
        "phoneCode": "+1767",
        "code": "DM",
        "continent": "Asia"
      },
      {
        "name": "Dominican Republic",
        "phoneCode": "+1849",
        "code": "DO",
        "continent": "Asia"
      },
      {
        "name": "Ecuador",
        "phoneCode": "+593",
        "code": "EC",
        "continent": "Asia"
      },
      {
        "name": "Egypt",
        "phoneCode": "+20",
        "code": "EG",
        "continent": "Asia"
      },
      {
        "name": "El Salvador",
        "phoneCode": "+503",
        "code": "SV",
        "continent": "Asia"
      },
      {
        "name": "Equatorial Guinea",
        "phoneCode": "+240",
        "code": "GQ",
        "continent": "Asia"
      },
      {
        "name": "Eritrea",
        "phoneCode": "+291",
        "code": "ER",
        "continent": "Asia"
      },
      {
        "name": "Estonia",
        "phoneCode": "+372",
        "code": "EE",
        "continent": "Asia"
      },
      {
        "name": "Ethiopia",
        "phoneCode": "+251",
        "code": "ET",
        "continent": "Asia"
      },
      {
        "name": "Falkland Islands (Malvinas)",
        "phoneCode": "+500",
        "code": "FK",
        "continent": "Asia"
      },
      {
        "name": "Faroe Islands",
        "phoneCode": "+298",
        "code": "FO",
        "continent": "Asia"
      },
      {
        "name": "Fiji",
        "phoneCode": "+679",
        "code": "FJ",
        "continent": "Asia"
      },
      {
        "name": "Finland",
        "phoneCode": "+358",
        "code": "FI",
        "continent": "Asia"
      },
      {
        "name": "France",
        "phoneCode": "+33",
        "code": "FR",
        "continent": "Asia"
      },
      {
        "name": "French Guiana",
        "phoneCode": "+594",
        "code": "GF",
        "continent": "Asia"
      },
      {
        "name": "French Polynesia",
        "phoneCode": "+689",
        "code": "PF",
        "continent": "Asia"
      },
      {
        "name": "Gabon",
        "phoneCode": "+241",
        "code": "GA",
        "continent": "Asia"
      },
      {
        "name": "Gambia",
        "phoneCode": "+220",
        "code": "GM",
        "continent": "Asia"
      },
      {
        "name": "Georgia",
        "phoneCode": "+995",
        "code": "GE",
        "continent": "Asia"
      },
      {
        "name": "Germany",
        "phoneCode": "+49",
        "code": "DE",
        "continent": "Asia"
      },
      {
        "name": "Ghana",
        "phoneCode": "+233",
        "code": "GH",
        "continent": "Asia"
      },
      {
        "name": "Gibraltar",
        "phoneCode": "+350",
        "code": "GI",
        "continent": "Asia"
      },
      {
        "name": "Greece",
        "phoneCode": "+30",
        "code": "GR",
        "continent": "Asia"
      },
      {
        "name": "Greenland",
        "phoneCode": "+299",
        "code": "GL",
        "continent": "Asia"
      },
      {
        "name": "Grenada",
        "phoneCode": "+1473",
        "code": "GD",
        "continent": "Asia"
      },
      {
        "name": "Guadeloupe",
        "phoneCode": "+590",
        "code": "GP",
        "continent": "Asia"
      },
      {
        "name": "Guam",
        "phoneCode": "+1671",
        "code": "GU",
        "continent": "Asia"
      },
      {
        "name": "Guatemala",
        "phoneCode": "+502",
        "code": "GT",
        "continent": "Asia"
      },
      {
        "name": "Guernsey",
        "phoneCode": "+44",
        "code": "GG",
        "continent": "Asia"
      },
      {
        "name": "Guinea",
        "phoneCode": "+224",
        "code": "GN",
        "continent": "Asia"
      },
      {
        "name": "Guinea-Bissau",
        "phoneCode": "+245",
        "code": "GW",
        "continent": "Asia"
      },
      {
        "name": "Guyana",
        "phoneCode": "+595",
        "code": "GY",
        "continent": "Asia"
      },
      {
        "name": "Haiti",
        "phoneCode": "+509",
        "code": "HT",
        "continent": "Asia"
      },
      {
        "name": "Holy See (Vatican City State)",
        "phoneCode": "+379",
        "code": "VA",
        "continent": "Asia"
      },
      {
        "name": "Honduras",
        "phoneCode": "+504",
        "code": "HN",
        "continent": "Asia"
      },
      {
        "name": "Hong Kong",
        "phoneCode": "+852",
        "code": "HK",
        "continent": "Asia"
      },
      {
        "name": "Hungary",
        "phoneCode": "+36",
        "code": "HU",
        "continent": "Asia"
      },
      {
        "name": "Iceland",
        "phoneCode": "+354",
        "code": "IS",
        "continent": "Asia"
      },
      {
        "name": "India",
        "phoneCode": "+91",
        "code": "IN",
        "continent": "Asia"
      },
      {
        "name": "Indonesia",
        "phoneCode": "+62",
        "code": "ID",
        "continent": "Asia"
      },
      {
        "name": "Iran, Islamic Republic of Persian Gulf",
        "phoneCode": "+98",
        "code": "IR",
        "continent": "Asia"
      },
      {
        "name": "Iraq",
        "phoneCode": "+964",
        "code": "IQ",
        "continent": "Asia"
      },
      {
        "name": "Ireland",
        "phoneCode": "+353",
        "code": "IE",
        "continent": "Asia"
      },
      {
        "name": "Isle of Man",
        "phoneCode": "+44",
        "code": "IM",
        "continent": "Asia"
      },
      {
        "name": "Israel",
        "phoneCode": "+972",
        "code": "IL",
        "continent": "Asia"
      },
      {
        "name": "Italy",
        "phoneCode": "+39",
        "code": "IT",
        "continent": "Asia"
      },
      {
        "name": "Jamaica",
        "phoneCode": "+1876",
        "code": "JM",
        "continent": "Asia"
      },
      {
        "name": "Japan",
        "phoneCode": "+81",
        "code": "JP",
        "continent": "Asia"
      },
      {
        "name": "Jersey",
        "phoneCode": "+44",
        "code": "JE",
        "continent": "Asia"
      },
      {
        "name": "Jordan",
        "phoneCode": "+962",
        "code": "JO",
        "continent": "Asia"
      },
      {
        "name": "Kazakhstan",
        "phoneCode": "+77",
        "code": "KZ",
        "continent": "Asia"
      },
      {
        "name": "Kenya",
        "phoneCode": "+254",
        "code": "KE",
        "continent": "Asia"
      },
      {
        "name": "Kiribati",
        "phoneCode": "+686",
        "code": "KI",
        "continent": "Asia"
      },
      {
        "name": "Korea, Democratic People's Republic of Korea",
        "phoneCode": "+850",
        "code": "KP",
        "continent": "Asia"
      },
      {
        "name": "Korea, Republic of South Korea",
        "phoneCode": "+82",
        "code": "KR",
        "continent": "Asia"
      },
      {
        "name": "Kuwait",
        "phoneCode": "+965",
        "code": "KW",
        "continent": "Asia"
      },
      {
        "name": "Kyrgyzstan",
        "phoneCode": "+996",
        "code": "KG",
        "continent": "Asia"
      },
      {
        "name": "Laos",
        "phoneCode": "+856",
        "code": "LA",
        "continent": "Asia"
      },
      {
        "name": "Latvia",
        "phoneCode": "+371",
        "code": "LV",
        "continent": "Asia"
      },
      {
        "name": "Lebanon",
        "phoneCode": "+961",
        "code": "LB",
        "continent": "Asia"
      },
      {
        "name": "Lesotho",
        "phoneCode": "+266",
        "code": "LS",
        "continent": "Asia"
      },
      {
        "name": "Liberia",
        "phoneCode": "+231",
        "code": "LR",
        "continent": "Asia"
      },
      {
        "name": "Libyan Arab Jamahiriya",
        "phoneCode": "+218",
        "code": "LY",
        "continent": "Asia"
      },
      {
        "name": "Liechtenstein",
        "phoneCode": "+423",
        "code": "LI",
        "continent": "Asia"
      },
      {
        "name": "Lithuania",
        "phoneCode": "+370",
        "code": "LT",
        "continent": "Asia"
      },
      {
        "name": "Luxembourg",
        "phoneCode": "+352",
        "code": "LU",
        "continent": "Asia"
      },
      {
        "name": "Macao",
        "phoneCode": "+853",
        "code": "MO",
        "continent": "Asia"
      },
      {
        "name": "Macedonia",
        "phoneCode": "+389",
        "code": "MK",
        "continent": "Asia"
      },
      {
        "name": "Madagascar",
        "phoneCode": "+261",
        "code": "MG",
        "continent": "Asia"
      },
      {
        "name": "Malawi",
        "phoneCode": "+265",
        "code": "MW",
        "continent": "Asia"
      },
      {
        "name": "Malaysia",
        "phoneCode": "+60",
        "code": "MY",
        "continent": "Asia"
      },
      {
        "name": "Maldives",
        "phoneCode": "+960",
        "code": "MV",
        "continent": "Asia"
      },
      {
        "name": "Mali",
        "phoneCode": "+223",
        "code": "ML",
        "continent": "Asia"
      },
      {
        "name": "Malta",
        "phoneCode": "+356",
        "code": "MT",
        "continent": "Asia"
      },
      {
        "name": "Marshall Islands",
        "phoneCode": "+692",
        "code": "MH",
        "continent": "Asia"
      },
      {
        "name": "Martinique",
        "phoneCode": "+596",
        "code": "MQ",
        "continent": "Asia"
      },
      {
        "name": "Mauritania",
        "phoneCode": "+222",
        "code": "MR",
        "continent": "Asia"
      },
      {
        "name": "Mauritius",
        "phoneCode": "+230",
        "code": "MU",
        "continent": "Asia"
      },
      {
        "name": "Mayotte",
        "phoneCode": "+262",
        "code": "YT",
        "continent": "Asia"
      },
      {
        "name": "Mexico",
        "phoneCode": "+52",
        "code": "MX",
        "continent": "Asia"
      },
      {
        "name": "Micronesia, Federated States of Micronesia",
        "phoneCode": "+691",
        "code": "FM",
        "continent": "Asia"
      },
      {
        "name": "Moldova",
        "phoneCode": "+373",
        "code": "MD",
        "continent": "Asia"
      },
      {
        "name": "Monaco",
        "phoneCode": "+377",
        "code": "MC",
        "continent": "Asia"
      },
      {
        "name": "Mongolia",
        "phoneCode": "+976",
        "code": "MN",
        "continent": "Asia"
      },
      {
        "name": "Montenegro",
        "phoneCode": "+382",
        "code": "ME",
        "continent": "Asia"
      },
      {
        "name": "Montserrat",
        "phoneCode": "+1664",
        "code": "MS",
        "continent": "Asia"
      },
      {
        "name": "Morocco",
        "phoneCode": "+212",
        "code": "MA",
        "continent": "Asia"
      },
      {
        "name": "Mozambique",
        "phoneCode": "+258",
        "code": "MZ",
        "continent": "Asia"
      },
      {
        "name": "Myanmar",
        "phoneCode": "+95",
        "code": "MM",
        "continent": "Asia"
      },
      {
        "name": "Namibia",
        "phoneCode": "+264",
        "code": "NA",
        "continent": "Asia"
      },
      {
        "name": "Nauru",
        "phoneCode": "+674",
        "code": "NR",
        "continent": "Asia"
      },
      {
        "name": "Nepal",
        "phoneCode": "+977",
        "code": "NP",
        "continent": "Asia"
      },
      {
        "name": "Netherlands",
        "phoneCode": "+31",
        "code": "NL",
        "continent": "Asia"
      },
      {
        "name": "Netherlands Antilles",
        "phoneCode": "+599",
        "code": "AN",
        "continent": "Asia"
      },
      {
        "name": "New Caledonia",
        "phoneCode": "+687",
        "code": "NC",
        "continent": "Asia"
      },
      {
        "name": "New Zealand",
        "phoneCode": "+64",
        "code": "NZ",
        "continent": "Asia"
      },
      {
        "name": "Nicaragua",
        "phoneCode": "+505",
        "code": "NI",
        "continent": "Asia"
      },
      {
        "name": "Niger",
        "phoneCode": "+227",
        "code": "NE",
        "continent": "Asia"
      },
      {
        "name": "Nigeria",
        "phoneCode": "+234",
        "code": "NG",
        "continent": "Asia"
      },
      {
        "name": "Niue",
        "phoneCode": "+683",
        "code": "NU",
        "continent": "Asia"
      },
      {
        "name": "Norfolk Island",
        "phoneCode": "+672",
        "code": "NF",
        "continent": "Asia"
      },
      {
        "name": "Northern Mariana Islands",
        "phoneCode": "+1670",
        "code": "MP",
        "continent": "Asia"
      },
      {
        "name": "Norway",
        "phoneCode": "+47",
        "code": "NO",
        "continent": "Asia"
      },
      {
        "name": "Oman",
        "phoneCode": "+968",
        "code": "OM",
        "continent": "Asia"
      },
      {
        "name": "Pakistan",
        "phoneCode": "+92",
        "code": "PK",
        "continent": "Asia"
      },
      {
        "name": "Palau",
        "phoneCode": "+680",
        "code": "PW",
        "continent": "Asia"
      },
      {
        "name": "Palestinian Territory, Occupied",
        "phoneCode": "+970",
        "code": "PS",
        "continent": "Asia"
      },
      {
        "name": "Panama",
        "phoneCode": "+507",
        "code": "PA",
        "continent": "Asia"
      },
      {
        "name": "Papua New Guinea",
        "phoneCode": "+675",
        "code": "PG",
        "continent": "Asia"
      },
      {
        "name": "Paraguay",
        "phoneCode": "+595",
        "code": "PY",
        "continent": "Asia"
      },
      {
        "name": "Peru",
        "phoneCode": "+51",
        "code": "PE",
        "continent": "Asia"
      },
      {
        "name": "Philippines",
        "phoneCode": "+63",
        "code": "PH",
        "continent": "Asia"
      },
      {
        "name": "Pitcairn",
        "phoneCode": "+872",
        "code": "PN",
        "continent": "Asia"
      },
      {
        "name": "Poland",
        "phoneCode": "+48",
        "code": "PL",
        "continent": "Asia"
      },
      {
        "name": "Portugal",
        "phoneCode": "+351",
        "code": "PT",
        "continent": "Asia"
      },
      {
        "name": "Puerto Rico",
        "phoneCode": "+1939",
        "code": "PR",
        "continent": "Asia"
      },
      {
        "name": "Qatar",
        "phoneCode": "+974",
        "code": "QA",
        "continent": "Asia"
      },
      {
        "name": "Romania",
        "phoneCode": "+40",
        "code": "RO",
        "continent": "Asia"
      },
      {
        "name": "Russia",
        "phoneCode": "+7",
        "code": "RU",
        "continent": "Asia"
      },
      {
        "name": "Rwanda",
        "phoneCode": "+250",
        "code": "RW",
        "continent": "Asia"
      },
      {
        "name": "Reunion",
        "phoneCode": "+262",
        "code": "RE",
        "continent": "Asia"
      },
      {
        "name": "Saint Barthelemy",
        "phoneCode": "+590",
        "code": "BL",
        "continent": "Asia"
      },
      {
        "name": "Saint Helena, Ascension and Tristan Da Cunha",
        "phoneCode": "+290",
        "code": "SH",
        "continent": "Asia"
      },
      {
        "name": "Saint Kitts and Nevis",
        "phoneCode": "+1869",
        "code": "KN",
        "continent": "Asia"
      },
      {
        "name": "Saint Lucia",
        "phoneCode": "+1758",
        "code": "LC",
        "continent": "Asia"
      },
      {
        "name": "Saint Martin",
        "phoneCode": "+590",
        "code": "MF",
        "continent": "Asia"
      },
      {
        "name": "Saint Pierre and Miquelon",
        "phoneCode": "+508",
        "code": "PM",
        "continent": "Asia"
      },
      {
        "name": "Saint Vincent and the Grenadines",
        "phoneCode": "+1784",
        "code": "VC",
        "continent": "Asia"
      },
      {
        "name": "Samoa",
        "phoneCode": "+685",
        "code": "WS",
        "continent": "Asia"
      },
      {
        "name": "San Marino",
        "phoneCode": "+378",
        "code": "SM",
        "continent": "Asia"
      },
      {
        "name": "Sao Tome and Principe",
        "phoneCode": "+239",
        "code": "ST",
        "continent": "Asia"
      },
      {
        "name": "Saudi Arabia",
        "phoneCode": "+966",
        "code": "SA",
        "continent": "Asia"
      },
      {
        "name": "Senegal",
        "phoneCode": "+221",
        "code": "SN",
        "continent": "Asia"
      },
      {
        "name": "Serbia",
        "phoneCode": "+381",
        "code": "RS",
        "continent": "Asia"
      },
      {
        "name": "Seychelles",
        "phoneCode": "+248",
        "code": "SC",
        "continent": "Asia"
      },
      {
        "name": "Sierra Leone",
        "phoneCode": "+232",
        "code": "SL",
        "continent": "Asia"
      },
      {
        "name": "Singapore",
        "phoneCode": "+65",
        "code": "SG",
        "continent": "Asia"
      },
      {
        "name": "Slovakia",
        "phoneCode": "+421",
        "code": "SK",
        "continent": "Asia"
      },
      {
        "name": "Slovenia",
        "phoneCode": "+386",
        "code": "SI",
        "continent": "Asia"
      },
      {
        "name": "Solomon Islands",
        "phoneCode": "+677",
        "code": "SB",
        "continent": "Asia"
      },
      {
        "name": "Somalia",
        "phoneCode": "+252",
        "code": "SO",
        "continent": "Asia"
      },
      {
        "name": "South Africa",
        "phoneCode": "+27",
        "code": "ZA",
        "continent": "Asia"
      },
      {
        "name": "South Sudan",
        "phoneCode": "+211",
        "code": "SS",
        "continent": "Asia"
      },
      {
        "name": "South Georgia and the South Sandwich Islands",
        "phoneCode": "+500",
        "code": "GS",
        "continent": "Asia"
      },
      {
        "name": "Spain",
        "phoneCode": "+34",
        "code": "ES",
        "continent": "Asia"
      },
      {
        "name": "Sri Lanka",
        "phoneCode": "+94",
        "code": "LK",
        "continent": "Asia"
      },
      {
        "name": "Sudan",
        "phoneCode": "+249",
        "code": "SD",
        "continent": "Asia"
      },
      {
        "name": "Suriname",
        "phoneCode": "+597",
        "code": "SR",
        "continent": "Asia"
      },
      {
        "name": "Svalbard and Jan Mayen",
        "phoneCode": "+47",
        "code": "SJ",
        "continent": "Asia"
      },
      {
        "name": "Swaziland",
        "phoneCode": "+268",
        "code": "SZ",
        "continent": "Asia"
      },
      {
        "name": "Sweden",
        "phoneCode": "+46",
        "code": "SE",
        "continent": "Asia"
      },
      {
        "name": "Switzerland",
        "phoneCode": "+41",
        "code": "CH",
        "continent": "Asia"
      },
      {
        "name": "Syrian Arab Republic",
        "phoneCode": "+963",
        "code": "SY",
        "continent": "Asia"
      },
      {
        "name": "Taiwan",
        "phoneCode": "+886",
        "code": "TW",
        "continent": "Asia"
      },
      {
        "name": "Tajikistan",
        "phoneCode": "+992",
        "code": "TJ",
        "continent": "Asia"
      },
      {
        "name": "Tanzania, United Republic of Tanzania",
        "phoneCode": "+255",
        "code": "TZ",
        "continent": "Asia"
      },
      {
        "name": "Thailand",
        "phoneCode": "+66",
        "code": "TH",
        "continent": "Asia"
      },
      {
        "name": "Timor-Leste",
        "phoneCode": "+670",
        "code": "TL",
        "continent": "Asia"
      },
      {
        "name": "Togo",
        "phoneCode": "+228",
        "code": "TG",
        "continent": "Asia"
      },
      {
        "name": "Tokelau",
        "phoneCode": "+690",
        "code": "TK",
        "continent": "Asia"
      },
      {
        "name": "Tonga",
        "phoneCode": "+676",
        "code": "TO",
        "continent": "Asia"
      },
      {
        "name": "Trinidad and Tobago",
        "phoneCode": "+1868",
        "code": "TT",
        "continent": "Asia"
      },
      {
        "name": "Tunisia",
        "phoneCode": "+216",
        "code": "TN",
        "continent": "Asia"
      },
      {
        "name": "Turkey",
        "phoneCode": "+90",
        "code": "TR",
        "continent": "Asia"
      },
      {
        "name": "Turkmenistan",
        "phoneCode": "+993",
        "code": "TM",
        "continent": "Asia"
      },
      {
        "name": "Turks and Caicos Islands",
        "phoneCode": "+1649",
        "code": "TC",
        "continent": "Asia"
      },
      {
        "name": "Tuvalu",
        "phoneCode": "+688",
        "code": "TV",
        "continent": "Asia"
      },
      {
        "name": "Uganda",
        "phoneCode": "+256",
        "code": "UG",
        "continent": "Asia"
      },
      {
        "name": "Ukraine",
        "phoneCode": "+380",
        "code": "UA",
        "continent": "Asia"
      },
      {
        "name": "United Arab Emirates",
        "phoneCode": "+971",
        "code": "AE",
        "continent": "Asia"
      },
      {
        "name": "United Kingdom",
        "phoneCode": "+44",
        "code": "GB",
        "continent": "Asia"
      },
      {
        "name": "United States",
        "phoneCode": "+1",
        "code": "US",
        "continent": "Asia"
      },
      {
        "name": "Uruguay",
        "phoneCode": "+598",
        "code": "UY",
        "continent": "Asia"
      },
      {
        "name": "Uzbekistan",
        "phoneCode": "+998",
        "code": "UZ",
        "continent": "Asia"
      },
      {
        "name": "Vanuatu",
        "phoneCode": "+678",
        "code": "VU",
        "continent": "Asia"
      },
      {
        "name": "Venezuela, Bolivarian Republic of Venezuela",
        "phoneCode": "+58",
        "code": "VE",
        "continent": "Asia"
      },
      {
        "name": "Vietnam",
        "phoneCode": "+84",
        "code": "VN",
        "continent": "Asia"
      },
      {
        "name": "Virgin Islands, British",
        "phoneCode": "+1284",
        "code": "VG",
        "continent": "Asia"
      },
      {
        "name": "Virgin Islands, U.S.",
        "phoneCode": "+1340",
        "code": "VI",
        "continent": "Asia"
      },
      {
        "name": "Wallis and Futuna",
        "phoneCode": "+681",
        "code": "WF",
        "continent": "Asia"
      },
      {
        "name": "Yemen",
        "phoneCode": "+967",
        "code": "YE",
        "continent": "Asia"
      },
      {
        "name": "Zambia",
        "phoneCode": "+260",
        "code": "ZM",
        "continent": "Asia"
      },
      {
        "name": "Zimbabwe",
        "phoneCode": "+263",
        "code": "ZW",
        "continent": "Asia"
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
