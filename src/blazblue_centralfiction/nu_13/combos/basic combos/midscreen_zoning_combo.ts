import { change_run_combo, controller, default_run_combo,reset_controller_buttons,/* robot,*/ SELECTOR_TERMINAL, sleep } from "../../../../index";
import { basic_combos } from "./basic_combos";
import colors from "colors";


export function midscreen_zoning_combo() {
    console.clear();
    change_run_combo(midscreen_zoning_combo_preview);

    let log_text = `${colors.bold("The Midscreen Zoning Combo")} ${colors.italic("Works against any grounded far opponent in the midscreen")}

${colors.magenta("5DD")} > ${colors.magenta("4DD")} > ${colors.magenta("5DD")} > ${colors.magenta("236D")}~${colors.green("C")} > ${colors.magenta("214D")}~${colors.green("C")} > ${colors.blue("214B")}
Midscreen basic combo off of ${colors.magenta("5DD")}, mostly used while zoning.

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

async function midscreen_zoning_combo_preview() {
    controller.axis.dpadHorz.setValue(-1);
    await sleep(50);
    controller.axis.dpadHorz.setValue(0);
    await sleep(50);
    controller.axis.dpadHorz.setValue(-1);
    await sleep(150);
    controller.axis.dpadHorz.setValue(0);
    await sleep(400);
    controller.button.A.setValue(true);
    await sleep(20);
    controller.button.A.setValue(false);
    await sleep(500);
    controller.button.A.setValue(true);
    await sleep(20);
    controller.button.A.setValue(false);
    await sleep(200);
    controller.axis.dpadHorz.setValue(-1);
    controller.button.A.setValue(true);
    await sleep(20);
    controller.button.A.setValue(false);
    await sleep(500);
    controller.button.A.setValue(true);
    await sleep(20);
    controller.button.A.setValue(false);
    await sleep(250);
    controller.button.A.setValue(true);
    await sleep(20);
    controller.button.A.setValue(false);
    await sleep(500);
    controller.button.A.setValue(true);
    await sleep(20);
    controller.button.A.setValue(false);
    await sleep(200);
    controller.axis.dpadVert.setValue(-1);
    controller.axis.dpadHorz.reset();
    await sleep(20);
    controller.axis.dpadHorz.setValue(1);
    await sleep(20);
    controller.axis.dpadVert.reset();
    await sleep(20);
    controller.button.A.setValue(true);
    await sleep(20);
    controller.button.A.setValue(false);
    await sleep(50);
    controller.button.B.setValue(true);
    await sleep(20);
    controller.button.B.setValue(false);
    await sleep(200);
    controller.axis.dpadVert.setValue(-1);
    controller.axis.dpadHorz.reset();
    await sleep(20);
    controller.axis.dpadHorz.setValue(-1);
    await sleep(20);
    controller.axis.dpadVert.reset();
    await sleep(20);
    controller.button.A.setValue(true);
    await sleep(20);
    controller.button.A.setValue(false);
    await sleep(50);
    controller.button.B.setValue(true);
    await sleep(20);
    controller.button.B.setValue(false);
    await sleep(800);
    controller.axis.dpadVert.setValue(-1);
    controller.axis.dpadHorz.reset();
    await sleep(20);
    controller.axis.dpadHorz.setValue(-1);
    await sleep(20);
    controller.axis.dpadVert.reset();
    controller.button.Y.setValue(true);
    await sleep(20);
    await reset_controller_buttons();
}
