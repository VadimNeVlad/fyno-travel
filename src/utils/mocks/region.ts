import { Region } from "../types/region";

export const regionsMock: Region[] = [
  {
    id: 1,
    name: "Golden Circle Region",
    label: "A",
    info: ["Geysers", "Waterfalls", "Crater lakes"],
    description:
      "The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.",
    regionHighlights: [
      {
        id: 1,
        name: "Gullfoss Waterfall",
        image: "/region-1.jpg",
        curatorPick: true,
        info: ["1h", "Waterfall"],
      },
      {
        id: 2,
        name: "Reykjadalur Valley",
        image: "/region-2.jpg",
        curatorPick: true,
        info: ["1h", "Iconic hike, hot springs"],
      },
      {
        id: 3,
        name: "Geysir Thermal Field",
        image: "/region-3.jpg",
        curatorPick: false,
        info: ["1h", "Geysers"],
      },
      {
        id: 4,
        name: "Snowy Mountains",
        image: "/trip-info-1.jpg",
        curatorPick: false,
        info: ["2h", "Mountains"],
      },
    ],
    regionPlaces: [
      {
        id: 1,
        name: "Frost and Fire Hotel",
        image: "/place-1.jpg",
        curatorPick: true,
        info: ["$180+", "Boutique hotel"],
        score: "9.1/10",
      },
      {
        id: 2,
        name: "The Greenhouse Hotel",
        image: "/place-2.jpg",
        curatorPick: true,
        info: ["$230+", "Luxury hotel"],
        score: "9.1/10",
      },
      {
        id: 3,
        name: "INNI",
        image: "/place-3.jpg",
        curatorPick: false,
        info: ["$130+", "Apart hotel"],
        score: "9.3/10",
      },
      {
        id: 4,
        name: "Mountain Camping",
        image: "/region-2.jpg",
        curatorPick: true,
        info: ["$40+", "Camping"],
        score: "9.6/10",
      },
    ],
  },
];
