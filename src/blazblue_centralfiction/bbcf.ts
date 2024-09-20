import { home_menu, SELECTOR_TERMINAL } from "..";
import { NU_13 } from "./nu_13/nu_13";

export function bbcf() {
    console.clear();
    SELECTOR_TERMINAL.selectMenu([" > NU-13", " > Back"], (selected_option) => {
        switch(selected_option) {
            case " > NU-13": {
                return NU_13();
            }

            case " > Back": {
                return home_menu();
            }
        }
    });
}