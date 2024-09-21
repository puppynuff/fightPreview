import { change_run_combo, controller, default_run_combo,reset_controller_buttons,/* robot,*/ SELECTOR_TERMINAL, sleep } from "../../../../index";
import { basic_combos } from "./basic_combos";
import colors from "colors";

export function beginner_combo() {
    console.clear();
    change_run_combo(beginner_combo_preview);

    let log_text = `The Beginner Combo ${colors.italic("Works against any grounded opponent.")}
    ${colors.red("2A")} > ${colors.blue("2B")} > ${colors.green("3C")} > ${colors.magenta("236D")}
Basic midscreen Combo. Works with any grounded starter
After ${colors.magenta("236D")} Nu can set up ${colors.magenta("214[D]")} to use in neutral or ${colors.green("214C")} to keep her distance.
Basic midscreen Combo. Works with any grounded starter

${colors.red.italic("https://www.dustloop.com/w/BBCF/Nu-13/Combos")}`;


    SELECTOR_TERMINAL.selectMenu([" > Back"], (selected_option) => {
        switch (selected_option) {
            case " > Back": {
                change_run_combo(default_run_combo);
                return basic_combos();
            }
        }
    }, log_text);
}

async function beginner_combo_preview() {
    controller.axis.dpadHorz.setValue(1);
    await sleep(50);
    controller.axis.dpadHorz.setValue(0);
    await sleep(50);
    controller.axis.dpadHorz.setValue(1);
    await sleep(150);
    controller.axis.dpadHorz.setValue(0);
    await sleep(150);
    controller.axis.dpadVert.setValue(-1);
    controller.button.X.setValue(true);
    await sleep(150);
    controller.button.X.setValue(false);
    controller.button.Y.setValue(true);
    await sleep(250);
    controller.button.Y.setValue(false);
    controller.axis.dpadHorz.setValue(1);
    controller.button.B.setValue(true);
    await sleep(25);
    controller.button.B.setValue(false);
    await sleep(700);
    controller.axis.dpadHorz.reset();
    await sleep(10);
    controller.axis.dpadHorz.setValue(1);
    await sleep(10);
    controller.axis.dpadVert.reset();
    controller.button.A.setValue(true);
    await sleep(10);
    await reset_controller_buttons();
}
