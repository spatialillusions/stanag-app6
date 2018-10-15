import tsv2json from "./tsv2json.js";

import mil_std_app6d_air_mainIcon from "./../tsv-tables/app6d/Air.tsv";
import mil_std_app6d_air_m1 from "./../tsv-tables/app6d/Air sector 1.tsv";
import mil_std_app6d_air_m2 from "./../tsv-tables/app6d/Air sector 2.tsv";

import mil_std_app6d_air_missile_mainIcon from "./../tsv-tables/app6d/Air missile.tsv";
import mil_std_app6d_air_missile_m1 from "./../tsv-tables/app6d/Air missile sector 1.tsv";
import mil_std_app6d_air_missile_m2 from "./../tsv-tables/app6d/Air missile sector 2.tsv";

import mil_std_app6d_space_mainIcon from "./../tsv-tables/app6d/Space.tsv";
import mil_std_app6d_space_m1 from "./../tsv-tables/app6d/Space sector 1.tsv";
import mil_std_app6d_space_m2 from "./../tsv-tables/app6d/Space sector 2.tsv";

import mil_std_app6d_land_unit_mainIcon from "./../tsv-tables/app6d/Land unit.tsv";
import mil_std_app6d_land_unit_m1 from "./../tsv-tables/app6d/Land unit sector 1.tsv";
import mil_std_app6d_land_unit_m2 from "./../tsv-tables/app6d/Land unit sector 2.tsv";

import mil_std_app6d_land_civilian_mainIcon from "./../tsv-tables/app6d/Land civilian.tsv";
import mil_std_app6d_land_civilian_m1 from "./../tsv-tables/app6d/Land civilian sector 1.tsv";
import mil_std_app6d_land_civilian_m2 from "./../tsv-tables/app6d/Land civilian sector 2.tsv";

import mil_std_app6d_land_equipment_mainIcon from "./../tsv-tables/app6d/Land equipment.tsv";
import mil_std_app6d_land_equipment_m1 from "./../tsv-tables/app6d/Land equipment sector 1.tsv";
//import mil_std_app6d_land_equipment_m2 from "./../tsv-tables/app6d/Land equipment sector 2.tsv";

import mil_std_app6d_land_installation_mainIcon from "./../tsv-tables/app6d/Land installation.tsv";
import mil_std_app6d_land_installation_m1 from "./../tsv-tables/app6d/Land installation sector 1.tsv";
import mil_std_app6d_land_installation_m2 from "./../tsv-tables/app6d/Land installation sector 2.tsv";

import mil_std_app6d_control_measure_mainIcon from "./../tsv-tables/app6d/Control Measures.tsv";
//import mil_std_app6d_land_installation_m1 from "./../tsv-tables/app6d/Land installation sector 1.tsv";
//import mil_std_app6d_land_installation_m2 from "./../tsv-tables/app6d/Land installation sector 2.tsv";

import mil_std_app6d_dismounted_individual_mainIcon from "./../tsv-tables/app6d/Dismounted individual.tsv";
import mil_std_app6d_dismounted_individual_m1 from "./../tsv-tables/app6d/Dismounted individual sector 1.tsv";
import mil_std_app6d_dismounted_individual_m2 from "./../tsv-tables/app6d/Dismounted individual sector 2.tsv";

import mil_std_app6d_sea_surface_mainIcon from "./../tsv-tables/app6d/Sea surface.tsv";
import mil_std_app6d_sea_surface_m1 from "./../tsv-tables/app6d/Sea surface sector 1.tsv";
import mil_std_app6d_sea_surface_m2 from "./../tsv-tables/app6d/Sea surface sector 2.tsv";

import mil_std_app6d_sea_subsurface_mainIcon from "./../tsv-tables/app6d/Sea subsurface.tsv";
import mil_std_app6d_sea_subsurface_m1 from "./../tsv-tables/app6d/Sea subsurface sector 1.tsv";
import mil_std_app6d_sea_subsurface_m2 from "./../tsv-tables/app6d/Sea subsurface sector 2.tsv";

import mil_std_app6d_mine_warfare_mainIcon from "./../tsv-tables/app6d/Mine warfare.tsv";
//import mil_std_app6d_sea_subsurface_m1 from "./../tsv-tables/app6d/Sea subsurface sector 1.tsv";
//import mil_std_app6d_sea_subsurface_m2 from "./../tsv-tables/app6d/Sea subsurface sector 2.tsv";

