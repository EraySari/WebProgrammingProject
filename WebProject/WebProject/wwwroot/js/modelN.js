export const flight = {
    flightInfo: {},
    search: {
        query: "",
        result: [],
    },
};


export const loadFlightsResults = async function (queryFrom,queryTo) {
    try {
        //girilen query degerine gore api cagiracak
        const res = await fetch(`https://localhost:7090/api/UcakApi?depature=${queryFrom}&arrival=${queryTo}`); 
        const data = await res.json();
        console.log(data);

        //cikan flight sonuclarini alip kendi objemize ekliyoruz. Ileride view burayi kullanicak
        flight.search.result = data.map((flg) => {
            return {
                id: flg.ucakID,
                departure: flg.departure,
                arrival: flg.arrival,
                planeModel: flg.planeModel,
                price: flg.price,
                seat: flg.seat,
                time: flg.dateTime,
                users: flg.users,
                reservedSeat:[],
            };
        });
    } catch (err) {
        throw err;
    }
};

export const loadFlight = function (id) {
    const data = flight.search.result.find((flg) => flg.id === Number(id)); //idye gore arama yapip tiklanilan flighti getirecek
    return data;
};
