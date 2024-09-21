import { SELECTOR_TERMINAL } from "../../../../index";
import { NU_13 } from "../../nu_13";
import { midscreen_zoning_combo } from "./midscreen_zoning_combo";
import { beginner_combo } from "./the_beginner_combo";

export function basic_combos() {
    console.clear();
    SELECTOR_TERMINAL.selectMenu([" > The Beginner Combo", " > The Midscreen Zoning Combo"," > Back"], (selected_option) => {
        switch (selected_option) {
            case " > The Beginner Combo": {
                return beginner_combo();
            }

            case " > The Midscreen Zoning Combo": {
                return midscreen_zoning_combo();
            }

            case " > Back": {
                return NU_13();
            }
        }
    });
}