import { Location } from "@/types";

export const LOCATIONS: Location[] = [
  {
    id: "legnano",
    city: "Legnano",
    address: "Via XX Settembre 137-138",
    zipCode: "20025",
    province: "MI",
    path: "/locations/legnano",
    type: 'headquarters',
    phone: "XXXX.XXXXXX",
    email: "info@manutenpul.it"
  },
  {
    id: "cesano-boscone",
    city: "Cesano Boscone",
    address: "Via R. Sanzio",
    zipCode: "20090",
    province: "MI",
    path: "/locations/cesano-boscone",
    type: 'node'
  },
  {
    id: "monza",
    city: "Monza",
    address: "Via M. Buonarroti 125",
    zipCode: "20900",
    province: "MB",
    path: "/locations/monza",
    type: 'node'
  }
];