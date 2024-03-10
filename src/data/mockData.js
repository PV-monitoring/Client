import { tokens } from "../theme";
import { useState, useEffect } from "react";
import socket from "../utils/socket.js";

export const mockDataTeam = [
  {
    id: 1,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    access: "manager",
  },
  {
    id: 3,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    access: "user",
  },
  {
    id: 4,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    access: "admin",
  },
  {
    id: 5,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    access: "user",
  },
  {
    id: 6,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    access: "manager",
  },
  {
    id: 7,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    access: "user",
  },
  {
    id: 8,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    access: "user",
  },
  {
    id: 9,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    access: "admin",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    address: "Colombo",
    city: "Colombo",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    address: "Colombo",
    city: "Colombo",
    zipCode: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    address: "Colombo",
    city: "Colombo",
    zipCode: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    address: "Colombo",
    city: "Colombo",
    zipCode: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    address: "Colombo",
    city: "Colombo",
    zipCode: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    address: "Colombo",
    city: "Colombo",
    zipCode: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    address: "Colombo",
    city: "Colombo",
    zipCode: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    address: "Colombo",
    city: "Colombo",
    zipCode: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    address: "Colombo",
    city: "Colombo",
    zipCode: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    address: "Colombo",
    city: "Colombo",
    zipCode: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    name: "Kamal",
    email: "k@gmail.com",
    age: 35,
    phone: "+94 77821-5454",
    address: "Colombo",
    city: "Colombo",
    zipCode: "1234",
    registrarId: 92197,
  },
];

// export const mockDataInvoices = [
//   {
//     id: 1,
//     name: "Medawewa",
//     capacity: "30kW",
//     status: "1kW",
//     location: "18 Ketawala-Galauda Rd, Galauda, Sri Lanka",
//     created_time: "03/12/2022",
//   },
//   {
//     id: 2,
//     name: "Medawewa",
//     capacity: "30kW",
//     status: "1kW",
//     location: "18 Ketawala-Galauda Rd, Galauda, Sri Lanka",
//     created_time: "06/15/2021",
//   },
//   {
//     id: 3,
//     name: "Medawewa",
//     capacity: "30kW",
//     status: "1kW",
//     location: "18 Ketawala-Galauda Rd, Galauda, Sri Lanka",
//     created_time: "05/02/2022",
//   },
//   {
//     id: 4,
//     name: "Medawewa",
//     capacity: "30kW",
//     status: "1kW",
//     location: "18 Ketawala-Galauda Rd, Galauda, Sri Lanka",
//     created_time: "03/21/2022",
//   },
//   {
//     id: 5,
//     name: "Medawewa",
//     capacity: "30kW",
//     status: "1kW",
//     location: "18 Ketawala-Galauda Rd, Galauda, Sri Lanka",
//     created_time: "01/12/2021",
//   },
//   {
//     id: 6,
//     name: "Medawewa",
//     capacity: "30kW",
//     status: "1kW",
//     location: "18 Ketawala-Galauda Rd, Galauda, Sri Lanka",
//     created_time: "11/02/2022",
//   },
//   {
//     id: 7,
//     name: "Medawewa",
//     capacity: "30kW",
//     status: "1kW",
//     location: "18 Ketawala-Galauda Rd, Galauda, Sri Lanka",
//     created_time: "02/11/2022",
//   },
//   {
//     id: 8,
//     name: "Medawewa",
//     capacity: "30kW",
//     status: "1kW",
//     location: "18 Ketawala-Galauda Rd, Galauda, Sri Lanka",
//     created_time: "05/02/2021",
//   },
// ];

export const dynamicPlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Your server should emit a 'plantsData' event when there's new data
        socket.on("dataUpdate", (data) => {
          console.log("Received plant data:", data);
          setPlants(data);
        });
      } catch (error) {
        console.error("Error fetching plant data:", error);
      }
    };

    fetchData();

    return () => {
      // Clean up event listeners on component unmount
      socket.off("dataUpdate");
    };
  }, []); // Empty dependency array to run the effect only once

  return plants;
};

