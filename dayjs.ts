import * as dayjs from "dayjs";
import * as advancedFormat from "dayjs/plugin/advancedFormat";
// import * as customParseFormat from "dayjs/plugin/customParseFormat";
import * as isoWeek from "dayjs/plugin/isoWeek";
import * as timezone from "dayjs/plugin/timezone";
import * as utc from "dayjs/plugin/utc";

dayjs.extend(advancedFormat);
// dayjs.extend(customParseFormat);
dayjs.extend(isoWeek);
dayjs.extend(timezone);
dayjs.extend(utc);

const d = dayjs.unix(Number(1614524400)).tz("Asia/Tokyo");
console.log(d.toISOString());
console.log(d.format("YYYY-W"));
