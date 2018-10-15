import tsv2json from "./tsv2json.js";

import mil_std_app6b_space from "./../tsv-tables/app6b/space.tsv";
import mil_std_app6b_air from "./../tsv-tables/app6b/air.tsv";
import mil_std_app6b_ground_unit from "./../tsv-tables/app6b/ground-unit.tsv";
import mil_std_app6b_ground_equipment from "./../tsv-tables/app6b/ground-equipment.tsv";
import mil_std_app6b_ground_installation from "./../tsv-tables/app6b/ground-installation.tsv";
import mil_std_app6b_sea_surface from "./../tsv-tables/app6b/sea-surface.tsv";
import mil_std_app6b_sub_surface from "./../tsv-tables/app6b/sub-surface.tsv";
import mil_std_app6b_sof from "./../tsv-tables/app6b/sof.tsv";

import mil_std_app6b_tactical_graphics from "./../tsv-tables/app6b/tactical-graphics.tsv";

export default {
  WAR: {
    name: "WARFIGHTING",
    SPC: {
      name: "SPACE",
      mainIcon: tsv2json(mil_std_app6b_space)
    },
    AIRTRK: {
      name: "AIR",
      mainIcon: tsv2json(mil_std_app6b_air)
    },
    GRDTRK_UNT: {
      name: "GROUND UNIT",
      mainIcon: tsv2json(mil_std_app6b_ground_unit)
    },
    GRDTRK_EQT: {
      name: "GROUND EQUIPMENT",
      mainIcon: tsv2json(mil_std_app6b_ground_equipment)
    },
    GRDTRK_INS: {
      name: "GROUND INSTALLATION",
      mainIcon: tsv2json(mil_std_app6b_ground_installation)
    },
    SSUF: {
      name: "SEA SURFACE",
      mainIcon: tsv2json(mil_std_app6b_sea_surface)
    },
    SBSUF: {
      name: "SUBSURFACE",
      mainIcon: tsv2json(mil_std_app6b_sub_surface)
    },
    SOFUNT: {
      name: "SPECIAL OPERATIONS FORCE (SOF)",
      mainIcon: tsv2json(mil_std_app6b_sof)
    }
  },
  TACGRP: {
    name: "TACTICAL GRAPHICS",
    mainIcon: tsv2json(mil_std_app6b_tactical_graphics)
  }
};