import mil_std_app6d_activities_mainIcon from "./../tsv-tables/app6d/Activities.tsv";
import mil_std_app6d_activities_m1 from "./../tsv-tables/app6d/Activities sector 1.tsv";
//import mil_std_app6d_sea_subsurface_m2 from "./../tsv-tables/app6d/Sea subsurface sector 2.tsv";

export default {
  "01": {
    symbolset: "01",
    name: "Air",
    mainIcon: tsv2json(mil_std_app6d_air_mainIcon),
    modifier1: tsv2json(mil_std_app6d_air_m1),
    modifier2: tsv2json(mil_std_app6d_air_m2)
  },
  "02": {
    symbolset: "02",
    name: "Air missile",
    mainIcon: tsv2json(mil_std_app6d_air_missile_mainIcon),
    modifier1: tsv2json(mil_std_app6d_air_missile_m1),
    modifier2: tsv2json(mil_std_app6d_air_missile_m2)
  },
  "05": {
    symbolset: "05",
    name: "Space",
    mainIcon: tsv2json(mil_std_app6d_space_mainIcon),
    modifier1: tsv2json(mil_std_app6d_space_m1),
    modifier2: tsv2json(mil_std_app6d_space_m2)
  },
  "10": {
    symbolset: "10",
    name: "Land unit",
    mainIcon: tsv2json(mil_std_app6d_land_unit_mainIcon),
    modifier1: tsv2json(mil_std_app6d_land_unit_m1),
    modifier2: tsv2json(mil_std_app6d_land_unit_m2)
  },
  "11": {
    symbolset: "11",
    name: "Land civilian unit/Organization",
    mainIcon: tsv2json(mil_std_app6d_land_civilian_mainIcon),
    modifier1: tsv2json(mil_std_app6d_land_civilian_m1),
    modifier2: tsv2json(mil_std_app6d_land_civilian_m2)
  },
  "15": {
    symbolset: "15",
    name: "Land equipment",
    mainIcon: tsv2json(mil_std_app6d_land_equipment_mainIcon),
    modifier1: tsv2json(mil_std_app6d_land_equipment_m1),
    modifier2: tsv2json("")
  },
  "20": {
    symbolset: "20",
    name: "Land installations",
    mainIcon: tsv2json(mil_std_app6d_land_installation_mainIcon),
    modifier1: tsv2json(mil_std_app6d_land_installation_m1),
    modifier2: tsv2json(mil_std_app6d_land_installation_m2)
  },
  "25": {
    symbolset: "25",
    name: "Control measure",
    mainIcon: tsv2json(mil_std_app6d_control_measure_mainIcon),
    modifier1: tsv2json(""),
    modifier2: tsv2json("")
  },
  "27": {
    symbolset: "27",
    name: "Dismounted individual",
    mainIcon: tsv2json(mil_std_app6d_dismounted_individual_mainIcon),
    modifier1: tsv2json(mil_std_app6d_dismounted_individual_m1),
    modifier2: tsv2json(mil_std_app6d_dismounted_individual_m2)
  },
  "30": {
    symbolset: "30",
    name: "Sea surface",
    mainIcon: tsv2json(mil_std_app6d_sea_surface_mainIcon),
    modifier1: tsv2json(mil_std_app6d_sea_surface_m1),
    modifier2: tsv2json(mil_std_app6d_sea_surface_m2)
  },
  "35": {
    symbolset: "35",
    name: "Sea subsurface",
    mainIcon: tsv2json(mil_std_app6d_sea_subsurface_mainIcon),
    modifier1: tsv2json(mil_std_app6d_sea_subsurface_m1),
    modifier2: tsv2json(mil_std_app6d_sea_subsurface_m2)
  },
  "36": {
    symbolset: "36",
    name: "Mine warfare",
    mainIcon: tsv2json(mil_std_app6d_mine_warfare_mainIcon),
    modifier1: tsv2json(""),
    modifier2: tsv2json("")
  },
  "40": {
    symbolset: "40",
    name: "Activity/Event",
    mainIcon: tsv2json(mil_std_app6d_activities_mainIcon),
    modifier1: tsv2json(mil_std_app6d_activities_m1),
    modifier2: tsv2json("")
  }
};
