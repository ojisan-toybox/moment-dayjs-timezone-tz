import m from "moment";
import * as moment from "moment-timezone";

// console.log(moment("2022-04-01 09:00:00").tz("Asia/Tokyo"));
// console.log(moment.tz("2022-04-01 09:00:00", "Asia/Tokyo"));

///////
console.log(moment.tz("2021-03-01", "Asia/Tokyo").toISOString());
console.log(moment("2021-03-01").tz("Asia/Tokyo").toISOString());
console.log(moment.tz("2021-03-01", "Asia/Tokyo").format("YYYY年 第W週"));
console.log(moment("2021-03-01").tz("Asia/Tokyo").format("YYYY年 第W週"));
const d = moment.unix(1614524400).tz("Asia/Tokyo");
console.log(d.toISOString());
console.log(d.format("YYYY年 第W週"));
// console.log(moment("2021-02-28T15:00:00.000Z").format("YYYY年 第W週"));
// console.log(moment.tz("2021-03-01", "Asia/Tokyo").format("YYYY年 第W週"));
m.now();
m().day;
