import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as useSearch, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Flower2, c as Building2, i as Link2, o as Copy, r as Printer, s as Check, t as Truck } from "../_libs/lucide-react.mjs";
import { a as ResponsiveContainer, i as Bar, n as YAxis, o as Tooltip, r as XAxis, t as BarChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Crz2PPZ7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PULLED = {
	sales: "Sat Oct 10, 2026 · 6:30 AM ET",
	routeDay: "Thu Oct 8",
	routePulled: "Fri Oct 9 · 3:06 PM ET",
	geotabDay: "Thu Oct 8",
	geotabPulled: "Fri Oct 9 · 2:24 PM CT",
	sfRefreshDay: "Fri Oct 9",
	monthLabel: "October 2026",
	weekLabel: "Mon Oct 5 – Sat Oct 10"
};
var LOCATIONS = [
	{
		id: "toronto",
		name: "Toronto",
		totalUnits: 1350,
		inactive: 215,
		weekly: 16263.85,
		monthly: 70418.77,
		trial: 9,
		collectTrial: 5,
		pending: 8,
		wonMonth: 0,
		wonWeek: 0,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 0,
		lostMonthUnits: 0,
		lostWeekDeals: 0,
		lostWeekUnits: 0,
		cancelDeals: 10,
		cancelUnits: 13,
		cancelAmt: 773.45,
		cancelMoved: 0,
		sfDayUnits: 51,
		sfDayRows: 28,
		sfMtdUnits: 378,
		sfMtdRows: 246,
		routeDayCustomers: null,
		routeDayUnits: null,
		routeDayWindow: null,
		routeMtdCustomers: null,
		routeMtdUnits: null,
		routeMtdPending: null
	},
	{
		id: "puget-sound",
		name: "Puget Sound",
		routeName: "Seattle",
		totalUnits: 744,
		inactive: 117,
		weekly: 10562.68,
		monthly: 45737.23,
		trial: 22,
		collectTrial: 0,
		pending: 0,
		wonMonth: 0,
		wonWeek: 0,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 0,
		lostMonthUnits: 0,
		lostWeekDeals: 0,
		lostWeekUnits: 0,
		cancelDeals: 10,
		cancelUnits: 24,
		cancelAmt: 1818.22,
		cancelMoved: 0,
		sfDayUnits: 0,
		sfDayRows: 0,
		sfMtdUnits: 46,
		sfMtdRows: 36,
		routeDayCustomers: null,
		routeDayUnits: null,
		routeDayWindow: null,
		routeMtdCustomers: 37,
		routeMtdUnits: 45,
		routeMtdPending: 2
	},
	{
		id: "atlanta",
		name: "Atlanta",
		totalUnits: 555,
		inactive: 58,
		weekly: 11782.33,
		monthly: 51028.81,
		trial: 60,
		collectTrial: 0,
		pending: 1,
		wonMonth: 5,
		wonWeek: 4,
		trialsMonth: 60,
		trialsWeek: 44,
		lostMonthDeals: 0,
		lostMonthUnits: 0,
		lostWeekDeals: 0,
		lostWeekUnits: 0,
		cancelDeals: 2,
		cancelUnits: 5,
		cancelAmt: 460.9,
		cancelMoved: 2,
		sfDayUnits: 0,
		sfDayRows: 0,
		sfMtdUnits: 108,
		sfMtdRows: 55,
		routeDayCustomers: null,
		routeDayUnits: null,
		routeDayWindow: null,
		routeMtdCustomers: 72,
		routeMtdUnits: 129,
		routeMtdPending: 0
	},
	{
		id: "san-francisco",
		name: "San Francisco",
		totalUnits: 534,
		inactive: 72,
		weekly: 8094.25,
		monthly: 35046.8,
		trial: 217,
		collectTrial: 18,
		pending: 32,
		wonMonth: 0,
		wonWeek: 0,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 3,
		lostMonthUnits: 5,
		lostWeekDeals: 2,
		lostWeekUnits: 2,
		cancelDeals: 1,
		cancelUnits: 4,
		cancelAmt: 360.07,
		cancelMoved: 0,
		sfDayUnits: 0,
		sfDayRows: 0,
		sfMtdUnits: 106,
		sfMtdRows: 64,
		routeDayCustomers: 11,
		routeDayUnits: 23,
		routeDayWindow: "9:32 AM–3:01 PM",
		routeMtdCustomers: 74,
		routeMtdUnits: 120,
		routeMtdPending: 0
	},
	{
		id: "orange-county",
		name: "Orange County",
		totalUnits: 490,
		inactive: 28,
		weekly: 8021.88,
		monthly: 34734.26,
		trial: 306,
		collectTrial: 24,
		pending: 0,
		wonMonth: 0,
		wonWeek: 0,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 0,
		lostMonthUnits: 0,
		lostWeekDeals: 0,
		lostWeekUnits: 0,
		cancelDeals: 10,
		cancelUnits: 14,
		cancelAmt: 1152.24,
		cancelMoved: 2,
		sfDayUnits: 17,
		sfDayRows: 16,
		sfMtdUnits: 214,
		sfMtdRows: 128,
		routeDayCustomers: 1,
		routeDayUnits: 1,
		routeDayWindow: "11:54 AM",
		routeMtdCustomers: 90,
		routeMtdUnits: 157,
		routeMtdPending: 5
	},
	{
		id: "austin",
		name: "Austin",
		totalUnits: 482,
		inactive: 58,
		weekly: 7244.84,
		monthly: 31369.7,
		trial: 10,
		collectTrial: 0,
		pending: 21,
		wonMonth: 2,
		wonWeek: 0,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 4,
		lostMonthUnits: 10,
		lostWeekDeals: 1,
		lostWeekUnits: 1,
		cancelDeals: 6,
		cancelUnits: 13,
		cancelAmt: 993.81,
		cancelMoved: 0,
		sfDayUnits: 0,
		sfDayRows: 0,
		sfMtdUnits: 54,
		sfMtdRows: 42,
		routeDayCustomers: null,
		routeDayUnits: null,
		routeDayWindow: null,
		routeMtdCustomers: 28,
		routeMtdUnits: 36,
		routeMtdPending: 0
	},
	{
		id: "sao-paulo",
		name: "Sao Paulo",
		totalUnits: 482,
		inactive: 48,
		weekly: 8455.77,
		monthly: 36612.91,
		trial: 5,
		collectTrial: 0,
		pending: 0,
		wonMonth: 1,
		wonWeek: 0,
		trialsMonth: 3,
		trialsWeek: 3,
		lostMonthDeals: 4,
		lostMonthUnits: 6,
		lostWeekDeals: 3,
		lostWeekUnits: 3,
		cancelDeals: 0,
		cancelUnits: 0,
		cancelAmt: 0,
		cancelMoved: 0,
		sfDayUnits: 17,
		sfDayRows: 10,
		sfMtdUnits: 146,
		sfMtdRows: 109,
		routeDayCustomers: null,
		routeDayUnits: null,
		routeDayWindow: null,
		routeMtdCustomers: null,
		routeMtdUnits: null,
		routeMtdPending: null
	},
	{
		id: "denver",
		name: "Denver",
		totalUnits: 430,
		inactive: 53,
		weekly: 7366.89,
		monthly: 31900.23,
		trial: 2,
		collectTrial: 0,
		pending: 7,
		wonMonth: 0,
		wonWeek: 0,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 1,
		lostMonthUnits: 1,
		lostWeekDeals: 1,
		lostWeekUnits: 1,
		cancelDeals: 1,
		cancelUnits: 1,
		cancelAmt: 72.01,
		cancelMoved: 1,
		sfDayUnits: 36,
		sfDayRows: 22,
		sfMtdUnits: 252,
		sfMtdRows: 159,
		routeDayCustomers: 26,
		routeDayUnits: 40,
		routeDayWindow: "9:14 AM–2:34 PM",
		routeMtdCustomers: 137,
		routeMtdUnits: 216,
		routeMtdPending: 0
	},
	{
		id: "chicago",
		name: "Chicago",
		totalUnits: 424,
		inactive: 39,
		weekly: 6219.82,
		monthly: 26931.44,
		trial: 18,
		collectTrial: 0,
		pending: 0,
		wonMonth: 4,
		wonWeek: 3,
		trialsMonth: 1,
		trialsWeek: 0,
		lostMonthDeals: 0,
		lostMonthUnits: 0,
		lostWeekDeals: 0,
		lostWeekUnits: 0,
		cancelDeals: 0,
		cancelUnits: 0,
		cancelAmt: 0,
		cancelMoved: 0,
		sfDayUnits: 31,
		sfDayRows: 17,
		sfMtdUnits: 212,
		sfMtdRows: 132,
		routeDayCustomers: 36,
		routeDayUnits: 52,
		routeDayWindow: "9:40 AM–5:17 PM",
		routeMtdCustomers: 100,
		routeMtdUnits: 155,
		routeMtdPending: 0
	},
	{
		id: "san-diego",
		name: "San Diego",
		totalUnits: 420,
		inactive: 54,
		weekly: 6511.1,
		monthly: 28192.42,
		trial: 6,
		collectTrial: 0,
		pending: 1,
		wonMonth: 0,
		wonWeek: 0,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 0,
		lostMonthUnits: 0,
		lostWeekDeals: 0,
		lostWeekUnits: 0,
		cancelDeals: 0,
		cancelUnits: 0,
		cancelAmt: 0,
		cancelMoved: 0,
		sfDayUnits: 25,
		sfDayRows: 9,
		sfMtdUnits: 244,
		sfMtdRows: 118,
		routeDayCustomers: null,
		routeDayUnits: null,
		routeDayWindow: null,
		routeMtdCustomers: 25,
		routeMtdUnits: 60,
		routeMtdPending: 0
	},
	{
		id: "dallas",
		name: "Dallas",
		totalUnits: 390,
		inactive: 26,
		weekly: 6286.82,
		monthly: 27221.66,
		trial: 36,
		collectTrial: 3,
		pending: 1,
		wonMonth: 0,
		wonWeek: 0,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 1,
		lostMonthUnits: 3,
		lostWeekDeals: 0,
		lostWeekUnits: 0,
		cancelDeals: 5,
		cancelUnits: 6,
		cancelAmt: 468.1,
		cancelMoved: 3,
		sfDayUnits: 14,
		sfDayRows: 13,
		sfMtdUnits: 143,
		sfMtdRows: 86,
		routeDayCustomers: 12,
		routeDayUnits: 21,
		routeDayWindow: "9:55 AM–2:37 PM",
		routeMtdCustomers: 101,
		routeMtdUnits: 155,
		routeMtdPending: 15
	},
	{
		id: "houston",
		name: "Houston",
		totalUnits: 387,
		inactive: 38,
		weekly: 5972.75,
		monthly: 25862.74,
		trial: 15,
		collectTrial: 0,
		pending: 25,
		wonMonth: 0,
		wonWeek: 0,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 0,
		lostMonthUnits: 0,
		lostWeekDeals: 0,
		lostWeekUnits: 0,
		cancelDeals: 4,
		cancelUnits: 8,
		cancelAmt: 626.53,
		cancelMoved: 1,
		sfDayUnits: 0,
		sfDayRows: 0,
		sfMtdUnits: 30,
		sfMtdRows: 21,
		routeDayCustomers: null,
		routeDayUnits: null,
		routeDayWindow: null,
		routeMtdCustomers: null,
		routeMtdUnits: null,
		routeMtdPending: null
	},
	{
		id: "new-york",
		name: "New York",
		totalUnits: 367,
		inactive: 49,
		weekly: 5060.06,
		monthly: 21910.56,
		trial: 33,
		collectTrial: 0,
		pending: 5,
		wonMonth: 0,
		wonWeek: 0,
		trialsMonth: 25,
		trialsWeek: 25,
		lostMonthDeals: 0,
		lostMonthUnits: 0,
		lostWeekDeals: 0,
		lostWeekUnits: 0,
		cancelDeals: 10,
		cancelUnits: 25,
		cancelAmt: 1670.75,
		cancelMoved: 1,
		sfDayUnits: 52,
		sfDayRows: 27,
		sfMtdUnits: 183,
		sfMtdRows: 85,
		routeDayCustomers: 24,
		routeDayUnits: 32,
		routeDayWindow: "8:51 AM–3:39 PM",
		routeMtdCustomers: 58,
		routeMtdUnits: 131,
		routeMtdPending: 0
	},
	{
		id: "portland",
		name: "Portland",
		totalUnits: 357,
		inactive: 88,
		weekly: 4754.4,
		monthly: 20589.08,
		trial: 0,
		collectTrial: 0,
		pending: 1,
		wonMonth: 0,
		wonWeek: 0,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 0,
		lostMonthUnits: 0,
		lostWeekDeals: 0,
		lostWeekUnits: 0,
		cancelDeals: 5,
		cancelUnits: 8,
		cancelAmt: 612.13,
		cancelMoved: 4,
		sfDayUnits: 45,
		sfDayRows: 29,
		sfMtdUnits: 164,
		sfMtdRows: 120,
		routeDayCustomers: 7,
		routeDayUnits: 7,
		routeDayWindow: "9:36 AM–5:56 PM",
		routeMtdCustomers: 62,
		routeMtdUnits: 76,
		routeMtdPending: 1
	},
	{
		id: "phoenix",
		name: "Phoenix",
		totalUnits: 327,
		inactive: 31,
		weekly: 4488.49,
		monthly: 19434.39,
		trial: 17,
		collectTrial: 0,
		pending: 0,
		wonMonth: 2,
		wonWeek: 1,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 5,
		lostMonthUnits: 10,
		lostWeekDeals: 3,
		lostWeekUnits: 7,
		cancelDeals: 1,
		cancelUnits: 2,
		cancelAmt: 144.03,
		cancelMoved: 0,
		sfDayUnits: 6,
		sfDayRows: 3,
		sfMtdUnits: 87,
		sfMtdRows: 54,
		routeDayCustomers: 19,
		routeDayUnits: 25,
		routeDayWindow: "11:10 AM–2:17 PM",
		routeMtdCustomers: 52,
		routeMtdUnits: 82,
		routeMtdPending: 0
	},
	{
		id: "fort-worth",
		name: "Fort Worth",
		totalUnits: 284,
		inactive: 15,
		weekly: 4765.09,
		monthly: 20632.29,
		trial: 3,
		collectTrial: 0,
		pending: 0,
		wonMonth: 1,
		wonWeek: 1,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 2,
		lostMonthUnits: 2,
		lostWeekDeals: 2,
		lostWeekUnits: 2,
		cancelDeals: 0,
		cancelUnits: 0,
		cancelAmt: 0,
		cancelMoved: 0,
		sfDayUnits: 0,
		sfDayRows: 0,
		sfMtdUnits: 154,
		sfMtdRows: 98,
		routeDayCustomers: 26,
		routeDayUnits: 35,
		routeDayWindow: "10:44 AM–3:11 PM",
		routeMtdCustomers: 96,
		routeMtdUnits: 152,
		routeMtdPending: 0
	},
	{
		id: "fort-lauderdale",
		name: "Fort Lauderdale",
		totalUnits: 256,
		inactive: 4,
		weekly: 4660.45,
		monthly: 20178.6,
		trial: 33,
		collectTrial: 1,
		pending: 18,
		wonMonth: 8,
		wonWeek: 7,
		trialsMonth: 18,
		trialsWeek: 13,
		lostMonthDeals: 1,
		lostMonthUnits: 1,
		lostWeekDeals: 1,
		lostWeekUnits: 1,
		cancelDeals: 1,
		cancelUnits: 1,
		cancelAmt: 86.42,
		cancelMoved: 1,
		sfDayUnits: 0,
		sfDayRows: 0,
		sfMtdUnits: 143,
		sfMtdRows: 101,
		routeDayCustomers: 15,
		routeDayUnits: 26,
		routeDayWindow: "9:50 AM–5:22 PM",
		routeMtdCustomers: 81,
		routeMtdUnits: 117,
		routeMtdPending: 2
	},
	{
		id: "vancouver",
		name: "Vancouver",
		totalUnits: 241,
		inactive: 21,
		weekly: 3111.18,
		monthly: 13471.16,
		trial: 3,
		collectTrial: 2,
		pending: 0,
		wonMonth: 2,
		wonWeek: 0,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 0,
		lostMonthUnits: 0,
		lostWeekDeals: 0,
		lostWeekUnits: 0,
		cancelDeals: 2,
		cancelUnits: 2,
		cancelAmt: 109.71,
		cancelMoved: 0,
		sfDayUnits: 0,
		sfDayRows: 0,
		sfMtdUnits: 0,
		sfMtdRows: 0,
		routeDayCustomers: null,
		routeDayUnits: null,
		routeDayWindow: null,
		routeMtdCustomers: null,
		routeMtdUnits: null,
		routeMtdPending: null
	},
	{
		id: "new-jersey",
		name: "New Jersey South",
		totalUnits: 217,
		inactive: 16,
		weekly: 3415.34,
		monthly: 14788.98,
		trial: 5,
		collectTrial: 0,
		pending: 8,
		wonMonth: 0,
		wonWeek: 0,
		trialsMonth: 1,
		trialsWeek: 1,
		lostMonthDeals: 0,
		lostMonthUnits: 0,
		lostWeekDeals: 0,
		lostWeekUnits: 0,
		cancelDeals: 2,
		cancelUnits: 4,
		cancelAmt: 302.46,
		cancelMoved: 0,
		sfDayUnits: 0,
		sfDayRows: 0,
		sfMtdUnits: 0,
		sfMtdRows: 0,
		routeDayCustomers: null,
		routeDayUnits: null,
		routeDayWindow: null,
		routeMtdCustomers: null,
		routeMtdUnits: null,
		routeMtdPending: null
	},
	{
		id: "san-antonio",
		name: "San Antonio",
		totalUnits: 157,
		inactive: 7,
		weekly: 2573.12,
		monthly: 11140.66,
		trial: 69,
		collectTrial: 1,
		pending: 36,
		wonMonth: 0,
		wonWeek: 0,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 2,
		lostMonthUnits: 2,
		lostWeekDeals: 2,
		lostWeekUnits: 2,
		cancelDeals: 9,
		cancelUnits: 21,
		cancelAmt: 1375.49,
		cancelMoved: 2,
		sfDayUnits: 0,
		sfDayRows: 0,
		sfMtdUnits: 137,
		sfMtdRows: 81,
		routeDayCustomers: 15,
		routeDayUnits: 23,
		routeDayWindow: "8:50 AM–2:28 PM",
		routeMtdCustomers: 76,
		routeMtdUnits: 131,
		routeMtdPending: 0
	},
	{
		id: "tampa",
		name: "Tampa",
		totalUnits: 126,
		inactive: 5,
		weekly: 1513.47,
		monthly: 6553.36,
		trial: 27,
		collectTrial: 1,
		pending: 9,
		wonMonth: 0,
		wonWeek: 0,
		trialsMonth: 0,
		trialsWeek: 0,
		lostMonthDeals: 0,
		lostMonthUnits: 0,
		lostWeekDeals: 0,
		lostWeekUnits: 0,
		cancelDeals: 1,
		cancelUnits: 1,
		cancelAmt: 43.21,
		cancelMoved: 0,
		sfDayUnits: 0,
		sfDayRows: 0,
		sfMtdUnits: 0,
		sfMtdRows: 0,
		routeDayCustomers: null,
		routeDayUnits: null,
		routeDayWindow: null,
		routeMtdCustomers: null,
		routeMtdUnits: null,
		routeMtdPending: null
	}
];
var VANS = [
	{
		id: "tom",
		name: "Tom",
		locationId: "new-jersey",
		zone: "ET",
		start: "7:13 AM",
		stop: "6:35 PM",
		onRoad: "11h 22m",
		trips: 20,
		miles: 45.8,
		flag: "ok",
		left: 8,
		width: 76
	},
	{
		id: "jd-fw",
		name: "JD FW",
		locationId: "fort-worth",
		zone: "CT",
		start: "9:17 AM",
		stop: "8:06 PM",
		onRoad: "10h 49m",
		trips: 25,
		miles: 46.7,
		flag: "ok",
		left: 22,
		width: 72
	},
	{
		id: "sara",
		name: "Sara",
		locationId: "chicago",
		zone: "CT",
		start: "9:09 AM",
		stop: "7:39 PM",
		onRoad: "10h 30m",
		trips: 37,
		miles: 77,
		flag: "ok",
		left: 21,
		width: 70
	},
	{
		id: "val",
		name: "Val",
		locationId: null,
		zone: "PT",
		start: "8:43 AM",
		stop: "6:54 PM",
		onRoad: "10h 11m",
		trips: 28,
		miles: 87.2,
		flag: "ok",
		left: 18,
		width: 68
	},
	{
		id: "jd",
		name: "JD",
		locationId: null,
		zone: "CT",
		start: "8:41 AM",
		stop: "4:31 PM",
		onRoad: "7h 50m",
		trips: 18,
		miles: 129.4,
		flag: "ok",
		left: 18,
		width: 52
	},
	{
		id: "irving",
		name: "Irving",
		locationId: null,
		zone: "PT",
		start: "7:08 AM",
		stop: "2:44 PM",
		onRoad: "7h 36m",
		trips: 19,
		miles: 47.5,
		flag: "ok",
		left: 8,
		width: 51
	},
	{
		id: "phoenix",
		name: "Phoenix van",
		locationId: "phoenix",
		zone: "MST",
		start: "10:18 AM",
		stop: "3:21 PM",
		onRoad: "5h 03m",
		trips: 15,
		miles: 117.4,
		flag: "ok",
		left: 29,
		width: 34
	},
	{
		id: "yolanda",
		name: "Yolanda",
		locationId: null,
		zone: "PT",
		start: "9:05 AM",
		stop: "12:42 PM",
		onRoad: "3h 37m",
		trips: 5,
		miles: 78.1,
		flag: "short",
		left: 20,
		width: 24
	},
	{
		id: "soraya",
		name: "Soraya",
		locationId: "fort-lauderdale",
		zone: "ET",
		start: "8:08 AM",
		stop: "8:57 AM",
		onRoad: "0h 49m",
		trips: 5,
		miles: 1.7,
		flag: "short",
		left: 14,
		width: 5
	},
	{
		id: "gabby",
		name: "Gabby",
		locationId: null,
		zone: "ET",
		start: "—",
		stop: "—",
		onRoad: "No trips",
		trips: 0,
		miles: 0,
		flag: "none",
		left: 0,
		width: 0
	}
];
function onHire(row) {
	return row.totalUnits - row.inactive;
}
function findLocation(id) {
	if (!id) return void 0;
	return LOCATIONS.find((row) => row.id === id);
}
var usd = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0
});
var num = new Intl.NumberFormat("en-US");
function sum(rows, pick) {
	return rows.reduce((total, row) => total + pick(row), 0);
}
function share(part, whole) {
	if (!whole) return "0%";
	return `${Math.round(part / whole * 100)}%`;
}
function Meter({ value, max, tone = "ok" }) {
	const width = max > 0 ? Math.max(2, Math.round(value / max * 100)) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-2 min-w-16 overflow-hidden rounded-full bg-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: tone === "hot" ? "h-full bg-watch" : "h-full bg-forest",
			style: { width: `${value === 0 ? 0 : width}%` }
		})
	});
}
function Tile({ label, value, detail, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `rounded-card border border-line border-t-4 bg-card px-4 py-3 ${tone === "good" ? "border-t-good" : tone === "watch" ? "border-t-watch" : tone === "bad" ? "border-t-bad" : "border-t-forest"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-wide text-muted uppercase",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 font-display text-3xl leading-none tracking-tight text-ink tabular-nums",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: detail
			})
		]
	});
}
function Panel({ title, source, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "min-w-0 rounded-card border border-line bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex flex-wrap items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-lg text-ink",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted",
				children: source
			})]
		}), children]
	});
}
function Note({ tone, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `rounded-card px-4 py-3 ${tone === "good" ? "bg-good-bg text-good" : tone === "watch" ? "bg-watch-bg text-watch" : tone === "bad" ? "bg-bad-bg text-bad" : "bg-paper text-ink"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-semibold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm leading-relaxed text-pretty",
			children: body
		})]
	});
}
function ChartTip({ active, payload, label }) {
	if (!active || !payload?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-line bg-card px-3 py-2 text-sm shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-semibold text-ink",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "tabular-nums text-muted",
			children: num.format(payload[0]?.value ?? 0)
		})]
	});
}
function HireChart({ rows }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	const data = [...rows].map((row) => ({
		name: row.name,
		units: onHire(row)
	})).sort((a, b) => b.units - a.units);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-80" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-full",
		style: { height: "36rem" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data,
				layout: "vertical",
				margin: {
					left: 8,
					right: 16,
					top: 4,
					bottom: 4
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						type: "number",
						hide: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						type: "category",
						dataKey: "name",
						width: 112,
						tick: {
							fill: "var(--color-ink)",
							fontSize: 12
						},
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTip, {}),
						cursor: { fill: "var(--color-paper)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "units",
						fill: "var(--color-forest)",
						radius: [
							0,
							4,
							4,
							0
						],
						barSize: 12
					})
				]
			})
		})
	});
}
function VanSpan({ van }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative h-2.5 min-w-28 rounded-full bg-line",
		children: van.width > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: van.flag === "ok" ? "absolute top-0 h-full rounded-full bg-forest-2" : "absolute top-0 h-full rounded-full bg-watch",
			style: {
				left: `${van.left}%`,
				width: `${Math.max(van.width, 3)}%`
			}
		}) : null
	});
}
function locationNotes(row, companyHire, vans) {
	const hire = onHire(row);
	const notes = [{
		tone: "neutral",
		title: `${num.format(hire)} units on hire`,
		body: `${share(hire, companyHire)} of the company book. ${num.format(row.inactive)} units are inactive on won deals. Booked weekly rate ${usd.format(row.weekly)}.`
	}];
	if (row.trial + row.collectTrial > 40) notes.push({
		tone: "watch",
		title: "Open trials are heavy here",
		body: `${num.format(row.trial)} in Trial and ${num.format(row.collectTrial)} in Collect Trial or Pending. Pending stock is ${num.format(row.pending)}.`
	});
	else notes.push({
		tone: "good",
		title: "Pipeline",
		body: `${num.format(row.trial)} open trials, ${num.format(row.collectTrial)} collect-trial, ${num.format(row.pending)} pending. New trials this month: ${num.format(row.trialsMonth)} (${num.format(row.trialsWeek)} this week).`
	});
	if (row.routeDayUnits == null && row.routeMtdUnits == null) notes.push({
		tone: "watch",
		title: "No RouteMap row",
		body: "This location is absent from the Thursday changeover and from the October RouteMap export. Salesforce may still show refresh logs."
	});
	else if (row.routeDayUnits == null) notes.push({
		tone: "watch",
		title: "No Thursday RouteMap row",
		body: `October RouteMap is ${num.format(row.routeMtdCustomers ?? 0)} customers and ${num.format(row.routeMtdUnits ?? 0)} units. Thursday had no day cell.`
	});
	if (row.lostWeekDeals > 0 || row.cancelMoved > 0) notes.push({
		tone: "bad",
		title: "Losses and cancels",
		body: `${num.format(row.lostWeekDeals)} opportunities lost this week (${num.format(row.lostMonthDeals)} in October). ${num.format(row.cancelDeals)} deals sit in Collect/Cancel (${usd.format(row.cancelAmt)}). ${num.format(row.cancelMoved)} of those changed stage in October and are still there.`
	});
	if (!vans.length) notes.push({
		tone: "neutral",
		title: "No named van",
		body: "Geotab’s Thursday export does not tag a van to this location. Unassigned vans are listed on the company view."
	});
	return notes.slice(0, 4);
}
function companyNotes(rows) {
	const hire = sum(rows, onHire);
	const trials = sum(rows, (row) => row.trial + row.collectTrial);
	const wonWeek = sum(rows, (row) => row.wonWeek);
	const fl = rows.find((row) => row.id === "fort-lauderdale");
	const oc = rows.find((row) => row.id === "orange-county");
	const sf = rows.find((row) => row.id === "san-francisco");
	return [
		{
			tone: "good",
			title: "Wins are still Fort Lauderdale",
			body: `${num.format(fl?.wonWeek ?? 0)} of ${num.format(wonWeek)} closed-won units this week, by product start date. Atlanta and Chicago are next. Most locations added none.`
		},
		{
			tone: "watch",
			title: "The open book is two cities",
			body: `Orange County holds ${num.format((oc?.trial ?? 0) + (oc?.collectTrial ?? 0))} open trials and San Francisco ${num.format((sf?.trial ?? 0) + (sf?.collectTrial ?? 0))}. Together that is more than half of ${num.format(trials)}. New trials this week are Atlanta and New York, not those two.`
		},
		{
			tone: "watch",
			title: "RouteMap pending sits in Dallas",
			body: "October changeover pending is 25 company-wide: 15 Dallas, 5 Orange County, 2 Fort Lauderdale, 2 Seattle, 1 Portland. The export does not define what pending counts."
		},
		{
			tone: "bad",
			title: "Two vans did not work a full day",
			body: `Thursday fleet: 9 of 10 vans, 172 trips, 630.8 miles. Soraya in Fort Lauderdale ran 49 minutes and 1.7 miles. Gabby logged no trips. Yolanda stopped at 12:42 PM local. Book is ${num.format(hire)} units on hire.`
		}
	];
}
function OpsBoard() {
	const search = useSearch({ from: "/" });
	const navigate = useNavigate({ from: "/" });
	const selected = findLocation(search.loc);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [sort, setSort] = (0, import_react.useState)("hire");
	const companyHire = sum(LOCATIONS, onHire);
	const rows = selected ? [selected] : LOCATIONS;
	const vans = selected ? VANS.filter((van) => van.locationId === selected.id) : VANS;
	const totals = (0, import_react.useMemo)(() => ({
		hire: sum(rows, onHire),
		inactive: sum(rows, (row) => row.inactive),
		weekly: sum(rows, (row) => row.weekly),
		trial: sum(rows, (row) => row.trial),
		collectTrial: sum(rows, (row) => row.collectTrial),
		pending: sum(rows, (row) => row.pending),
		wonMonth: sum(rows, (row) => row.wonMonth),
		wonWeek: sum(rows, (row) => row.wonWeek),
		trialsMonth: sum(rows, (row) => row.trialsMonth),
		trialsWeek: sum(rows, (row) => row.trialsWeek),
		lostMonth: sum(rows, (row) => row.lostMonthDeals),
		lostWeek: sum(rows, (row) => row.lostWeekDeals),
		lostMonthUnits: sum(rows, (row) => row.lostMonthUnits),
		cancelDeals: sum(rows, (row) => row.cancelDeals),
		cancelAmt: sum(rows, (row) => row.cancelAmt),
		sfDayUnits: sum(rows, (row) => row.sfDayUnits),
		sfDayRows: sum(rows, (row) => row.sfDayRows),
		sfMtdUnits: sum(rows, (row) => row.sfMtdUnits),
		routeDayCustomers: sum(rows, (row) => row.routeDayCustomers ?? 0),
		routeDayUnits: sum(rows, (row) => row.routeDayUnits ?? 0),
		routeMtdCustomers: sum(rows, (row) => row.routeMtdCustomers ?? 0),
		routeMtdUnits: sum(rows, (row) => row.routeMtdUnits ?? 0),
		routePending: sum(rows, (row) => row.routeMtdPending ?? 0),
		routeDayLocations: rows.filter((row) => row.routeDayUnits != null).length
	}), [rows]);
	const ranked = (0, import_react.useMemo)(() => {
		const copy = [...LOCATIONS];
		copy.sort((a, b) => {
			if (sort === "route") return (b.routeMtdUnits ?? -1) - (a.routeMtdUnits ?? -1);
			if (sort === "trials") return b.trial + b.collectTrial - (a.trial + a.collectTrial);
			if (sort === "won") return b.wonMonth - a.wonMonth || b.wonWeek - a.wonWeek;
			return onHire(b) - onHire(a);
		});
		return copy;
	}, [sort]);
	const maxHire = Math.max(...LOCATIONS.map(onHire));
	const maxRoute = Math.max(...LOCATIONS.map((row) => row.routeMtdUnits ?? 0));
	const notes = selected ? locationNotes(selected, companyHire, vans) : companyNotes(LOCATIONS);
	const vanMiles = vans.reduce((total, van) => total + van.miles, 0);
	const vanTrips = vans.reduce((total, van) => total + van.trips, 0);
	const vansOut = vans.filter((van) => van.trips > 0).length;
	function setLocation(id) {
		navigate({
			search: id ? { loc: id } : {},
			replace: false
		});
	}
	async function copyLink() {
		const url = window.location.href;
		try {
			await navigator.clipboard.writeText(url);
		} catch {
			const input = document.createElement("input");
			input.value = url;
			document.body.appendChild(input);
			input.select();
			document.execCommand("copy");
			input.remove();
		}
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1800);
	}
	const scope = selected ? selected.name : "All locations";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto w-full max-w-6xl overflow-x-clip px-4 pt-6 pb-16 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-xs font-semibold tracking-widest text-gold uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, {
							className: "size-4",
							"aria-hidden": "true"
						}), "Floral Image · FI Ops"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 font-display text-4xl tracking-tight text-ink",
						children: "Executive board"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-pretty text-muted",
						children: "October progress and the previous route day. Numbers are in the page, so this link does not need Salesforce, RouteMap, Geotab, or a Grok login."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm text-muted sm:text-right",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-ink",
							children: PULLED.sales
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Sales week ", PULLED.weekLabel] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"Route day ",
							PULLED.routeDay,
							" · Geotab ",
							PULLED.geotabDay
						] })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print sticky top-0 z-10 -mx-4 mt-4 border-b border-line bg-paper/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-w-0 flex-1 flex-col gap-1 text-xs font-semibold tracking-wide text-muted uppercase",
						children: ["Location", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							className: "h-11 rounded-lg border border-line bg-card px-3 text-base font-medium tracking-normal text-ink normal-case",
							value: selected?.id ?? "",
							onChange: (event) => setLocation(event.target.value || null),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "All locations"
							}), LOCATIONS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: row.id,
								children: row.name
							}, row.id))]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void copyLink(),
							className: "inline-flex h-11 items-center gap-2 rounded-lg bg-forest px-4 text-sm font-semibold text-card",
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? "Link copied" : "Copy this view"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => window.print(),
							className: "inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-card px-4 text-sm font-semibold text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "Print"]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-5 rounded-card bg-forest px-4 py-4 text-base leading-relaxed text-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-semibold",
						children: [scope, "."]
					}),
					" ",
					num.format(totals.hire),
					" units on hire",
					selected ? ` (${share(totals.hire, companyHire)} of the company)` : " across 21 locations",
					". October RouteMap: ",
					num.format(totals.routeMtdCustomers),
					" customers, ",
					num.format(totals.routeMtdUnits),
					" units",
					totals.routePending ? `, ${num.format(totals.routePending)} pending` : "",
					". Friday Salesforce refreshes: ",
					num.format(totals.sfDayRows),
					" logs, ",
					num.format(totals.sfDayUnits),
					" units. Open trials",
					" ",
					num.format(totals.trial + totals.collectTrial),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "Units on hire",
						value: num.format(totals.hire),
						detail: `${num.format(totals.inactive)} inactive on won deals`,
						tone: "neutral"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "Closed won",
						value: num.format(totals.wonWeek),
						detail: `${num.format(totals.wonMonth)} units in October · start date`,
						tone: "good"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "Open trials",
						value: num.format(totals.trial + totals.collectTrial),
						detail: `${num.format(totals.trial)} trial · ${num.format(totals.collectTrial)} collect trial`,
						tone: "good"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "At risk",
						value: num.format(totals.lostWeek + totals.cancelDeals),
						detail: `${num.format(totals.lostWeek)} lost this week · ${num.format(totals.cancelDeals)} collect/cancel stock`,
						tone: totals.lostWeek + totals.cancelDeals > 0 ? "bad" : "neutral"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "RouteMap Thursday",
						value: num.format(totals.routeDayCustomers),
						detail: `${num.format(totals.routeDayUnits)} units · ${num.format(totals.routeDayLocations)} locations with a row`,
						tone: "neutral"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "Salesforce Friday",
						value: num.format(totals.sfDayUnits),
						detail: `${num.format(totals.sfDayRows)} refresh logs · previous calendar day`,
						tone: "neutral"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: "October RouteMap",
						value: num.format(totals.routeMtdUnits),
						detail: `${num.format(totals.routeMtdCustomers)} customers · pending ${num.format(totals.routePending)}`,
						tone: "good"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						label: selected ? "Vans tagged here" : "Vans out",
						value: selected ? `${vansOut}/${vans.length || 0}` : `${vansOut}/10`,
						detail: `${num.format(vanTrips)} trips · ${vanMiles.toFixed(1)} miles`,
						tone: vans.some((van) => van.flag !== "ok") ? "watch" : "neutral"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-xs font-semibold tracking-widest text-muted uppercase",
				children: "Read these first"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid gap-3 md:grid-cols-2",
				children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, { ...note }, note.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-8 text-xs font-semibold tracking-widest text-muted uppercase",
				children: ["This month · ", PULLED.monthLabel]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid min-w-0 gap-3 lg:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Units on hire",
						source: "Salesforce · live Saturday morning",
						children: selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-4xl tabular-nums text-ink",
									children: num.format(onHire(selected))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-muted",
									children: [
										num.format(selected.totalUnits),
										" won units minus ",
										num.format(selected.inactive),
										" inactive. Weekly rate ",
										usd.format(selected.weekly),
										". Monthly rate ",
										usd.format(selected.monthly),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-muted",
									children: [
										"Closed won by start date: ",
										num.format(selected.wonWeek),
										" this week, ",
										num.format(selected.wonMonth),
										" in October. New trials: ",
										num.format(selected.trialsWeek),
										" this week, ",
										num.format(selected.trialsMonth),
										" in October."
									]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HireChart, { rows: LOCATIONS })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 lg:col-span-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						title: "October field work and sales",
						source: "RouteMap through Thu · Salesforce through Sat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full min-w-xl text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-line text-xs tracking-wide text-muted uppercase",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 pr-3 font-semibold",
											children: "Location"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 pr-3 text-right font-semibold",
											children: "Route customers"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 pr-3 text-right font-semibold",
											children: "Route units"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 pr-3 text-right font-semibold",
											children: "Pending"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 pr-3 text-right font-semibold",
											children: "SF refresh units"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "py-2 text-right font-semibold",
											children: "Won units"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [(selected ? [selected] : [...LOCATIONS].sort((a, b) => (b.routeMtdUnits ?? -1) - (a.routeMtdUnits ?? -1))).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-line/70",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											className: "py-2 pr-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "font-medium text-forest underline-offset-2 hover:underline",
												onClick: () => setLocation(row.id),
												children: row.name
											}), row.routeName ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "ml-1 text-xs text-muted",
												children: ["RouteMap: ", row.routeName]
											}) : null]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 text-right tabular-nums",
											children: row.routeMtdCustomers == null ? "—" : num.format(row.routeMtdCustomers)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 text-right tabular-nums",
											children: row.routeMtdUnits == null ? "—" : num.format(row.routeMtdUnits)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: `py-2 pr-3 text-right tabular-nums ${row.routeMtdPending ? "font-semibold text-watch" : ""}`,
											children: row.routeMtdPending == null ? "—" : num.format(row.routeMtdPending)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 text-right tabular-nums",
											children: num.format(row.sfMtdUnits)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 text-right tabular-nums",
											children: num.format(row.wonMonth)
										})
									]
								}, row.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "font-semibold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3",
											children: "Total shown"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 text-right tabular-nums",
											children: num.format(totals.routeMtdCustomers)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 text-right tabular-nums",
											children: num.format(totals.routeMtdUnits)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 text-right tabular-nums",
											children: num.format(totals.routePending)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 pr-3 text-right tabular-nums",
											children: num.format(totals.sfMtdUnits)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "py-2 text-right tabular-nums",
											children: num.format(totals.wonMonth)
										})
									]
								})] })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs leading-relaxed text-muted",
							children: "RouteMap units and Salesforce refresh units are different systems. Do not add them. RouteMap is the Daily Changeover (customers / units). Salesforce is Product Refresh logs, Oct 1–9. Closed won uses product start date."
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 text-xs font-semibold tracking-widest text-muted uppercase",
				children: "Previous days"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Saturday is not a completed route day. The last RouteMap and Geotab export is Thursday. Salesforce already has Friday’s refresh log."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid min-w-0 gap-3 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: `RouteMap · ${PULLED.routeDay}`,
					source: `Pulled ${PULLED.routePulled}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-line text-xs tracking-wide text-muted uppercase",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-2 font-semibold",
										children: "Location"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-2 text-right font-semibold",
										children: "Customers"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-2 text-right font-semibold",
										children: "Units"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-semibold",
										children: "Window"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [rows.filter((row) => row.routeDayUnits != null).sort((a, b) => (b.routeDayUnits ?? 0) - (a.routeDayUnits ?? 0)).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-line/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-2",
										children: row.routeName ?? row.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-2 text-right tabular-nums",
										children: num.format(row.routeDayCustomers ?? 0)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-2 text-right tabular-nums",
										children: num.format(row.routeDayUnits ?? 0)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 text-muted",
										children: row.routeDayWindow
									})
								]
							}, row.id)), rows.every((row) => row.routeDayUnits == null) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 4,
								className: "py-3 text-muted",
								children: "No RouteMap day cell for this location."
							}) }) : null] })]
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: `Salesforce refreshes · ${PULLED.sfRefreshDay}`,
					source: "Product Refresh · Friday",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-line text-xs tracking-wide text-muted uppercase",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-2 font-semibold",
										children: "Location"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-2 text-right font-semibold",
										children: "Logs"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 text-right font-semibold",
										children: "Units"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [rows.filter((row) => row.sfDayUnits > 0).sort((a, b) => b.sfDayUnits - a.sfDayUnits).map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-line/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-2",
										children: row.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-2 text-right tabular-nums",
										children: num.format(row.sfDayRows)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 text-right tabular-nums",
										children: num.format(row.sfDayUnits)
									})
								]
							}, row.id)), rows.every((row) => row.sfDayUnits === 0) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 3,
								className: "py-3 text-muted",
								children: "No Salesforce refresh log on Friday for this location."
							}) }) : null] })]
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					title: `Geotab vans · ${PULLED.geotabDay}`,
					source: `Advanced detailed trips · ${PULLED.geotabPulled}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full min-w-2xl text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-line text-xs tracking-wide text-muted uppercase",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-2 font-semibold",
										children: "Van"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-2 font-semibold",
										children: "Zone"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-2 font-semibold",
										children: "Start"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-2 font-semibold",
										children: "Stop"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-2 font-semibold",
										children: "On the road"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-2 text-right font-semibold",
										children: "Trips"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 pr-2 text-right font-semibold",
										children: "Miles"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "py-2 font-semibold",
										children: "6 AM–9 PM"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [vans.map((van) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-line/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "py-2 pr-2 font-medium",
										children: [van.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-0.5 block text-xs font-normal text-muted",
											children: van.locationId ? findLocation(van.locationId)?.name : "Location not on the export"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-2",
										children: van.zone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-2 tabular-nums",
										children: van.start
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-2 tabular-nums",
										children: van.stop
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-2",
										children: van.flag === "none" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-bad-bg px-2 py-0.5 text-xs font-semibold text-bad",
											children: "No trips"
										}) : van.flag === "short" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-watch",
											children: van.onRoad
										}) : van.onRoad
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-2 text-right tabular-nums",
										children: van.trips
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2 pr-2 text-right tabular-nums",
										children: van.miles.toFixed(1)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VanSpan, { van })
									})
								]
							}, van.id)), !vans.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								colSpan: 8,
								className: "py-3 text-muted",
								children: "No van in the Thursday export is tagged to this location."
							}) }) : null] })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted",
						children: "On the road is first trip start to last trip stop, in the van’s local time, not driving duration. Only vans whose name includes the city are tied to a location. Val, JD, Irving, Yolanda, and Gabby stay unassigned."
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-8 flex items-center gap-2 text-xs font-semibold tracking-widest text-muted uppercase",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
					className: "size-3.5",
					"aria-hidden": "true"
				}), "Every location"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print mt-3 flex flex-wrap gap-2",
				children: [
					["hire", "On hire"],
					["route", "October RouteMap"],
					["trials", "Open trials"],
					["won", "Won this month"]
				].map(([key, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSort(key),
					className: sort === key ? "h-10 rounded-full bg-forest px-4 text-sm font-semibold text-card" : "h-10 rounded-full border border-line bg-card px-4 text-sm font-semibold text-ink",
					children: label
				}, key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 min-w-0 overflow-x-auto rounded-card border border-line bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-3xl text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line text-xs tracking-wide text-muted uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 font-semibold",
								children: "Location"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 text-right font-semibold",
								children: "On hire"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 font-semibold",
								children: "Share"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 text-right font-semibold",
								children: "Trials"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 text-right font-semibold",
								children: "Pending"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 text-right font-semibold",
								children: "Won mo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 text-right font-semibold",
								children: "Lost mo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 text-right font-semibold",
								children: "Thu units"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 text-right font-semibold",
								children: "Oct route"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-3 font-semibold",
								children: "Oct bar"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: ranked.map((row) => {
						const active = selected?.id === row.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: active ? "bg-paper" : "border-b border-line/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setLocation(active ? null : row.id),
										className: "text-left font-medium text-ink underline-offset-2 hover:underline",
										children: row.name
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-right tabular-nums",
									children: num.format(onHire(row))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
										value: onHire(row),
										max: maxHire
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-right tabular-nums",
									children: num.format(row.trial + row.collectTrial)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-right tabular-nums",
									children: num.format(row.pending)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-right tabular-nums",
									children: num.format(row.wonMonth)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: `px-3 py-2.5 text-right tabular-nums ${row.lostMonthDeals ? "text-bad" : ""}`,
									children: num.format(row.lostMonthDeals)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-right tabular-nums",
									children: row.routeDayUnits == null ? "—" : num.format(row.routeDayUnits)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-right tabular-nums",
									children: row.routeMtdUnits == null ? "—" : num.format(row.routeMtdUnits)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
										value: row.routeMtdUnits ?? 0,
										max: maxRoute,
										tone: (row.routeMtdPending ?? 0) > 0 ? "hot" : "ok"
									})
								})
							]
						}, row.id);
					}) })]
				})
			}),
			selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card border border-line bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-xs font-semibold tracking-wide text-muted uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-3.5" }), " Salesforce"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-2 space-y-1 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Open trials ", num.format(selected.trial + selected.collectTrial)] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Lead pending ", num.format(selected.pending)] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Collect/cancel stock ",
									num.format(selected.cancelDeals),
									" · ",
									usd.format(selected.cancelAmt)
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									"Lost in October ",
									num.format(selected.lostMonthDeals),
									" deals · ",
									num.format(selected.lostMonthUnits),
									" units"
								] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card border border-line bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-xs font-semibold tracking-wide text-muted uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "size-3.5" }), " RouteMap"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-2 space-y-1 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Thursday ", selected.routeDayCustomers == null ? "no row" : `${num.format(selected.routeDayCustomers)} customers / ${num.format(selected.routeDayUnits ?? 0)} units`] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["October ", selected.routeMtdCustomers == null ? "no row" : `${num.format(selected.routeMtdCustomers)} customers / ${num.format(selected.routeMtdUnits ?? 0)} units`] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Pending ", selected.routeMtdPending == null ? "—" : num.format(selected.routeMtdPending)] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-card border border-line bg-card p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center gap-2 text-xs font-semibold tracking-wide text-muted uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-3.5" }), " Geotab"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1 text-sm",
							children: vans.length ? vans.map((van) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								van.name,
								": ",
								van.flag === "none" ? "no trips" : `${van.onRoad}, ${van.miles.toFixed(1)} mi, ${van.trips} trips`
							] }, van.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"No van tagged to ",
								selected.name,
								" on Thursday."
							] })
						})]
					})
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-8 border-t border-line pt-4 text-xs leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-ink",
						children: "How to share."
					}), " Publish this board and send the link. Pick a location, then Copy this view — the link opens on that city. Printing makes a packet. Viewers do not need Grok."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2",
						children: [
							"Salesforce pull ",
							PULLED.sales,
							". Units on hire = Closed Won total units minus inactive units (",
							num.format(companyHire),
							" active). Closed won counts product start date in ",
							PULLED.monthLabel,
							", not close date (",
							num.format(sum(LOCATIONS, (row) => row.wonMonth)),
							" units; ",
							num.format(sum(LOCATIONS, (row) => row.wonWeek)),
							" this week). Open trials = Lead status Trial (",
							num.format(sum(LOCATIONS, (row) => row.trial)),
							") plus Collect Trial or Pending (",
							num.format(sum(LOCATIONS, (row) => row.collectTrial)),
							"). Pending is Pending through Pending 5 (",
							num.format(sum(LOCATIONS, (row) => row.pending)),
							"). Lost opportunities use Lost Date. Collect/cancel stock is current stage,",
							usd.format(sum(LOCATIONS, (row) => row.cancelAmt)),
							" across ",
							num.format(sum(LOCATIONS, (row) => row.cancelDeals)),
							" deals. Weekly and monthly rates are the won-book currency fields, including inactive units, summed in org currency."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2",
						children: [
							"RouteMap Daily Changeover, type Both, ",
							PULLED.routePulled,
							". Day cells are customers/units, not a completion rate. Geotab advanced detailed trips, ",
							PULLED.geotabPulled,
							", Thursday only. Salesforce Product Refresh for Friday is a separate log from RouteMap — ",
							num.format(sum(LOCATIONS, (row) => row.sfDayUnits)),
							" units on ",
							num.format(sum(LOCATIONS, (row) => row.sfDayRows)),
							" logs. October Salesforce refresh logs: ",
							num.format(sum(LOCATIONS, (row) => row.sfMtdUnits)),
							" units."
						]
					})
				]
			})
		]
	});
}
function BoardPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpsBoard, {});
}
//#endregion
export { BoardPage as component };
