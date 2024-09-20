import { home_menu, SELECTOR_TERMINAL } from "../..";
import { bbcf } from "../bbcf";

export function NU_13() {
    console.clear();
    SELECTOR_TERMINAL.selectMenu([" > Back"], (selected_option) => {
        switch (selected_option) {
            case " > Back": {
                return bbcf();
            }
        }
    });
}