// Export a function that takes dynamic data as a parameter
// Export a function that takes dynamic data as a parameter
export const getMockDataInvoices = (dynamicData) => {
  // Transform dynamic data if needed
  const transformedData = dynamicData.map((plant) => ({
    id: plant.plant_id,
    name: plant.plant_name,
    capacity: plant.capacity,
    power: plant.pac,
    status: getStatusString(plant.status), // Map status to corresponding string
    location: plant.address,
    created_time: plant.create_time,
  }));

  return transformedData;
};

// Function to map status values to corresponding strings
const getStatusString = (status) => {
  switch (status) {
    case -1:
      return "Offline";
    case 0:
      return "Waiting";
    case 1:
      return "Generating";
    case 2:
      return "Fault";
    default:
      return status; // Return the status as is if not recognized
  }
};

export const mockTransactions = [
  {
    plantId: "S0001",
    plant: "Mahiyanganaya",
    date: "2023-09-01",
    fault: "VAC",
  },
  {
    plantId: "S0002",
    plant: "Dhammananda",
    date: "2023-11-01",
    fault: "FAC",
  },
  {
    plantId: "S0001",
    plant: "Mahiyanganaya",
    date: "2023-09-01",
    fault: "VAC",
  },
  {
    plantId: "S0001",
    plant: "Mahiyanganaya",
    date: "2023-09-01",
    fault: "VAC",
  },
  {
    plantId: "S0001",
    plant: "Mahiyanganaya",
    date: "2023-09-01",
    fault: "VAC",
  },
];

export const mockBarData = [
  {
    month: "Jan",
    Mahawela: 137,
    MahawelaColor: "hsl(229, 70%, 50%)",
    Mahinyanganaya: 96,
    MahinyanganayaColor: "hsl(296, 70%, 50%)",
    Udawela: 72,
    UdawelaColor: "hsl(97, 70%, 50%)",
    Dhammananda: 140,
    DhammanandaColor: "hsl(340, 70%, 50%)",
  },
  {
    month: "Feb",
    Mahawela: 55,
    MahawelaColor: "hsl(307, 70%, 50%)",
    Mahinyanganaya: 28,
    MahinyanganayaColor: "hsl(111, 70%, 50%)",
    Udawela: 58,
    UdawelaColor: "hsl(273, 70%, 50%)",
    Dhammananda: 29,
    DhammanandaColor: "hsl(275, 70%, 50%)",
  },
  {
    month: "Mar",
    Mahawela: 109,
    MahawelaColor: "hsl(72, 70%, 50%)",
    Mahinyanganaya: 23,
    MahinyanganayaColor: "hsl(96, 70%, 50%)",
    Udawela: 34,
    UdawelaColor: "hsl(106, 70%, 50%)",
    Dhammananda: 152,
    DhammanandaColor: "hsl(256, 70%, 50%)",
  },
  {
    month: "Aprl",
    Mahawela: 133,
    MahawelaColor: "hsl(257, 70%, 50%)",
    Mahinyanganaya: 52,
    MahinyanganayaColor: "hsl(326, 70%, 50%)",
    Udawela: 43,
    UdawelaColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "Actual Generation",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "Jan",
        y: 101,
      },
      {
        x: "Feb",
        y: 75,
      },
      {
        x: "March",
        y: 36,
      },
      {
        x: "April",
        y: 216,
      },
      {
        x: "May",
        y: 35,
      },
      {
        x: "June",
        y: 236,
      },
      {
        x: "July",
        y: 88,
      },
      {
        x: "Aug",
        y: 232,
      },
      {
        x: "Sept",
        y: 281,
      },
      {
        x: "Oct",
        y: 1,
      },
      {
        x: "Nov",
        y: 35,
      },
      {
        x: "Dec",
        y: 14,
      },
    ],
  },
  {
    id: "Expected Generation",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "Jan",
        y: 10,
      },
      {
        x: "Feb",
        y: 134,
      },
      {
        x: "March",
        y: 210,
      },
      {
        x: "April",
        y: 26,
      },
      {
        x: "May",
        y: 135,
      },
      {
        x: "June",
        y: 36,
      },
      {
        x: "July",
        y: 81,
      },
      {
        x: "Aug",
        y: 132,
      },
      {
        x: "Sept",
        y: 181,
      },
      {
        x: "Oct",
        y: 11,
      },
      {
        x: "Nov",
        y: 215,
      },
      {
        x: "Dec",
        y: 114,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
