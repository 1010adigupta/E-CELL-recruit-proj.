const api_URL = 'https://calendarific.com/api/v2/holidays?api_key=5c995b976ab704fa9fefa69954e7f05c1fee7b79&country=IN&year=2021&month=8'
async function getholidays() {
    const response = await fetch(api_URL);
    const data = await response.json();
    console.log(data);
}
const obj1 = JSON.parse('{"name":"Friendship Day","description":"Friendship Day is a observance in India","country":{"id":"in","name":"India"},"date":{"iso":"2021-08-01","datetime":{"year":2021,"month":8,"day":1}},"type":["Observance"],"locations":"All","states":"All"}');
const obj2 = JSON.parse('{"name":"Independence Day","description":"Indias Independence Day is an annual gazetted holiday on August 15 to commemorate the day India became an independent nation.","country":{"id":"in","name":"India"},"date":{"iso":"2021-08-15","datetime":{"year":2021,"month":8,"day":15}},"type":["National holiday"],"locations":"All","states":"All"}');
const obj3 = JSON.parse('{"name":"Parsi New Year","description":"Parsi New Year is a restricted holiday in India","country":{"id":"in","name":"India"},"date":{"iso":"2021-08-16","datetime":{"year":2021,"month":8,"day":16}},"type":["Optional holiday"],"locations":"All","states":"All"}');
const obj4 = JSON.parse('{"name":"Muharram","description":"Muharram, or the Islamic New Year, is a public holiday in India.","country":{"id":"in","name":"India"},"date":{"iso":"2021-08-20","datetime":{"year":2021,"month":8,"day":20}},"type":["National holiday"],"locations":"All","states":"All"}');
const obj5 = JSON.parse('{"name":"Onam","description":"Onam is a restricted holiday in India","country":{"id":"in","name":"India"},"date":{"iso":"2021-08-21","datetime":{"year":2021,"month":8,"day":21}},"type":["Hinduism","Optional holiday"],"locations":"All","states":"All"}');
const obj6 = JSON.parse('{"name":"Raksha Bandhan (Rakhi)","description":"Raksha Bandhan is a Hindu festival that is celebrated on the full moon of the Hindu month of Shravana (Shravan Poornima). The day is also sometimes referred to as Brother and Sister Day because it honors the relationship between brother and sister.","country":{"id":"in","name":"India"},"date":{"iso":"2021-08-22","datetime":{"year":2021,"month":8,"day":22}},"type":["Hinduism","Optional holiday"],"locations":"All","states":"All"}');
const obj7 = JSON.parse('{"name":"Janmashtami","description":"Krishna Janmashtami is a Hindu festival that celebrates the birth of Krishna, the eighth incarnation of the god Vishnu. It is celebrated on the eighth day of the Hindu month of Bhadrava (Bhadrapada), which is usually in August or September.","country":{"id":"in","name":"India"},"date":{"iso":"2021-08-30","datetime":{"year":2021,"month":8,"day":30}},"type":["National holiday","Hinduism"],"locations":"All","states":"All"}');
const obj8 = JSON.parse('{"name":"Janmashtami (Smarta)","description":"Janmashtami (Smarta) is a restricted holiday in India","country":{"id":"in","name":"India"},"date":{"iso":"2021-08-30","datetime":{"year":2021,"month":8,"day":30}},"type":["Hinduism","Optional holiday"],"locations":"All","states":"All"}');

function dis1() {
    document.innerHTML = obj1.discription;
    document.innerHTML = obj2.discription;
    document.innerHTML = obj3.discription;
    document.innerHTML = obj4.discription;
    document.innerHTML = obj5.discription;
    document.innerHTML = obj6.discription;
    document.innerHTML = obj7.discription;
    document.innerHTML = obj8.discription;
}
