/** Location → region mapping, from Patrick's "FI OPS | Regional Executive View" workbook (Oct 2026).
 * Regions and member order follow the workbook tabs exactly. Workbook excludes Tampa and São Paulo;
 * they (and any new location) roll into "Unassigned". LA/OC is one market (Orange County row).
 * Matching is by normalized name, so Salesforce names, RouteMap labels (Newyork, Sanfrancisco,
 * Fortworth, Seattle…) and workbook labels all resolve. Daily refreshes reuse this automatically.
 */
import type { LocationRow } from "./ops";

export type RegionId = "east" | "central" | "west" | "private";
export const UNASSIGNED = { id: "unassigned", name: "Unassigned" } as const;

export const REGIONS: { id: RegionId; name: string; locations: string[] }[] = [
  { id: "east", name: "East Coast", locations: ["new-york", "new-jersey", "atlanta", "fort-lauderdale"] },
  { id: "central", name: "Central", locations: ["denver", "fort-worth", "dallas", "chicago"] },
  { id: "west", name: "West Coast", locations: ["orange-county", "san-francisco", "san-diego", "phoenix"] },
  { id: "private", name: "Private Businesses", locations: ["austin", "san-antonio", "portland", "puget-sound", "houston", "vancouver", "toronto"] },
];

/** Name variants (normalized: lowercase, letters/digits only) → location id. */
const ALIASES: Record<string, string> = {
  newyork: "new-york", nyc: "new-york", nycnewyork: "new-york", ny: "new-york",
  newjersey: "new-jersey", newjerseysouth: "new-jersey", nj: "new-jersey", njsouth: "new-jersey",
  atlanta: "atlanta", atl: "atlanta",
  fortlauderdale: "fort-lauderdale", ftlauderdale: "fort-lauderdale",
  denver: "denver",
  fortworth: "fort-worth", ftworth: "fort-worth",
  dallas: "dallas",
  chicago: "chicago",
  orangecounty: "orange-county", oc: "orange-county", laoc: "orange-county", losangeles: "orange-county",
  la: "orange-county", losangelesorangecounty: "orange-county",
  sanfrancisco: "san-francisco", sf: "san-francisco",
  sandiego: "san-diego",
  phoenix: "phoenix",
  austin: "austin",
  sanantonio: "san-antonio",
  portland: "portland",
  pugetsound: "puget-sound", seattle: "puget-sound", seattlepugetsound: "puget-sound",
  houston: "houston",
  vancouver: "vancouver",
  toronto: "toronto",
};

export function normalizeName(name: string) {
  return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** Resolve any location label/id to its canonical location id (or null). */
export function resolveLocationId(label: string): string | null {
  const key = normalizeName(label);
  if (ALIASES[key]) return ALIASES[key];
  for (const r of REGIONS) for (const id of r.locations) if (normalizeName(id) === key) return id;
  return null;
}

export function regionFor(row: Pick<LocationRow, "id" | "name" | "routeName">): { id: string; name: string } {
  const id = resolveLocationId(row.id) ?? resolveLocationId(row.name) ?? (row.routeName ? resolveLocationId(row.routeName) : null);
  const region = id ? REGIONS.find((r) => r.locations.includes(id)) : undefined;
  return region ? { id: region.id, name: region.name } : UNASSIGNED;
}

/** Van → location assignments approved by Patrick (Oct 16, 2026), keyed by normalized Geotab van name.
 * Applied on top of VANS[].locationId so daily refreshes keep them. Parked Van stays unassigned. */
export const VAN_LOCATIONS: Record<string, string> = {
  val: "san-diego",
  jd: "fort-worth",
  gabby: "atlanta",
  yolanda: "orange-county",
  irving: "san-francisco",
};

export function vanLocationId(van: { name: string; locationId: string | null }): string | null {
  return van.locationId ?? VAN_LOCATIONS[normalizeName(van.name)] ?? null;
}
