import { change_run_combo, controller, SELECTOR_TERMINAL, sleep } from "../../index";
import { bbcf } from "../bbcf";
import { basic_combos } from "./combos/basic combos/basic_combos";
import colors from "colors";

export function NU_13() {
    console.clear();
    let log_text = `When using ${colors.red(" > Setup Training Mode")} you need to select player 2. Also, select player 1s character as NU-13, and yours as whoevers`;
    SELECTOR_TERMINAL.selectMenu([" > Setup Training Mode", " > Basic Combos", " > Back"], async (selected_option) => {
        switch (selected_option) {
            case " > Setup Training Mode": {
                controller.button.START.setValue(true);
                await sleep(50);
                controller.button.START.setValue(false);
                return NU_13();
            }
            case " > Basic Combos": {
                return basic_combos();
            }

            case " > Back": {
                return bbcf();
            }
        }
    }, log_text);
}