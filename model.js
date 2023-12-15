export const flight = {
  flightInfo: {},
  search: {
    query: "",
    result: [],
  },
};

export const loadFlightsResults = async function (query) {
  try {
    const data = await aramaAPI();

    //cikan flight sonuclarini alip kendi objemize ekliyoruz. Ileride view burayi kullanicak
    flight.search.query = query; //search keye göre arama yapip liste gertirecek
    flight.search.result = data.data.flights.map((flg) => {
      return {
        id: flg.id,
        model: flg.model,
        seat: flg.seat,
        image: flg.image_url,
      };
    });
  } catch (err) {
    throw err;
  }
};

export const loadFlight = async function () {
  const data = await aramaAPI(); //idye gore arama yapip tiklanilan flighti getirecek
};
