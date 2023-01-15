import m from "moment";
import * as moment from "moment-timezone";

console.log(m("2022-01-01T01:00:00Z").tz("Asia/Tokyo"));
console.log(moment.tz("2022-01-01T01:00:00Z", "Asia/Tokyo"));
